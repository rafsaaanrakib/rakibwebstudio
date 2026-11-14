import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ReviewQuote from "@/components/ReviewQuote";
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

      <div className="mt-16">
        <Reveal>
          <h2 className="font-serif text-2xl font-semibold text-porcelain">Compare the three routes</h2>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-mist">
            The same three routes, side by side. Your exact quote is confirmed
            on a short call, before any work starts.
          </p>
          <div className="mt-8 overflow-x-auto border border-line">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
                  <th className="px-5 py-4 font-medium">Route</th>
                  <th className="px-5 py-4 font-medium">What&apos;s included</th>
                  <th className="px-5 py-4 font-medium">Who it&apos;s for</th>
                  <th className="px-5 py-4 font-medium">Timeline</th>
                </tr>
              </thead>
              <tbody className="align-top leading-relaxed text-mist">
                <tr className="border-b border-line">
                  <td className="px-5 py-5">
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-porcelain">Launch</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-porcelain">Websites from $800</p>
                  </td>
                  <td className="px-5 py-5">Strategy, website or store build, conversion structure, tracking and SEO foundations. One fixed scope, agreed before work starts.</td>
                  <td className="px-5 py-5">A business with no website — or one that isn&apos;t turning visitors into customers.</td>
                  <td className="px-5 py-5">Confirmed in your fixed quote.</td>
                </tr>
                <tr className="border-b border-line">
                  <td className="px-5 py-5">
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-porcelain">Grow</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-porcelain">From $300 / month</p>
                  </td>
                  <td className="px-5 py-5">SEO, content, Meta ads and video run as one monthly system — measured against revenue, reported in plain language.</td>
                  <td className="px-5 py-5">A business with a website that needs more traffic, more enquiries, more sales.</td>
                  <td className="px-5 py-5">Monthly — first month&apos;s plan agreed before we start.</td>
                </tr>
                <tr>
                  <td className="px-5 py-5">
                    <p className="font-display text-lg font-bold uppercase tracking-tight text-porcelain">Care</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-porcelain">From $100 / month</p>
                  </td>
                  <td className="px-5 py-5">Care, updates, backups and security — plus monthly optimisation and experiments that compound what Grow builds.</td>
                  <td className="px-5 py-5">A business that wants its website kept fast, safe and improving every month.</td>
                  <td className="px-5 py-5">Monthly — first month&apos;s plan agreed before we start.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-mist">
            Payment terms confirmed in your fixed quote. You own everything
            once paid in full.
          </p>
        </Reveal>
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
        <Reveal>
          <div className="grid gap-8 border-t border-line pt-10 sm:grid-cols-[1fr_auto] sm:items-center">
            <ReviewQuote />
            <Link
              href="/contact"
              className="bg-accent px-6 py-3.5 text-center font-display text-sm font-bold uppercase tracking-wide text-night transition hover:bg-porcelain"
            >
              Start a project →
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        <ChecklistCTA source="services" />
      </div>
    </div>
  );
}
