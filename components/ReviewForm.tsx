"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

// Same form relay as the contact form (already activated for rakibwebstudio.com).
// Submissions go straight to Rakib's inbox — nothing is published automatically.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

type Status = "idle" | "sending" | "sent" | "error";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [words, setWords] = useState("");
  const [allowPublish, setAllowPublish] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

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
          message: words,
          allowPublish: allowPublish ? "Yes — may publish my exact words" : "No — do not publish",
          _subject: `Testimonial submission — ${business || name || "Website"}`,
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
        Write a testimonial here
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        One or two honest sentences are enough. Nothing goes live automatically —
        Rakib reads every submission and only publishes your exact words, with
        your name and business, after you approve them.
      </p>

      {status === "sent" ? (
        <div className="mt-6 rounded-xl border border-mint/40 bg-night p-6">
          <p className="text-lg font-semibold text-porcelain">Thank you{name ? `, ${name}` : ""} ✓</p>
          <p className="mt-2 text-sm leading-relaxed text-mist">
            Your words are on their way to Rakib. He will check them and get in
            touch before anything is published.
          </p>
          <button
            type="button"
            onClick={() => {
              setName("");
              setBusiness("");
              setWords("");
              setAllowPublish(false);
              setStatus("idle");
            }}
            className="mt-4 text-sm font-semibold text-accent hover:text-porcelain"
          >
            Write another
          </button>
        </div>
      ) : (
        <>
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="rf-name" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Your name
              </label>
              <input
                id="rf-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
              />
            </div>
            <div>
              <label htmlFor="rf-business" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Business / website
              </label>
              <input
                id="rf-business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
              />
            </div>
            <div>
              <label htmlFor="rf-words" className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Your words
              </label>
              <textarea
                id="rf-words"
                required
                rows={4}
                value={words}
                onChange={(e) => setWords(e.target.value)}
                placeholder="What did Rakib build or run for you, and what changed?"
                className="mt-2 w-full rounded-lg border border-line bg-night px-3 py-2.5 text-sm text-porcelain"
              />
            </div>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-mist">
              <input
                type="checkbox"
                checked={allowPublish}
                onChange={(e) => setAllowPublish(e.target.checked)}
                className="mt-1"
              />
              <span>
                I allow Rakib to publish my exact words above, with my name and
                business, after showing them to me for approval.
              </span>
            </label>
          </div>

          {status === "error" && (
            <p className="mt-4 rounded-lg border border-red-400/40 bg-red-950/30 px-4 py-3 text-sm text-red-200">
              That didn&apos;t send — please try again, or leave a Google review
              using the button above instead.
            </p>
          )}

          <div className="mt-6">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-accent px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-porcelain disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send testimonial"}
            </button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-mist/70">
            Your submission goes straight to Rakib&apos;s inbox — nothing is
            stored on this website, and nothing is published without your approval.
          </p>
        </>
      )}
    </form>
  );
}
