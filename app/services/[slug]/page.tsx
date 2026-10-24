import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ChecklistCTA from "@/components/ChecklistCTA";
import { services, getService } from "@/data/services";
import { whatsappLink } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Rakib Web Studio`,
    description: service.copy,
    alternates: { canonical: `/services/${params.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <Link href="/services" className="text-sm font-semibold text-accent hover:text-porcelain">
          ← All services
        </Link>
        <h1 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">{service.title}</h1>
        <p className="mt-5 max-w-prose font-serif text-xl leading-relaxed text-porcelain/90">{service.copy}</p>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-mist">{service.details}</p>

        <div className="mt-8 rounded-2xl border border-mint/30 bg-panel p-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-mint">Role in your growth</p>
          <p className="mt-2 text-sm leading-relaxed text-porcelain">{service.growthRole}</p>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-porcelain">What you get</h2>
        <ul className="mt-5 space-y-2.5">
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-3 rounded-lg border border-line bg-panel px-4 py-3 text-sm text-mist">
              <span className="text-accent">+</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/contact" className="bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-porcelain">
            Start with {service.shortTitle}
          </Link>
          <a
            href={whatsappLink(`Hi Rakib, I'm interested in ${service.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-6 py-3 text-sm font-semibold text-porcelain transition hover:border-accent hover:text-accent"
          >
            WhatsApp me instead
          </a>
          <Link href="/tools" className="border border-line px-6 py-3 text-sm font-semibold text-porcelain transition hover:border-accent hover:text-accent">
            Try the free tools first
          </Link>
        </div>
      </Reveal>

      <div className="mt-14">
        <ChecklistCTA source={`service-${service.slug}`} />
      </div>

      <div className="mt-16 border-t border-line pt-10">
        <h2 className="font-serif text-xl font-semibold text-porcelain">Works even better combined with</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border border-line bg-panel p-5 hover:border-accent/60">
              <p className="font-serif text-base font-semibold text-porcelain">{s.title}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-mist">{s.copy}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
