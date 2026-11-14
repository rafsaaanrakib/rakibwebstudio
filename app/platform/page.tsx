import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ChecklistCTA from "@/components/ChecklistCTA";
import { whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "What your website is built on — WordPress or custom",
  description:
    "WordPress or custom-built: how Rakib Web Studio chooses the platform for your website, who owns it, and how you edit it.",
  alternates: { canonical: "/platform" },
};

const faqs = [
  {
    q: "Can I edit the site myself?",
    a: "Yes. On WordPress you edit pages and posts yourself, no developer needed for everyday changes. On a custom build, the parts you'll update are built to be editable — and I'll show you how before handover.",
  },
  {
    q: "What if I want to move hosts later?",
    a: "You can. When the project is paid in full, the site, the domain and all logins are yours — you're never locked in to me or to one host.",
  },
  {
    q: "Do you build on Wix or Squarespace?",
    a: "Not as a rule — WordPress and custom code cover the businesses I work with best. If you need Wix or Squarespace specifically, say so in your enquiry and I'll tell you plainly whether it's the right fit.",
  },
];

export default function PlatformPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Platform</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-porcelain sm:text-6xl">
          WordPress or custom-built. The platform is chosen for your business.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
          There is no single right platform — only the right one for what your
          business needs to do. I build on two: WordPress and custom code.
          Here is how the choice is made, and what you own either way.
        </p>

        <h2 className="mt-14 font-serif text-2xl font-semibold text-porcelain">WordPress</h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
          The right call when your site is content-led — a business site, a
          blog, or a catalogue you want to update yourself. You edit pages
          and posts without a developer, and the site stays easy to hand over.
        </p>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
          Built this way:{" "}
          <Link href="/work/peerlesshouse" className="font-semibold text-porcelain underline decoration-line underline-offset-4 hover:decoration-porcelain">
            PeerlessHouse
          </Link>{" "}
          — a custom WordPress affiliate site, built to rank and easy to run.
        </p>

        <h2 className="mt-14 font-serif text-2xl font-semibold text-porcelain">Custom-built</h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
          The right call when your site needs something specific — a store, a
          product, or a flow that a template would fight against. It is built
          around exactly what your customers need to do: buy, book, enquire.
        </p>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
          Built this way:{" "}
          <Link href="/work/wearzana" className="font-semibold text-porcelain underline decoration-line underline-offset-4 hover:decoration-porcelain">
            WearZana
          </Link>{" "}
          — a fashion e-commerce store built from scratch, now grown with SEO
          and Facebook ads.
        </p>

        <h2 className="mt-14 font-serif text-2xl font-semibold text-porcelain">Already on Shopify or WooCommerce?</h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
          Your store stays where it is. The growth work — SEO, ads,
          conversion — happens around it. If you are choosing a platform for a
          new store, that decision is part of the strategy step, before
          anything is built. Read{" "}
          <Link href="/blog" className="font-semibold text-porcelain underline decoration-line underline-offset-4 hover:decoration-porcelain">
            the journal
          </Link>{" "}
          for how I think about platform choice, or ask directly.
        </p>

        <h2 className="mt-14 font-serif text-2xl font-semibold text-porcelain">Who owns it</h2>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
          You do. When the project is paid in full, the site, the domain and
          all logins are yours. You are never locked in to me or to one host
          — the site is yours to move, and the work is yours to keep.
        </p>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mist">
          Anything you would rather not touch yourself is covered by{" "}
          <Link href="/services/website-care-growth" className="font-semibold text-porcelain underline decoration-line underline-offset-4 hover:decoration-porcelain">
            Care
          </Link>{" "}
          — ongoing updates, backups and small improvements, from $100/month.
        </p>

        <h2 className="mt-14 font-serif text-2xl font-semibold text-porcelain">Questions, answered</h2>
        <div className="mt-6 space-y-6 border-t border-line pt-6">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-base font-bold tracking-tight text-porcelain">{f.q}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-mist">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Link href="/contact" className="bg-accent px-6 py-3 text-sm font-semibold text-night transition hover:bg-porcelain">
            Start a project →
          </Link>
          <a
            href={whatsappLink("Hi Rakib, I'd like to talk about the right platform for my website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line px-6 py-3 text-sm font-semibold text-porcelain transition hover:border-accent hover:text-accent"
          >
            WhatsApp me instead
          </a>
          <Link href="/services/web-development" className="border border-line px-6 py-3 text-sm font-semibold text-porcelain transition hover:border-accent hover:text-accent">
            Web development
          </Link>
        </div>
      </Reveal>

      <div className="mt-14">
        <ChecklistCTA source="platform" />
      </div>
    </div>
  );
}
