import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Services — The Growth System",
  description:
    "Every service a business needs to grow online: websites, SEO, video, content, ads, analytics and ongoing care — as one system or one tool at a time.",
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

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
