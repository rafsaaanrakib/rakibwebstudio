import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/ebook" },
  title: "Website to Customers — The Book by Rakib Ahmed",
  description:
    "Website to Customers: a simple system for turning visitors into paying clients. 14 chapters, a 30-day action plan and fill-in worksheets. PDF, $11.99.",
};

const buyHref = whatsappLink(
  "Hi Rakib, I want to buy your ebook 'Website to Customers' ($11.99). How do I pay?"
);

const chapters = [
  { n: "01", title: "Why Most Websites Don't Sell", note: "The five problems behind almost every underperforming site" },
  { n: "02", title: "The Foundation — Clarity Before Design", note: "Positioning and the one-sentence value statement" },
  { n: "03", title: "Building a Website That Converts", note: "The 8-part homepage formula" },
  { n: "04", title: "Content Strategy — Attracting the Right Visitors", note: "Content that pulls in buyers, not just traffic" },
  { n: "05", title: "SEO Basics — Getting Found Online", note: "The on-page checklist that covers most of SEO" },
  { n: "06", title: "Social Media & Traffic Generation", note: "One or two channels, done with depth" },
  { n: "07", title: "Turning Visitors into Leads", note: "Lead magnets and opt-ins that actually get used" },
  { n: "08", title: "Turning Leads into Paying Clients", note: "Follow-up that feels human, not automated" },
  { n: "09", title: "Building Trust & Authority Online", note: "Proof, credibility and the trust layer" },
  { n: "10", title: "The 30-Day Website-to-Customer Action Plan", note: "The whole system, week by week" },
  { n: "11", title: "Common Mistakes to Avoid", note: "Seven traps that quietly kill conversions" },
  { n: "12", title: "Pricing & Packaging Your Offer Online", note: "Tiers, anchors and reducing risk" },
  { n: "13", title: "Tools & Resources", note: "A lean, low-cost stack for every part of the system" },
  { n: "14", title: "Frequently Asked Questions", note: "Straight answers to the questions owners ask most" },
];

const worksheets = [
  "Positioning Statement worksheet",
  "Homepage Outline worksheet",
  "Weekly Content Plan",
  "Follow-Up Email Scripts (fill-in templates)",
  "Quick-Reference Checklist",
];

const audience = [
  "Business owners who have a website but aren't getting enough leads or sales from it",
  "Entrepreneurs about to build their first website who want to do it right from day one",
  "Freelancers and service providers who rely on their site to look credible and win clients",
  "Anyone tired of “just post more on social media” advice that doesn't turn into revenue",
];

const faqs = [
  {
    q: "How do I receive the book?",
    a: "It's a PDF (35 pages) that reads well on phone, tablet and desktop. Order on WhatsApp today and it's emailed to you personally — usually within a few hours. A one-click card checkout is opening on this page very shortly.",
  },
  {
    q: "I'm not technical. Is this book for me?",
    a: "Yes — it was written for business owners, not developers. There's no code in it. Every chapter ends with a concrete action step, and the appendix gives you fill-in worksheets and email scripts.",
  },
  {
    q: "How is this different from free advice online?",
    a: "Free advice gives you disconnected tips. This book gives you one system — visitor, lead, trusting prospect, paying client — with a 30-day plan that sequences the work so each step builds on the last.",
  },
  {
    q: "What if it's not right for me?",
    a: "Email me at " + site.email + " — I read every message personally, and I'll make it right.",
  },
];

