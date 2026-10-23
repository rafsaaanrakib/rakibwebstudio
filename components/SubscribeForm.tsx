"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "done" | "already" | "error";

// Newsletter signup — posts to the site's own /api/subscribe endpoint
// (Cloudflare Worker + Resend, no third-party embed). The hidden
// "website" field is a honeypot for bots.
export default function SubscribeForm({ source = "site" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus(data.already ? "already" : "done");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong — please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error — please try again.");
    }
  }

  if (status === "done") {
    return (
      <p className="border border-line bg-panel px-5 py-4 text-sm leading-relaxed text-porcelain">
        You&apos;re in. Check your inbox — the 5 Leaks checklist is on its way to{" "}
        <span className="font-semibold">{email}</span>.
      </p>
    );
  }
  if (status === "already") {
    return (
      <p className="border border-line bg-panel px-5 py-4 text-sm leading-relaxed text-porcelain">
        You&apos;re already on the list — the next post will land in your inbox when it goes live.
      </p>
    );
  }

  return (
    <form onSubmit={submit} className="w-full" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`nl-email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`nl-email-${source}`}
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full border border-line bg-transparent px-4 py-3 text-sm text-porcelain placeholder:text-mist/50 focus:border-porcelain/60 focus:outline-none"
        />
        {/* Honeypot — hidden from humans, tempting to bots */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="shrink-0 bg-porcelain px-6 py-3 text-sm font-semibold text-night transition hover:bg-accent disabled:opacity-60"
        >
          {status === "sending" ? "Joining…" : "Subscribe free"}
        </button>
      </div>
      {status === "error" && <p className="mt-3 text-sm text-red-300">{message}</p>}
      <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-mist/60">
        Free forever · One email per new post · Unsubscribe in one click
      </p>
    </form>
  );
}
