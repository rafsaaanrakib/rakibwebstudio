// Rakib Web Studio — Worker front door.
//
// The site itself is a 100% static Next.js export, served through the
// ASSETS binding. This Worker only adds the newsletter system, built
// Panther-style (no newsletter platform): the subscriber list and the
// sending live in Resend (free tier), and this file is the glue.
//
// Required Worker secrets/variables (Cloudflare dashboard → Settings):
//   RESEND_API_KEY      Resend API key with full access
//   NEWSLETTER_SECRET   random string; signs unsubscribe tokens and
//                       authorises POST /api/send-latest
//   RESEND_SEGMENT_ID   optional — the Worker auto-discovers the
//                       account's segment at send time when unset
//
// Built against Resend's current API (contacts are global; broadcasts
// target a segment — the old "audiences" model is deprecated).
//
// Routes:
//   POST /api/subscribe     { email } → adds contact + sends welcome email
//   GET  /api/unsubscribe   ?t=<token> → one-click unsubscribe page
//   POST /api/unsubscribe   RFC 8058 one-click (from mail clients)
//   POST /api/send-latest   header x-newsletter-secret → emails the
//                           newest post from /rss.xml to the audience
//                           (called by Muse right after a post deploys)

const SITE = "https://rakibwebstudio.com";
const FROM = "Rakib Web Studio <newsletter@rakibwebstudio.com>";
const REPLY_TO = "rakib.official13155@gmail.com";

const LEGACY_REDIRECTS = {
  "/blog/seo-checklist-local-business": "/blog/seo-checklist-growing-business",
};

// Short vanity path that used to 404 in Search Console (guessed LinkedIn URL
// on this domain) — send it to the real LinkedIn profile instead.
const EXTERNAL_REDIRECTS = {
  "/in/rafsaanrakib": "https://www.linkedin.com/in/rafsaanrakib",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, "") || "/";

    if (LEGACY_REDIRECTS[path]) {
      return Response.redirect(`${SITE}${LEGACY_REDIRECTS[path]}`, 301);
    }

    if (EXTERNAL_REDIRECTS[path]) {
      return Response.redirect(EXTERNAL_REDIRECTS[path], 301);
    }

    if (path === "/api/subscribe" && request.method === "POST") {
      return handleSubscribe(request, env);
    }
    if (path === "/api/audit-report" && request.method === "POST") {
      return handleAuditReport(request, env);
    }
    if (path === "/api/unsubscribe" && (request.method === "GET" || request.method === "POST")) {
      return handleUnsubscribe(request, env, url);
    }
    if (path === "/api/send-latest" && request.method === "POST") {
      return handleSendLatest(request, env);
    }
    if (path === "/" && request.method !== "GET" && request.method !== "HEAD") {
      // Credential probes (e.g. vault connection checks) may POST to the
      // root with the secret header. Answer them here instead of letting
      // the static asset handler 405: 200 with the right secret, else 401.
      if (!configured(env)) return json({ ok: false, error: "not configured" }, 503);
      if (request.headers.get("x-newsletter-secret") !== env.NEWSLETTER_SECRET) {
        return json({ ok: false, error: "unauthorised" }, 401);
      }
      return json({ ok: true });
    }
    if (path === "/api/health") {
      // Side-effect-free credential check (used by Muse's vault connector
      // validation): 200 only when the caller presents the right secret.
      if (!configured(env)) return json({ ok: false, error: "not configured" }, 503);
      if (request.headers.get("x-newsletter-secret") !== env.NEWSLETTER_SECRET) {
        return json({ ok: false, error: "unauthorised" }, 401);
      }
      return json({ ok: true });
    }
    if (path.startsWith("/api/")) {
      return json({ error: "Not found" }, 404);
    }

    // HSTS (SEOquake audit 2026-10-25 flagged it missing). The site is
    // HTTPS-only — Always Use HTTPS plus the www→apex redirect are both
    // verified — so telling browsers to never attempt HTTP is safe. Set
    // here in code, not in the dashboard, so it survives every deploy.
    const res = await env.ASSETS.fetch(request);
    const headers = new Headers(res.headers);
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    return new Response(res.body, {
      status: res.status,
      statusText: res.statusText,
      headers,
    });
  },
};

