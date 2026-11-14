import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ChecklistCTA from "@/components/ChecklistCTA";
import { services, getService } from "@/data/services";
import { getProject } from "@/data/projects";
import { getPost } from "@/data/posts";
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
  const relatedProject = getProject(service.relatedProject);
  const relatedPost = getPost(service.relatedPost);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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

        <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
          <div className="bg-panel p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-mist/70">Starting price</p>
            <p className="mt-2 font-display text-2xl font-bold tracking-tight text-porcelain">{service.startingPrice}</p>
          </div>
          <div className="bg-panel p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-mist/70">Timeline</p>
            <p className="mt-2 text-sm leading-relaxed text-porcelain">{service.timeline}</p>
          </div>
        </div>

        <h2 className="mt-12 font-serif text-2xl font-semibold text-porcelain">What&apos;s included</h2>
        <div className="mt-5 border-t border-line">
          {service.included.map((item) => (
            <div key={item} className="flex gap-3 border-b border-line py-4 text-sm leading-relaxed text-mist">
              <span className="text-accent">+</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {service.slug === "web-development" && (
          <p className="mt-6 border border-line bg-panel p-5 text-sm leading-relaxed text-mist">
            <span className="font-semibold text-porcelain">Platform: </span>
            WordPress or custom-built — the platform is chosen for your
            business, and you own the site and all logins.
          </p>
        )}

        <h2 className="mt-12 font-serif text-2xl font-semibold text-porcelain">Questions, answered</h2>
        <div className="mt-5 space-y-6 border-t border-line pt-6">
          {service.faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-base font-bold tracking-tight text-porcelain">{f.q}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">{f.a}</p>
            </div>
          ))}
        </div>

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

      {(relatedProject || relatedPost) && (
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {relatedProject && (
            <Link href={`/work/${relatedProject.slug}`} className="group block rounded-2xl border border-line bg-panel p-6 transition hover:border-accent/60">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">Case study</p>
              <p className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-porcelain group-hover:text-accent">{relatedProject.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{relatedProject.outcome}</p>
              <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-porcelain">Read the case study →</p>
            </Link>
          )}
          {relatedPost && (
            <Link href={`/blog/${relatedPost.slug}`} className="group block rounded-2xl border border-line bg-panel p-6 transition hover:border-accent/60">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mist">From the journal</p>
              <p className="mt-3 font-display text-xl font-bold tracking-tight text-porcelain group-hover:text-accent">{relatedPost.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">{relatedPost.excerpt}</p>
              <p className="mt-4 font-display text-sm font-bold uppercase tracking-wide text-porcelain">Read the article →</p>
            </Link>
          )}
        </div>
      )}

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
