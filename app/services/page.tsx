import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Routes from "@/components/Routes";
import ChecklistCTA from "@/components/ChecklistCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services — The Growth System",
  description:
    "Every service a business needs to grow online: websites, SEO, video, content, ads, analytics and ongoing care — as one system.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Services</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">
          One partner for the whole path from first click to paying customer.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
          Each service below is a tool in one growth system. Hire one tool if
          that is what you need today — or hand over the whole system and get
          a partner who makes the pieces work together.
        </p>
      </Reveal>

      <div className="mt-16">
        <Reveal>
          <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Three ways to work together</p>
          </div>
        </Reveal>
        <Routes />
      </div>

      <Reveal>
        <div className="mb-8 mt-20 flex items-baseline justify-between gap-6 border-b border-line pb-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Or pick a single tool — 09 services</p>
        </div>
      </Reveal>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.04}>
            <Link
              href={`/services/${s.slug}`}
              className="group block h-full rounded-2xl border border-line bg-panel p-6 transition hover:border-accent/60 hover:bg-panel2"
            >
              <h2 className="font-serif text-xl font-semibold text-porcelain group-hover:text-accent">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">{s.copy}</p>
              <ul className="mt-5 space-y-1.5 border-t border-line pt-4 text-xs text-mist/80">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-accent">+</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <ChecklistCTA source="services" />
      </div>
    </div>
  );
}
