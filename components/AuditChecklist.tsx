"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const questions = [
  "My site loads fast on a phone (under about 3 seconds)",
  "Every page has a unique title and description in Google results",
  "My Google Business Profile is claimed, complete and reviewed",
  "Visitors can contact me in one tap (call, WhatsApp or form) from every page",
  "I know exactly which pages bring enquiries or sales (analytics is set up)",
  "My homepage says in 5 seconds who I help and what they should do next",
  "I publish useful content or video at least twice a month",
  "My product/service pages have reviews, FAQs and clear pricing signals",
];

// A quick honest self-audit — the same first-pass checklist used on real
// client projects. It is a self-assessment, not an automated site crawl.
export default function AuditChecklist() {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [email, setEmail] = useState("");
  const [reportStatus, setReportStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [reportMessage, setReportMessage] = useState("");

  async function sendReport(e: React.FormEvent) {
    e.preventDefault();
    if (reportStatus === "sending") return;
    setReportStatus("sending");
    setReportMessage("");
    try {
      const res = await fetch("/api/audit-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          score,
          total: questions.length,
          missing: questions.filter((_, i) => !checked[i]),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setReportStatus("done");
      } else {
        setReportStatus("error");
        setReportMessage(data.error || "Something went wrong — please try again.");
      }
    } catch {
      setReportStatus("error");
      setReportMessage("Network error — please try again.");
    }
  }

  const score = useMemo(
    () => Object.values(checked).filter(Boolean).length,
    [checked]
  );
  const answered = Object.keys(checked).length;

  const verdict =
    score >= 7
      ? "Strong foundations. The wins now are in optimisation and scale."
      : score >= 4
        ? "A solid start — but money is leaking in the gaps. Each unticked item is a fixable growth blocker."
        : "Your website is working far below its potential. The good news: these are the fastest fixes with the biggest payoff.";

  return (
    <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
      <h3 className="font-serif text-2xl font-semibold text-porcelain">
        Instant Website Audit — Self-Check
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-mist">
        Eight honest questions, the same first pass I run on every project.
        Tick what is true for your website today.
      </p>

      <div className="mt-6 space-y-3">
        {questions.map((q, i) => (
          <label
            key={q}
            className="flex cursor-pointer items-start gap-3 rounded-lg border border-line bg-night px-4 py-3 text-sm text-mist"
          >
            <input
              type="checkbox"
              checked={!!checked[i]}
              onChange={(e) =>
                setChecked((prev) => ({ ...prev, [i]: e.target.checked }))
              }
              className="mt-0.5 h-4 w-4 accent-[#38BDF8]"
            />
            {q}
          </label>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-night p-5">
        <p className="text-xs uppercase tracking-[0.14em] text-mist">
          Your score: {score} / {questions.length}
          {answered < questions.length ? " (keep ticking)" : ""}
        </p>
        {answered === questions.length && (
          <>
            <p className="mt-2 text-sm leading-relaxed text-porcelain">{verdict}</p>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-accent px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-porcelain"
            >
              Get the full free audit
            </Link>

            {reportStatus === "done" ? (
              <p className="mt-5 border border-line bg-panel px-4 py-3 text-sm leading-relaxed text-porcelain">
                Your report is on its way to <span className="font-semibold">{email}</span> — score,
                your leaks, and the 5 Leaks checklist.
              </p>
            ) : (
              <form onSubmit={sendReport} className="mt-5" noValidate>
                <label htmlFor="audit-email" className="text-xs uppercase tracking-[0.14em] text-mist">
                  Email me this report
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="audit-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full border border-line bg-transparent px-4 py-2.5 text-sm text-porcelain placeholder:text-mist/50 focus:border-porcelain/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={reportStatus === "sending"}
                    className="shrink-0 bg-porcelain px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-accent disabled:opacity-60"
                  >
                    {reportStatus === "sending" ? "Sending…" : "Send my report"}
                  </button>
                </div>
                {reportStatus === "error" && <p className="mt-3 text-sm text-red-300">{reportMessage}</p>}
                <p className="mt-2.5 text-xs leading-relaxed text-mist/70">
                  You&apos;ll also join the newsletter — one email per new post,
                  unsubscribe in one click. No spam, ever.
                </p>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
