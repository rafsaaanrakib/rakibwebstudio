import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ReviewForm from "@/components/ReviewForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews" },
  title: "Reviews — Leave a review for Rakib Web Studio",
  description:
    "Worked with Rakib Web Studio? Leave a Google review, or write a short testimonial here. Nothing is published without your approval of the exact words.",
};

const GOOGLE_REVIEW_URL = `${site.googleProfile}/review`;

const rows = [
  {
    n: "01",
    title: "Leave a Google review",
    text: "The fastest way, and the most useful for the next business checking the studio. It goes straight to the public Google profile — no account with the studio, no form.",
  },
  {
    n: "02",
    title: "Or write it here",
    text: "One or two honest sentences about what was built or run for you, and what changed. The form below sends your words to Rakib's inbox — nothing goes live automatically.",
  },
  {
    n: "03",
    title: "Nothing is published without approval",
    text: "Every submission is checked first, and only your exact words — with your name and business — are ever published, after you say yes to them. No quotes are invented, edited into something you didn't say, or published from a private message.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
          Reviews
        </p>
        <h1 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">
          Worked together?
          <br />
          Say it in your words<span className="text-signal">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
          The studio&apos;s Google profile is new, and client reviews are being
          collected here now. If Rakib built your website, ran your SEO or ads,
          or set up your online presence, a short honest review helps the next
          business decide — more than any claim on this site ever could.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-porcelain px-5 py-3 text-sm font-bold uppercase tracking-wide text-night transition hover:bg-signal"
          >
            Leave a Google review →
          </a>
          <a
            href={site.googleProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-5 py-3 text-sm font-bold uppercase tracking-wide text-porcelain transition hover:border-porcelain"
          >
            See the Google profile
          </a>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20 border-t border-line">
          {rows.map((r) => (
            <div key={r.n} className="grid gap-3 border-b border-line py-8 sm:grid-cols-[64px_280px_1fr] sm:gap-6">
              <p className="font-mono text-sm text-signal">{r.n}</p>
              <h2 className="font-display text-lg font-bold uppercase tracking-tight text-porcelain">
                {r.title}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-mist">{r.text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              Client words, when they arrive
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
              No client quotes are published here yet — and none will be invented
              to fill the space. When real, approved words arrive, they go here,
              and beside the service route they describe, exactly as written.
            </p>
            <p className="mt-6 max-w-prose text-sm leading-relaxed text-mist">
              Until then, the work itself is the proof: read the{" "}
              <Link href="/work" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">
                case studies
              </Link>
              , run the{" "}
              <Link href="/tools" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">
                free website audit
              </Link>
              , and check the public Google profile above.
            </p>
          </div>
          <ReviewForm />
        </div>
      </Reveal>
    </div>
  );
}
