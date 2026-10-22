import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Tell Me About Your Project",
  description:
    "Contact Rakib Web Studio for websites, SEO, ads, content, social and video growth work. Replies within one business day, for clients worldwide.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-mist">Contact</p>
            <h1 className="mt-3 font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-porcelain sm:text-5xl">
              Tell me about your project.
            </h1>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-mist sm:text-lg">
              If your website or socials aren&apos;t converting the way your
              brand deserves, let&apos;s talk. I reply within one business
              day — and yes, I work across time zones.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <a href={`mailto:${site.email}`} className="group block border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-mist/60">Email</span>
                <span className="mt-1 block break-words text-mint underline decoration-accent decoration-2 underline-offset-4 group-hover:text-porcelain">
                  {site.email}
                </span>
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group block border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-mist/60">WhatsApp</span>
                <span className="mt-1 block text-mint group-hover:text-porcelain">{site.whatsappDisplay}</span>
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="group block border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-mist/60">LinkedIn</span>
                <span className="mt-1 block text-mint underline decoration-accent decoration-2 underline-offset-4 group-hover:text-porcelain">/in/rafsaanrakib</span>
              </a>
              <div className="border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-mist/60">Follow along</span>
                <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-mint hover:text-porcelain">Instagram</a>
                  <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="text-mint hover:text-porcelain">TikTok</a>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-mint hover:text-porcelain">Facebook</a>
                  <a href={site.x} target="_blank" rel="noopener noreferrer" className="text-mint hover:text-porcelain">X</a>
                </span>
              </div>
              <div className="border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-mist/60">Based in</span>
                <span className="mt-1 block text-porcelain">{site.location} — working worldwide</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Reveal>
    </div>
  );
}
