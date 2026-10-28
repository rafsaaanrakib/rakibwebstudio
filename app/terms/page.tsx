import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms",
  description: "Terms for using rakibwebstudio.com and working with Rakib Web Studio, in plain language.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-mint">Terms</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold text-porcelain sm:text-4xl">
          Terms, in plain language
        </h1>
        <p className="mt-4 text-sm text-mist">Last updated: 28 October 2026.</p>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-mist">
          <p>
            These terms cover your use of rakibwebstudio.com and any work you
            do with Rakib Web Studio. By using this website, buying the book,
            or starting a project, you agree to them. If anything here is
            unclear, ask before you buy or book — email{" "}
            <a href={`mailto:${site.email}`} className="text-mint underline decoration-accent decoration-2 underline-offset-4">
              {site.email}
            </a>
            .
          </p>
          <p>
            <strong className="text-porcelain">Services.</strong> Rakib Web
            Studio offers business-growth services: websites, SEO, advertising,
            content, social media and video. Prices shown on this site are
            starting points. Your exact quote is confirmed with you before work
            begins, and if the scope changes along the way, any change to price
            or timeline is confirmed with you first.
          </p>
          <p>
            <strong className="text-porcelain">The book.</strong> “Website to
            Customers” is a digital product, sold for $11.99 and delivered by
            email after checkout. It is for your personal use: please do not
            resell, share publicly or redistribute it. If delivery fails or
            something goes wrong with your order, email us and we will fix it.
          </p>
          <p>
            <strong className="text-porcelain">Payments.</strong> Checkout is
            handled by a secure third-party payment provider. Your card details
            are never stored on this website.
          </p>
          <p>
            <strong className="text-porcelain">What we need from you.</strong>{" "}
            For project work, please provide content, access and feedback in
            reasonable time. Delays on your side can move timelines, and we
            will tell you when that happens.
          </p>
          <p>
            <strong className="text-porcelain">Ownership.</strong> Your
            website, content and accounts are yours once your project is paid
            in full. This website's own content — writing, design and tools —
            belongs to Rakib Web Studio unless stated otherwise.
          </p>
          <p>
            <strong className="text-porcelain">No guaranteed results.</strong>{" "}
            We work to improve your visibility, traffic and sales, but no
            specific ranking, traffic number or sales result is promised.
            Results depend on your market, offer, budget and other factors
            outside our control.
          </p>
          <p>
            <strong className="text-porcelain">Free tools and content.</strong>{" "}
            The free tools, blog posts and checklist on this site are provided
            as-is, for general guidance. They are not a substitute for advice
            about your specific situation.
          </p>
          <p>
            <strong className="text-porcelain">Liability.</strong> To the
            extent allowed by law, Rakib Web Studio's liability for any claim
            related to this website or a purchase is limited to the amount you
            paid for that service or product.
          </p>
          <p>
            <strong className="text-porcelain">Changes.</strong> These terms
            may be updated from time to time; the version on this page is the
            current one. Questions about these terms: email{" "}
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
