import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import ChecklistCTA from "@/components/ChecklistCTA";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/work" },
  title: "Work — Case Studies",
  description:
    "Case studies from Rakib Web Studio: e-commerce builds, product launches, full online setups, SEO and video for brands and online stores.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Work</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">
          Built, grown, and still growing.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
          Real projects, run end to end: the build, the search visibility, the
          content and the ads — one system, one partner.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <TiltCard className="h-full">
              <Link href={`/work/${p.slug}`} className="block h-full rounded-2xl border border-line bg-panel p-7 hover:border-accent/60">
                <p className="text-xs uppercase tracking-[0.16em] text-mint">{p.tag}</p>
                <h2 className="mt-4 font-serif text-2xl font-semibold text-porcelain">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist">{p.copy}</p>
                <p className="mt-4 font-display text-base font-bold uppercase leading-snug tracking-tight text-porcelain">{p.outcome}</p>
                <p className="mt-2 text-sm font-medium text-porcelain/80">{p.result}</p>
                <p className="mt-5 text-sm font-semibold text-accent">Read the case study →</p>
              </Link>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <ChecklistCTA source="work" />
      </div>

      <Reveal delay={0.1} className="mt-16">
        <div className="hero-glow rounded-3xl border border-line bg-panel p-8 sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-accent">Have a project in mind?</p>
            <h2 className="mt-3 max-w-xl font-serif text-2xl font-semibold text-porcelain sm:text-3xl">
              Let&apos;s make your business the next case study.
            </h2>
          </div>
          <Link href="/contact" className="mt-6 inline-block shrink-0 bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-porcelain sm:mt-0">
            Start a conversation
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
