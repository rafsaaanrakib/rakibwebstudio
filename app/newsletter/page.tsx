import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";

export default function Newsletter() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium text-forest">Newsletter</p>
        <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-5xl">
          Practical ideas for better websites and steadier growth.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 sm:text-lg">
          Get occasional notes from real client work: website improvements,
          SEO lessons, content strategy, and digital marketing ideas you can
          put to work.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 grid gap-8 rounded-sm border border-forest/20 bg-forest p-8 shadow-[0_18px_40px_rgba(27,75,67,0.12)] sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <h2 className="font-serif text-2xl font-semibold text-porcelain">
          Get the next note
        </h2>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-porcelain/70">
          No noise, no daily emails. Just useful ideas for getting found,
          trusted, and chosen online.
        </p>
        <WaitlistForm
          buttonLabel="Subscribe"
          successMessage="You&apos;re subscribed — thanks for joining."
        />
      </Reveal>
    </div>
  );
}