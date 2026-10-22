"use client";

import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/data/site";

// No backend on a static site: the form sends straight to Rakib's inbox via a
// free form relay (no signup needed), or the visitor can use WhatsApp instead.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("A new website");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function compose() {
    const lines = [
      `Hi Rakib, I'm ${name || "…"}.`,
      business ? `My business: ${business}` : "",
      `I'm interested in: ${goal}`,
      message ? `\n${message}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          business,
          goal,
          message,
          _subject: `Project enquiry — ${business || name || "Website"}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(`relay responded ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <h2 className="font-serif text-2xl font-semibold text-porcelain">
        Tell me about your project
      </h2>

      {status === "sent" ? (
        <div className="mt-6 rounded-xl border border-mint/40 bg-night p-6">
          <p className="text-lg font-semibold text-porcelain">Message received ✓</p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Thanks{name ? `, ${name}` : ""} — your enquiry is on its way to
            Rakib. Expect a reply within one business day. Prefer chat?{" "}
            <a
              href={whatsappLink(compose())}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mint underline decoration-accent decoration-2 underline-offset-4"
            >
              Message on WhatsApp
            </a>{" "}
            instead.
          </p>
          <button
            type="button"
            onClick={() => {
              setName("");
              setBusiness("");
              setGoal("A new website");
              setMessage("");
              setStatus("idle");
            }}
            className="mt-4 text-sm font-semibold text-accent hover:text-porcelain"
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="cf-name" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Your name
              </label>
              <input
                id="cf-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
              />
            </div>
            <div>
              <label htmlFor="cf-business" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Business / website
              </label>
              <input
                id="cf-business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
              />
            </div>
            <div>
              <label htmlFor="cf-goal" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                What do you need most?
              </label>
              <select
                id="cf-goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
              >
                <option>A new website</option>
                <option>More traffic (SEO)</option>
                <option>More sales / conversions</option>
                <option>Video &amp; social content</option>
                <option>Ads that actually return</option>
                <option>The full growth system</option>
              </select>
            </div>
            <div>
              <label htmlFor="cf-message" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Anything else?
              </label>
              <textarea
                id="cf-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
              />
            </div>
          </div>

          {status === "error" && (
            <p className="mt-4 rounded-lg border border-red-400/40 bg-red-950/30 px-4 py-3 text-sm text-red-200">
              That didn't send — please try again, or reach Rakib directly on{" "}
              <a
                href={whatsappLink(compose())}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                WhatsApp
              </a>
              .
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-accent px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-porcelain disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
            <a
              href={whatsappLink(compose())}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-mint px-5 py-2.5 text-sm font-semibold text-mint transition hover:bg-mint hover:text-night"
            >
              Send by WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-mist/70">
            Your enquiry goes straight to Rakib's inbox — nothing is stored on
            this website. Prefer chat? Use WhatsApp instead.
          </p>
        </>
      )}
    </form>
  );
}
