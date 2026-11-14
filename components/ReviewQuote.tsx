import { site } from "@/data/site";

// The one real review on the studio's Google profile, quoted exactly.
// No other testimonial exists on this site — do not add one here.
export default function ReviewQuote() {
  return (
    <blockquote className="border-l-2 border-line pl-5">
      <p className="font-serif text-xl font-medium italic leading-snug text-porcelain sm:text-2xl">
        “Great SEO service with professional guidance and practical strategies
        to improve Google rankings. Highly recommended!”
      </p>
      <footer className="mt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-mist">
        Faisal Iqbal — Income Tax Lawyer · 5 stars on Google
      </footer>
      <a
        href={site.googleProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block font-display text-sm font-bold uppercase tracking-wide text-porcelain underline decoration-line underline-offset-8 hover:decoration-porcelain"
      >
        See it on Google →
      </a>
    </blockquote>
  );
}