export default function EbookPage() {
  return (
    <div>
      {/* ——— Hero ——— */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              The Book — by Rakib Ahmed
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-tight text-porcelain sm:text-6xl">
              Website to Customers<span className="text-signal">.</span>
            </h1>
            <p className="mt-5 font-serif text-xl italic leading-snug text-porcelain/85 sm:text-2xl">
              A simple system for turning visitors into paying clients.
            </p>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-mist">
              Most business websites just sit there — they look fine, list some
              services, and bring in nothing. This book is the exact system I
              use with clients to fix that: clarity first, then a site that
              converts, traffic that fits, and follow-up that turns strangers
              into customers. No code, no huge budget, no trend-chasing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={buyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-night transition hover:bg-porcelain"
              >
                Get the book — $11.99
              </a>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                35 pages · 14 chapters · PDF + worksheets
              </p>
            </div>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-mist/80">
              Ordering opens on WhatsApp today while the card checkout is
              being switched on — order now and the PDF lands in your inbox
              within a few hours.
            </p>
          </Reveal>

          {/* CSS book cover */}
          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-sm [perspective:1200px]">
              <div className="relative aspect-[3/4] rotate-[-2deg] border border-line bg-panel shadow-[30px_40px_80px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:rotate-0">
                <div className="absolute inset-y-0 left-0 w-[10px] bg-gradient-to-r from-black/60 to-transparent" />
                <div className="flex h-full flex-col justify-between p-8 sm:p-10">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mist">
                      Rakib Web Studio
                    </p>
                    <div className="mt-10 font-display text-[42px] font-extrabold uppercase leading-[0.95] tracking-tight text-porcelain sm:text-5xl">
                      Website
                      <br />
                      to
                      <br />
                      Customers<span className="text-signal">.</span>
                    </div>
                    <p className="mt-5 max-w-[26ch] font-serif text-base italic leading-snug text-porcelain/75">
                      A simple system for turning visitors into paying
                      clients
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-porcelain">
                      Rakib Ahmed
                    </p>
                    <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-mist">
                      Get found · Get trusted · Get chosen
                    </p>
                  </div>
                </div>
                <div className="absolute -right-3 top-8 bg-signal px-3 py-2 font-display text-sm font-extrabold uppercase tracking-wide text-night">
                  $11.99
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* The four stages */}
        <Reveal delay={0.1} className="mt-20">
          <div className="grid gap-px border border-line bg-line sm:grid-cols-4">
            {["Visitor", "Interested Lead", "Trusting Prospect", "Paying Client"].map(
              (stage, i) => (
                <div key={stage} className="bg-night px-6 py-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
                    Stage {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-display text-base font-bold uppercase tracking-wide text-porcelain">
                    {stage}
                  </p>
                </div>
              )
            )}
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-mist/70">
            Every chapter maps to one stage of this path
          </p>
        </Reveal>
      </section>

      {/* ——— Pull quote ——— */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-24">
          <Reveal>
            <p className="font-serif text-2xl italic leading-snug text-porcelain sm:text-[32px]">
              “A website doesn&apos;t need to be beautiful to sell. It needs to
              be clear, trustworthy, and connected to a follow-up system.”
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              From Chapter 1 — Why Most Websites Don&apos;t Sell
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——— Who it's for ——— */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Who it&apos;s for</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-porcelain sm:text-4xl">
              Written for owners, not marketers.
            </h2>
          </Reveal>
          <div className="mt-12">
            {audience.map((item, i) => (
              <Reveal key={item} delay={i * 0.05}>
                <div className="grid gap-2 border-t border-line py-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                  <span className="font-mono text-sm text-mist/60">{String(i + 1).padStart(2, "0")}</span>
                  <p className="max-w-prose text-base leading-relaxed text-porcelain/90">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Chapters ——— */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">What&apos;s inside</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-porcelain sm:text-4xl">
                  14 chapters. One system.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-mist">
                Plus a glossary in plain language and an appendix of templates
                and worksheets you fill in as you go.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-x-14 lg:grid-cols-2">
            {chapters.map((c, i) => (
              <Reveal key={c.n} delay={(i % 2) * 0.05}>
                <div className="grid gap-1 border-t border-line py-5 sm:grid-cols-[3.5rem_1fr] sm:gap-4">
                  <span className="font-mono text-sm text-mist/60">{c.n}</span>
                  <div>
                    <h3 className="font-display text-[15px] font-bold uppercase tracking-wide text-porcelain">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-mist">{c.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.08} className="mt-14">
            <div className="border border-line bg-panel px-7 py-8 sm:px-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
                Included in the appendix
              </p>
              <h3 className="mt-3 font-display text-xl font-extrabold uppercase tracking-tight text-porcelain">
                Worksheets &amp; templates — not just reading
              </h3>
              <ul className="mt-5 grid gap-x-10 gap-y-2.5 text-sm text-porcelain/90 sm:grid-cols-2">
                {worksheets.map((w) => (
                  <li key={w} className="flex gap-3">
                    <span className="text-signal">—</span>
                    {w}
                  </li>
                ))}
                <li className="flex gap-3">
                  <span className="text-signal">—</span>
                  The 30-Day Action Plan checklist
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Author + FAQ ——— */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">About the author</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-porcelain">
              Rakib Ahmed
            </h2>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-mist">
              I help businesses around the world get found, trusted and chosen
              online — through websites, content strategy and social growth.
              I built ZANA&apos;s e-commerce store from scratch and run its
              SEO and ads, and I&apos;ve turned the system behind that work
              into this book: simple, practical, and built to be applied the
              same week you read it.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
              Rather have the system built for you?{" "}
              <Link href="/contact" className="text-porcelain underline decoration-signal decoration-2 underline-offset-4 hover:text-signal">
                Book a free consultation
              </Link>{" "}
              — no pressure, just a conversation about where your business
              stands.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Questions</p>
            <div className="mt-3">
              {faqs.map((f) => (
                <div key={f.q} className="border-t border-line py-6">
                  <h3 className="font-display text-[15px] font-bold uppercase tracking-wide text-porcelain">
                    {f.q}
                  </h3>
                  <p className="mt-2 max-w-prose text-sm leading-relaxed text-mist">{f.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className="border-t border-line bg-panel">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
              Website to Customers — the ebook
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-5xl">
              Your website should be your hardest-working salesperson.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist">
              35 pages, one system, a 30-day plan and the worksheets to execute
              it — for less than one boosted post.
            </p>
            <a
              href={buyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block bg-accent px-8 py-4 font-display text-sm font-bold uppercase tracking-wide text-night transition hover:bg-porcelain"
            >
              Get the book — $11.99
            </a>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-mist/70">
              PDF · Delivered by email · Works on any device
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
