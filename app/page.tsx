import dynamic from "next/dynamic";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Routes from "@/components/Routes";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { site, whatsappLink } from "@/data/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Globe is a client-only component — load it lazily so the page (and SEO
// content) never waits on it.
const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

const processSteps = [
  { step: "Audit", copy: "I look at your site, search presence and socials, and find where growth is leaking." },
  { step: "Strategy", copy: "One clear plan: what to fix, what to build, and in what order — tied to revenue, not vanity metrics." },
  { step: "Build", copy: "Website, content and campaigns built as one system, designed to convert from day one." },
  { step: "Launch", copy: "Tracking, SEO foundations and socials connected properly, so every result is measurable." },
  { step: "Grow", copy: "Monthly optimisation, content and experiments that compound — reported in plain language." },
];

function SectionHead({ label, href, linkText }: { label: string; href?: string; linkText?: string }) {
  return (
    <Reveal>
      <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">{label}</p>
        {href && (
          <Link href={href} className="font-mono text-[11px] uppercase tracking-[0.18em] text-porcelain hover:text-mist">
            {linkText} →
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export default function Home() {
  const latestPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2);

  return (
    <div>
      {/* ---------- HERO ---------- */}
      <section className="hero-glow grain vignette relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 pb-14 pt-12 sm:pt-16 lg:min-h-[86vh] lg:grid-cols-[1.12fr_0.88fr] lg:pb-20">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">
                Business growth partner — for clients worldwide
              </p>
              <h1 className="mt-7 font-display text-[13.5vw] font-extrabold uppercase leading-[0.95] tracking-tight text-porcelain sm:text-6xl lg:text-[4.6rem]">
                Everything
                <br />
                your business
                <br />
                needs to grow<span className="text-signal">.</span>
              </h1>
              <p className="mt-7 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
                Strategy, website, SEO, ads, content, social and video — run
                as one growth system that turns strangers into customers. One
                partner who actually does it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-7">
                <Link
                  href="/contact"
                  className="bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-night transition hover:bg-porcelain"
                >
                  Start a project →
                </Link>
                <Link
                  href="/tools"
                  className="font-display text-sm font-bold uppercase tracking-wide text-porcelain underline decoration-line underline-offset-8 hover:decoration-porcelain"
                >
                  Get a free audit
                </Link>
              </div>
              <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                  <span className="h-2 w-2 rounded-full bg-signal" />
                </span>
                Working worldwide · Chattogram — New York — London — Dubai — Sydney
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="">
              <Globe />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROOF STRIP ---------- */}
      <section className="border-y border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
          <span><span className="text-porcelain">04</span> case studies</span>
          <span><span className="text-porcelain">09</span> growth services</span>
          <span><span className="text-porcelain">03</span> free tools</span>
          <span><span className="text-porcelain">01</span> book</span>
          <span><span className="text-porcelain">01</span> partner — the whole system</span>
        </div>
      </section>

      {/* ---------- STATEMENT ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <h2 className="max-w-4xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-5xl lg:text-6xl">
            Services are tools.
            <br />
            Growth is the product.
          </h2>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
            Most businesses do not need another freelancer for one task. They
            need the whole path — from first click to paying customer —
            working together. Pick one tool, or hand me the whole system.
          </p>
        </Reveal>
      </section>

      {/* ---------- ROUTES ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHead label="Three ways to work together" href="/services" linkText="How it works" />
        <div className="mt-2">
          <Routes />
        </div>
      </section>

      {/* ---------- SERVICES INDEX ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHead label="The growth system — 09 services" href="/services" linkText="All services" />
        <div>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 0.03, 0.2)}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid items-baseline gap-2 border-b border-line py-6 sm:grid-cols-[64px_1fr_1.2fr_32px] sm:gap-6"
              >
                <span className="font-mono text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-xl font-bold uppercase tracking-tight text-porcelain transition-transform duration-300 group-hover:translate-x-1.5 sm:text-2xl">
                  {s.title}
                </span>
                <span className="text-sm leading-relaxed text-mist">{s.copy}</span>
                <span className="hidden text-porcelain opacity-0 transition group-hover:opacity-100 sm:block">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- WORK ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHead label="Selected work" href="/work" linkText="All case studies" />
        <Reveal>
          <h2 className="mb-4 mt-10 max-w-3xl font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-porcelain sm:text-5xl">
            Built, grown, and still growing.
          </h2>
        </Reveal>
        <div>
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.16)}>
              <Link
                href={`/work/${p.slug}`}
                className="group grid items-baseline gap-2 border-b border-line py-7 sm:grid-cols-[64px_1fr_1fr_32px] sm:gap-6"
              >
                <span className="font-mono text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-2xl font-bold uppercase tracking-tight text-porcelain transition-transform duration-300 group-hover:translate-x-1.5 sm:text-3xl">
                    {p.name}
                  </span>
                  <span className="mt-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-mist">{p.tag}</span>
                </span>
                <span>
                  <span className="block text-sm font-medium leading-relaxed text-porcelain">{p.outcome}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-mist">{p.result}</span>
                </span>
                <span className="hidden text-porcelain opacity-0 transition group-hover:opacity-100 sm:block">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHead label="How a project moves" />
        <div className="mt-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={0.05}>
              <div
                className="grid items-baseline gap-2 border-b border-line py-7 sm:grid-cols-[64px_220px_1fr] sm:gap-6"
                style={{ marginLeft: `${Math.min(i * 3.2, 12)}%` }}
              >
                <span className="font-mono text-xs text-mist">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-porcelain">{s.step}</span>
                <span className="max-w-prose text-sm leading-relaxed text-mist sm:text-base">{s.copy}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
            No jargon. No surprises. One piece, or the whole system.
          </p>
        </Reveal>
      </section>

      {/* ---------- FREE TOOLS ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHead label="Free tools" href="/tools" linkText="Open the tools" />
        <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {[
            { n: "01", title: "Instant Website Audit", copy: "Eight honest questions that show exactly where your website is leaking growth." },
            { n: "02", title: "Project Price Estimator", copy: "An instant USD ballpark for your project — final quote confirmed on a short call." },
            { n: "03", title: "Reel Hook Generator", copy: "Proven opening lines for Reels and TikTok, filled in for your topic in seconds." },
          ].map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <Link href="/tools" className="group block border-t border-line pt-6">
                <p className="font-mono text-xs text-mist">{t.n}</p>
                <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-porcelain">{t.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{t.copy}</p>
                <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-porcelain group-hover:text-mist">
                  Try it free →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PRINCIPLE / REVIEWS ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHead label="Results & reviews" />
        <Reveal>
          <blockquote className="mt-12 max-w-3xl">
            <p className="font-serif text-3xl font-medium italic leading-snug text-porcelain sm:text-4xl">
              “I would rather show you the work itself than fill this page
              with quotes nobody can verify.”
            </p>
            <footer className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
              The studio principle — Rakib Ahmed
            </footer>
          </blockquote>
          <p className="mt-8 max-w-prose text-sm leading-relaxed text-mist sm:text-base">
            The studio&apos;s Google profile is new and client reviews are
            being collected there now. Read the case studies, then check the
            public profile — and hold me to it.
          </p>
          <div className="mt-7 flex flex-wrap gap-7">
            <a
              href={site.googleProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-bold uppercase tracking-wide text-porcelain underline decoration-line underline-offset-8 hover:decoration-porcelain"
            >
              See the Google profile
            </a>
            <Link
              href="/work"
              className="font-display text-sm font-bold uppercase tracking-wide text-porcelain underline decoration-line underline-offset-8 hover:decoration-porcelain"
            >
              Read the case studies
            </Link>
            <Link
              href="/reviews"
              className="font-display text-sm font-bold uppercase tracking-wide text-porcelain underline decoration-line underline-offset-8 hover:decoration-porcelain"
            >
              Leave a review
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------- BLOG ---------- */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <SectionHead label="From the journal" href="/blog" linkText="All articles" />
        <div>
          {latestPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid items-baseline gap-2 border-b border-line py-7 sm:grid-cols-[150px_1fr_32px] sm:gap-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
                  {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </span>
                <span>
                  <span className="block font-display text-xl font-bold tracking-tight text-porcelain transition-transform duration-300 group-hover:translate-x-1.5 sm:text-2xl">
                    {post.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-mist">{post.excerpt}</span>
                </span>
                <span className="hidden text-porcelain opacity-0 transition group-hover:opacity-100 sm:block">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- THE BOOK ---------- */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <div className="grid items-center gap-10 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">The Book — New</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-porcelain sm:text-5xl">
                  Website to Customers<span className="text-signal">.</span>
                </h2>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
                  My ebook on the simple system behind this studio: how a
                  website turns visitors into paying clients. 14 chapters, a
                  30-day action plan, and the worksheets to execute it.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 sm:items-end">
                <p className="font-display text-4xl font-extrabold tracking-tight text-porcelain">$11.99</p>
                <Link
                  href="/ebook"
                  className="bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-night transition hover:bg-porcelain"
                >
                  Get the book →
                </Link>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist/70">
                  PDF · 35 pages · Instant start
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <Reveal>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-[0.98] tracking-tight text-porcelain sm:text-7xl">
              Ready to
              <br />
              grow<span className="text-signal">?</span>
            </h2>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-mist">
              Tell me about your project. Replies within one business day —
              wherever in the world your business is.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <Link
                href="/contact"
                className="bg-accent px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-night transition hover:bg-porcelain"
              >
                Start a project →
              </Link>
              <a
                href={whatsappLink("Hi Rakib, I'd like to talk about growing my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm font-bold uppercase tracking-wide text-porcelain underline decoration-line underline-offset-8 hover:decoration-porcelain"
              >
                WhatsApp me
              </a>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-xs tracking-[0.08em] text-mist hover:text-porcelain"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
