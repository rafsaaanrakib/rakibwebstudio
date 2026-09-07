import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";

export default function Ebook() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium text-forest">Free guide</p>
        <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-5xl">
          Website to Customers
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 sm:text-lg">
          A simple system for turning website visitors into paying clients —
          built from real work with local businesses and e-commerce brands.
          No fluff, just the structure that actually moves people from
          &quot;just looking&quot; to &quot;let&apos;s talk.&quot;
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 rounded-sm border border-forest/20 bg-forest p-8 shadow-[0_18px_40px_rgba(27,75,67,0.12)] sm:p-10">
        <h2 className="font-serif text-2xl font-semibold text-porcelain">
          Join the waitlist
        </h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-porcelain/70">
          Be the first to get it when it launches. No spam — just the guide
          and occasional updates on growth for local businesses.
        </p>
        <WaitlistForm />
      </Reveal>

      <Reveal delay={0.15} className="mt-14">
        <h2 className="font-serif text-2xl font-semibold text-ink">
          What&apos;s inside
        </h2>
        <ul className="mt-6 grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
          <li className="border-l-2 border-marigold pl-4">Why most local business websites lose customers before they even reach the contact form</li>
          <li className="border-l-2 border-marigold pl-4">The trust signals that actually convert visitors, not just look nice</li>
          <li className="border-l-2 border-marigold pl-4">A simple content system that keeps bringing people back</li>
          <li className="border-l-2 border-marigold pl-4">How to turn your website into your best salesperson, not just a brochure</li>
        </ul>
      </Reveal>
    </div>
  );
}
