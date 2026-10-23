import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy",
  description: "How Rakib Web Studio handles information on this website.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-mint">Privacy</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-porcelain sm:text-4xl">
          Privacy, in plain language
        </h1>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-mist">
          <p>
            This website is a static site. It has no user accounts, no
            comments and no database, and it does not sell or share personal
            information.
          </p>
          <p>
            The free tools on this site (audit, price estimator, hook
            generator) run entirely in your browser. What you type into them
            is not sent to or stored on this website.
          </p>
          <p>
            The contact form sends your enquiry straight to Rakib's inbox
            through a form relay service; nothing is stored on this website.
            If you email or message Rakib Web Studio, your details are used
            only to reply to you and discuss your project.
          </p>
          <p>
            If you subscribe to the newsletter, your email address is stored
            with our email provider (Resend) and used only to send you new
            blog posts and the free checklist. It is never sold or shared, and
            every email carries a one-click unsubscribe link.
          </p>
          <p>
            Questions about privacy: email{" "}
            <a href={`mailto:${site.email}`} className="text-mint underline decoration-accent decoration-2 underline-offset-4">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Reveal>
    </div>
  );
}