// ---------- helpers ----------

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function b64urlEncode(str) {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function b64urlDecode(str) {
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  return decodeURIComponent(escape(atob(b64)));
}

async function hmacHex(secret, message) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function makeToken(email, secret) {
  return `${b64urlEncode(email)}.${await hmacHex(secret, email)}`;
}

async function readToken(token, secret) {
  if (!token || !token.includes(".")) return null;
  const [enc, sig] = token.split(".");
  let email;
  try {
    email = b64urlDecode(enc);
  } catch {
    return null;
  }
  const expected = await hmacHex(secret, email);
  if (sig.length !== expected.length) return null;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  return diff === 0 ? email : null;
}

async function resend(env, path, options = {}) {
  const res = await fetch(`https://api.resend.com${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {
    /* keep raw text out of responses */
  }
  return { ok: res.ok, status: res.status, data, text };
}

function configured(env) {
  return Boolean(env.RESEND_API_KEY && env.NEWSLETTER_SECRET);
}

// The dashboard segment Rakib created for the newsletter (2026-10-24).
// Site signups create Resend global contacts with zero segment membership,
// so broadcasts to an auto-discovered empty segment fail with 422
// "audience has no contacts". These helpers find that segment by name and
// make sure contacts are actually in it before a broadcast is created.
const NEWSLETTER_SEGMENT_NAME = "Newsletter subscribers";

async function listSegments(env) {
  const r = await resend(env, "/segments");
  if (Array.isArray(r.data?.data)) return r.data.data;
  if (Array.isArray(r.data)) return r.data;
  return [];
}

async function findNewsletterSegmentId(env) {
  const segs = await listSegments(env);
  const named = segs.find((s) => s.name === NEWSLETTER_SEGMENT_NAME);
  return named?.id || segs[0]?.id || null;
}

async function addContactToSegment(env, email, segmentId) {
  if (!segmentId || !email) return false;
  const r = await resend(env, `/contacts/${encodeURIComponent(email)}/segments/${segmentId}`, {
    method: "POST",
  });
  return r.ok;
}

async function ensureContactsInSegment(env, segmentId) {
  if (!segmentId) return;
  const list = await resend(env, "/contacts?limit=100");
  const contacts = Array.isArray(list.data?.data) ? list.data.data : [];
  for (const c of contacts) {
    if (c.unsubscribed || !c.email) continue;
    try {
      await addContactToSegment(env, c.email, segmentId);
    } catch {
      /* best effort — a failed add must not block the broadcast */
    }
  }
}

// ---------- subscribe ----------

async function handleSubscribe(request, env) {
  if (!configured(env)) {
    return json({ error: "The newsletter is being set up — please try again in a day or two." }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Honeypot: real visitors never fill the hidden "website" field.
  if (body.website) return json({ ok: true });

  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return json({ error: "That email address doesn't look right." }, 400);
  }

  const created = await resend(env, "/contacts", {
    method: "POST",
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!created.ok) {
    if (/already|exists|duplicate/i.test(created.text || "")) {
      try {
        const segId = await findNewsletterSegmentId(env);
        if (segId) await addContactToSegment(env, email, segId);
      } catch {}
      return json({ ok: true, already: true });
    }
    return json({ error: "Something went wrong on our side — please try again." }, 502);
  }

  // New signups must land in the newsletter segment, or future broadcasts
  // will see an empty group again. Best effort — never fail the signup.
  try {
    const segId = await findNewsletterSegmentId(env);
    if (segId) await addContactToSegment(env, email, segId);
  } catch {}

  const token = await makeToken(email, env.NEWSLETTER_SECRET);
  await resend(env, "/emails", {
    method: "POST",
    body: JSON.stringify({
      from: FROM,
      to: [email],
      reply_to: REPLY_TO,
      subject: "Your 5 Leaks checklist — and welcome",
      html: welcomeEmailHtml(`${SITE}/api/unsubscribe?t=${token}`),
    }),
  });

  return json({ ok: true });
}

// ---------- audit report ----------
// The /tools self-audit offers "email me this report": creates the
// contact (the form says plainly that it also joins the newsletter) and
// sends the visitor their score + the items they didn't tick — the
// WebFX/Neil pattern of a diagnostic tool feeding the list, run on the
// studio's own machinery.

function escHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

async function handleAuditReport(request, env) {
  if (!configured(env)) {
    return json({ error: "Email reports are being set up — please try again in a day or two." }, 503);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  if (body.website) return json({ ok: true }); // honeypot

  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return json({ error: "That email address doesn't look right." }, 400);
  }

  const total = Math.min(Math.max(parseInt(body.total, 10) || 8, 1), 20);
  const score = Math.min(Math.max(parseInt(body.score, 10) || 0, 0), total);
  const missing = (Array.isArray(body.missing) ? body.missing : [])
    .map((m) => String(m).slice(0, 160))
    .filter(Boolean)
    .slice(0, total);

  let already = false;
  const created = await resend(env, "/contacts", {
    method: "POST",
    body: JSON.stringify({ email, unsubscribed: false }),
  });
  if (!created.ok) {
    if (/already|exists|duplicate/i.test(created.text || "")) {
      already = true;
    } else {
      return json({ error: "Something went wrong on our side — please try again." }, 502);
    }
  }

  // Audit-report signups join the newsletter too, so put them in the segment.
  try {
    const segId = await findNewsletterSegmentId(env);
    if (segId) await addContactToSegment(env, email, segId);
  } catch {}

  const verdict =
    score >= 7
      ? "Strong foundations. The wins now are in optimisation and scale."
      : score >= 4
        ? "A solid start — but money is leaking in the gaps. Each item below is a fixable growth blocker."
        : "Your website is working far below its potential. The good news: these are the fastest fixes with the biggest payoff.";

  const missingHtml = missing.length
    ? `<p style="margin:18px 0 8px;color:#ECECE6;"><strong>Where you're leaking:</strong></p>` +
      missing.map((m) => `<p style="margin:0 0 6px;">— ${escHtml(m)}</p>`).join("")
    : `<p style="margin:18px 0 0;">You ticked everything — your foundations are genuinely in place. The checklist below shows the order to optimise what already works.</p>`;

  const token = await makeToken(email, env.NEWSLETTER_SECRET);
  const sent = await resend(env, "/emails", {
    method: "POST",
    body: JSON.stringify({
      from: FROM,
      to: [email],
      reply_to: REPLY_TO,
      subject: `Your website audit — you scored ${score} of ${total}`,
      html: emailShell({
        label: "YOUR WEBSITE AUDIT",
        title: `You scored ${score} of ${total}.`,
        bodyHtml:
          `<p style="margin:0;">${escHtml(verdict)}</p>` +
          missingHtml +
          `<p style="margin:18px 0 0;">The full 5 Leaks Checklist walks through each one — what it costs you and the order to fix them. You're also on the newsletter now: one email whenever a new post goes live, unsubscribe anytime.</p>`,
        buttonLabel: "GET THE 5 LEAKS CHECKLIST →",
        buttonHref: `${SITE}/checklist`,
        unsubscribeHref: `${SITE}/api/unsubscribe?t=${token}`,
      }),
    }),
  });
  if (!sent.ok) {
    return json({ error: "The report couldn't be sent — please try again." }, 502);
  }

  return json({ ok: true, already });
}

// ---------- unsubscribe ----------

async function setUnsubscribed(env, email) {
  const list = await resend(env, `/contacts?limit=100`);
  const contact = list.data?.data?.find((c) => c.email?.toLowerCase() === email);
  const attempts = [];
  if (contact?.id) attempts.push(`/contacts/${contact.id}`);
  attempts.push(`/contacts/${encodeURIComponent(email)}`);
  for (const path of attempts) {
    const r = await resend(env, path, {
      method: "PATCH",
      body: JSON.stringify({ unsubscribed: true }),
    });
    if (r.ok) return true;
  }
  return false;
}

function messagePage(title, text) {
  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} — Rakib Web Studio</title></head><body style="margin:0;background:#0A0A0B;color:#ECECE6;font-family:Georgia,serif;padding:64px 24px;"><div style="max-width:560px;margin:0 auto;"><p style="font-family:monospace;font-size:11px;letter-spacing:0.28em;color:#8A8A84;">RAKIB WEB STUDIO</p><h1 style="font-size:32px;line-height:1.2;">${title}</h1><p style="color:#B9B9B0;line-height:1.7;font-size:16px;">${text}</p><p style="margin-top:32px;"><a href="${SITE}" style="color:#ECECE6;">← Back to rakibwebstudio.com</a></p></div></body></html>`,
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}

async function handleUnsubscribe(request, env, url) {
  if (!configured(env)) {
    return messagePage("Unsubscribe", "The newsletter is being set up — please try again in a day or two.");
  }
  let token = url.searchParams.get("t");
  if (!token && request.method === "POST") {
    const form = await request.formData().catch(() => null);
    token = form?.get("t");
  }
  const email = token ? await readToken(String(token), env.NEWSLETTER_SECRET) : null;
  if (!email) {
    return messagePage("That link didn't work", "The unsubscribe link looks incomplete. Reply to any newsletter email and Rakib will remove you by hand.");
  }
  const done = await setUnsubscribed(env, email);
  if (request.method === "POST") {
    return json({ ok: done });
  }
  return done
    ? messagePage("You've been unsubscribed", `${email} won't receive the newsletter anymore. No hard feelings — the blog stays free for everyone.`)
    : messagePage("Something went wrong", "We couldn't complete the unsubscribe automatically. Email rakib.official13155@gmail.com and Rakib will remove you by hand.");
}

// ---------- send latest post ----------

function xmlField(block, tag) {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .trim();
}

async function handleSendLatest(request, env) {
  if (!configured(env)) return json({ error: "Newsletter not configured." }, 503);
  if (request.headers.get("x-newsletter-secret") !== env.NEWSLETTER_SECRET) {
    return json({ error: "Unauthorised." }, 401);
  }

  let wantedSlug = null;
  try {
    const body = await request.json();
    wantedSlug = body?.slug || null;
  } catch {
    /* no body → latest post */
  }

  // Read the feed from the Worker's own static assets first. Fetching the
  // public URL from inside the Worker failed at deploy time (HTTP 502
  // "Could not read the site RSS feed." in the post-2 build log, even
  // though /rss.xml served fine from outside) — a self-fetch race, not a
  // broken feed. Fall back to the public fetch only if ASSETS misses.
  let feedRes = null;
  try {
    feedRes = await env.ASSETS.fetch(new Request(`${SITE}/rss.xml`));
  } catch {
    feedRes = null;
  }
  if (!feedRes || !feedRes.ok) {
    try {
      feedRes = await fetch(`${SITE}/rss.xml`);
    } catch {
      feedRes = null;
    }
  }
  if (!feedRes || !feedRes.ok) {
    return json(
      { error: "Could not read the site RSS feed.", status: feedRes?.status || null },
      502
    );
  }
  const feed = await feedRes.text();
  const items = [...feed.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  if (!items.length) return json({ error: "No posts in the feed." }, 404);

  let item = items[0];
  if (wantedSlug) {
    item = items.find((b) => xmlField(b, "link").endsWith(`/blog/${wantedSlug}`)) || null;
    if (!item) return json({ error: `Post ${wantedSlug} not found in the feed.` }, 404);
  }

  const title = xmlField(item, "title");
  const link = xmlField(item, "link");
  const excerpt = xmlField(item, "description");
  const pubDate = xmlField(item, "pubDate");
  const slug = link.split("/blog/")[1] || "latest";
  const name = `post:${slug}`;

  const existing = await resend(env, "/broadcasts");
  const dupe = existing.data?.data?.find(
    (b) => b.name === name && (b.status === "sent" || b.status === "queued" || b.status === "scheduled")
  );
  if (dupe) return json({ ok: false, error: `Already sent (${name}).` }, 409);

  // Resolve the target: broadcasts need a segment_id in Resend's current
  // API (audience_id is the deprecated alias). Prefer the env override,
  // then the "Newsletter subscribers" segment by name, then the account's
  // first segment, then the legacy audience as a last resort.
  let target = {};
  if (env.RESEND_SEGMENT_ID) {
    target = { segment_id: env.RESEND_SEGMENT_ID };
  } else {
    const segId = await findNewsletterSegmentId(env);
    if (segId) {
      target = { segment_id: segId };
    } else {
      const audiences = await resend(env, "/audiences");
      const audId = audiences.data?.data?.[0]?.id;
      if (audId) target = { audience_id: audId };
    }
  }
  if (!target.segment_id && !target.audience_id) {
    return json({ error: "No Resend segment or audience found to send to." }, 502);
  }
  // A segment with no members makes Resend refuse the broadcast (422).
  // Make sure every subscribed contact is in the target segment first —
  // this also covers the existing contact, even if it was never added
  // to the segment by hand.
  if (target.segment_id) {
    await ensureContactsInSegment(env, target.segment_id);
  }

  const created = await resend(env, "/broadcasts", {
    method: "POST",
    body: JSON.stringify({
      ...target,
      from: FROM,
      reply_to: REPLY_TO,
      subject: title,
      name,
      html: postEmailHtml({ title, link, excerpt, pubDate }),
      send: true,
    }),
  });
  if (!created.ok || !created.data?.id) {
    return json({ error: "Broadcast creation failed.", detail: created.text?.slice(0, 500) }, 502);
  }

  return json({ ok: true, broadcast_id: created.data.id, post: slug });
}

// ---------- email templates (Panther-style dark editorial card) ----------

function emailShell({ label, title, bodyHtml, buttonLabel, buttonHref, unsubscribeHref }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A0B;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0B;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#101012;border:1px solid #26262A;">
<tr><td style="padding:22px 32px;border-bottom:1px solid #26262A;">
<span style="font-family:monospace;font-size:12px;letter-spacing:0.28em;color:#ECECE6;">RAKIB<span style="color:#38BDF8;">.</span> WEB STUDIO</span>
<span style="float:right;font-family:monospace;font-size:11px;letter-spacing:0.18em;color:#8A8A84;">NEWSLETTER</span>
</td></tr>
<tr><td style="padding:36px 32px 8px;">
<p style="margin:0;font-family:monospace;font-size:11px;letter-spacing:0.24em;color:#8A8A84;">${label}</p>
<h1 style="margin:14px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:29px;line-height:1.25;color:#ECECE6;font-weight:600;">${title}</h1>
</td></tr>
<tr><td style="padding:16px 32px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.75;color:#B9B9B0;">${bodyHtml}</td></tr>
<tr><td style="padding:28px 32px 36px;">
<a href="${buttonHref}" style="display:inline-block;background:#ECECE6;color:#0A0A0B;text-decoration:none;font-family:monospace;font-size:13px;letter-spacing:0.12em;padding:13px 24px;">${buttonLabel}</a>
</td></tr>
<tr><td style="padding:22px 32px;border-top:1px solid #26262A;font-family:monospace;font-size:11px;line-height:1.8;color:#77776F;">
You get this because you subscribed to Rakib Web Studio at rakibwebstudio.com. <a href="${unsubscribeHref}" style="color:#B9B9B0;">Unsubscribe</a> in one click.<br>
Rakib Web Studio · Chattogram, Bangladesh · Working worldwide
</td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function postEmailHtml({ title, link, excerpt, pubDate }) {
  const date = pubDate
    ? new Date(pubDate).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : "";
  return emailShell({
    label: `NEW POST${date ? ` · ${date.toUpperCase()}` : ""}`,
    title,
    bodyHtml: `<p style="margin:0;">${excerpt}</p>`,
    buttonLabel: "READ THE POST →",
    buttonHref: link,
    unsubscribeHref: "{{{RESEND_UNSUBSCRIBE_URL}}}",
  });
}

function welcomeEmailHtml(unsubscribeHref) {
  return emailShell({
    label: "WELCOME",
    title: "You're in. Here's your checklist.",
    bodyHtml:
      `<p style="margin:0 0 14px;">Thanks for subscribing. As promised, here's the <strong style="color:#ECECE6;">5 Leaks Checklist</strong> — the ten-minute self-audit that shows where your website is quietly losing customers, and what to fix first.</p>` +
      `<p style="margin:0;">From now on you'll get one email whenever a new post goes live on the blog — the same system I use with clients: websites that turn visitors into customers. No spam, no noise, unsubscribe anytime.</p>`,
    buttonLabel: "GET THE 5 LEAKS CHECKLIST →",
    buttonHref: `${SITE}/checklist`,
    unsubscribeHref,
  });
}
