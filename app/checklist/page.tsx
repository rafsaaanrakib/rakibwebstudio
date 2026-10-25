import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SubscribeForm from "@/components/SubscribeForm";

export const metadata: Metadata = {
  alternates: { canonical: "/checklist" },
  title: "The 5 Leaks Checklist — check your website in 10 minutes",
  description:
    "Your website probably doesn't have a traffic problem — it has a bucket problem. The five leaks, as a ten-minute self-audit.",
};

const leaks = [
  {
    n: "1",
    title: "The first five seconds say nothing",
    intro: "Open your homepage on your phone. Start a timer.",
    checks: [
      "Within 5 seconds, a stranger can say what you do, who it's for, and what to do next — without scrolling.",
      "Your headline names the customer's outcome, not your company name or \u201cWelcome.\u201d",
      "One clear button or action is visible immediately.",
    ],
    fix: "Rewrite the headline as: [What you do] for [who] — so they [outcome]. Clarity beats cleverness every time.",
  },
  {
    n: "2",
    title: "The site talks about you, not them",
    intro: "Skim your homepage and count.",
    checks: [
      "\u201cYou / your\u201d appears more often than \u201cWe / our.\u201d",
      "Headings describe the visitor's problem or result, not your features and history.",
      "No paragraph starts with your company name.",
    ],
    fix: "Take your longest \u201cabout us\u201d paragraph and rewrite it starting with the customer's problem.",
  },
  {
    n: "3",
    title: "There's no single next step",
    intro: "Look at one service or product page.",
    checks: [
      "There is ONE obvious main action (book, buy, message) — repeated, in the same words.",
      "No competing crowd: multiple different buttons, popups and banners asking for different things.",
      "The action is still visible after scrolling (sticky button or repeated section).",
    ],
    fix: "Pick the one action that makes you money and remove or demote everything that competes with it on that page.",
  },
  {
    n: "4",
    title: "No proof near the decision",
    intro: "Go to the page where money changes hands (checkout, pricing, contact).",
    checks: [
      "A review, testimonial, result or real photo sits on that page — not only on an About page.",
      "Your business looks real: real photos, a name, a face, a location, working hours.",
      "The page loads fast on a phone (under ~3 seconds on mobile data).",
    ],
    fix: "Move your best review to the decision page today. Slow and thin reads as untrustworthy before a single word is read.",
  },
  {
    n: "5",
    title: "The 97% are allowed to vanish",
    intro: "Most visitors won't buy on the first visit. Check what happens to them.",
    checks: [
      "There's a reason to stay connected: a checklist, a guide, a useful email — something worth an email address.",
      "Your WhatsApp or contact option is one tap away on mobile.",
      "You have any way to re-reach past visitors (email list, retargeting, social follow with real content).",
    ],
    fix: "Add one simple capture offer. Even a one-page checklist like this one outperforms \u201csubscribe to our newsletter.\u201d",
  },
];

const scores = [
  { range: "5 solid", text: "Your bucket holds water. Spend on traffic — it will convert." },
  { range: "3–4 solid", text: "Fix the leaks in order (1 → 5). Each fix makes every future visitor worth more." },
  { range: "0–2 solid", text: "Don't buy another ad or redesign yet. The leaks are costing you more than traffic would earn." },
];

export default function ChecklistPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
          Free checklist · Rakib Web Studio
        </p>
        <h1 className="mt-4 font-serif text-3xl font-semibold leading-tight text-porcelain sm:text-[2.6rem]">
          The 5 Leaks Checklist — check your website in 10 minutes
        </h1>
        <p className="mt-5 text-base leading-relaxed text-mist">
          Your website probably doesn&apos;t have a traffic problem. It has a bucket
          problem — visitors leaking out in five predictable places. Go through each
          leak with your homepage open and score honestly: solid, shaky, or leaking.
          This is the checklist version of{" "}
          <Link href="/blog/why-website-not-turning-visitors-into-customers" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">
            the full breakdown
          </Link>
          .
        </p>
      </Reveal>

      {leaks.map((leak) => (
        <Reveal key={leak.n}>
          <section className="mt-12 border-t border-line pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-signal">
              Leak {leak.n}
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-porcelain">{leak.title}</h2>
            <p className="mt-3 text-sm italic leading-relaxed text-mist">{leak.intro}</p>
            <ul className="mt-5 space-y-3">
              {leak.checks.map((c, i) => (
                <li key={i} className="flex gap-3 text-base leading-relaxed text-mist">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 text-porcelain">☐</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border border-line bg-panel px-5 py-4 text-sm leading-relaxed text-porcelain">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">Fix first if leaking — </span>
              {leak.fix}
            </p>
          </section>
        </Reveal>
      ))}

      <Reveal>
        <section className="mt-14 border-t border-line pt-8">
          <h2 className="font-serif text-2xl font-semibold text-porcelain">Your score</h2>
          <div className="mt-5 space-y-3">
            {scores.map((s) => (
              <p key={s.range} className="flex flex-col gap-1 text-base leading-relaxed text-mist sm:flex-row sm:gap-4">
                <span className="shrink-0 font-mono text-sm uppercase tracking-[0.14em] text-porcelain sm:w-24">{s.range}</span>
                <span>{s.text}</span>
              </p>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-mist">
            Want a second pair of eyes? The{" "}
            <Link href="/tools" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">
              free website audit
            </Link>{" "}
            walks the same list with you. And the full system — clarity, converting
            pages, traffic, capture, follow-up — is in my book,{" "}
            <Link href="/ebook" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">
              Website to Customers
            </Link>
            .
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-14 border border-line bg-panel p-7">
          <h2 className="font-serif text-xl font-semibold text-porcelain">
            Get the next post by email
          </h2>
          <p className="mb-5 mt-2 text-sm leading-relaxed text-mist">
            One email whenever a new post goes live. The same systems, applied to real
            businesses — free forever.
          </p>
          <SubscribeForm source="checklist-page" />
        </section>
      </Reveal>
    </div>
  );
}
