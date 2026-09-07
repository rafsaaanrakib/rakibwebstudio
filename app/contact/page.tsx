import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium text-forest">Contact</p>
            <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-5xl">
              If your website or socials aren&apos;t converting the way your
              brand deserves, let&apos;s talk.
            </h1>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 sm:text-lg">
              I&apos;m currently taking on new local business clients. Tell me
              about your business and what&apos;s not working — I&apos;ll get
              back to you within a day or two.
            </p>
          </div>

          <div className="rounded-sm border border-line bg-white/60 p-7 shadow-[0_14px_30px_rgba(22,35,61,0.06)] sm:p-9">
            <p className="text-xs uppercase tracking-[0.16em] text-marigold">
              Start here
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold text-ink">
              Tell me what you&apos;re building.
            </h2>
            <div className="mt-8 space-y-5 text-sm">
              <a href="mailto:rakib.official13155@gmail.com" className="group block border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-ink/50">Email</span>
                <span className="mt-1 block break-words text-forest underline decoration-marigold decoration-2 underline-offset-4 group-hover:text-ink">
                  rakib.official13155@gmail.com
                </span>
              </a>
              <a href="tel:+8801577173135" className="group block border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-ink/50">Phone</span>
                <span className="mt-1 block text-forest group-hover:text-ink">+8801577173135</span>
              </a>
              <a href="https://www.linkedin.com/in/rafsaanrakib" target="_blank" rel="noopener noreferrer" className="group block border-t border-line pt-4">
                <span className="block text-xs uppercase tracking-wide text-ink/50">LinkedIn</span>
                <span className="mt-1 block text-forest underline decoration-marigold decoration-2 underline-offset-4 group-hover:text-ink">/in/rafsaanrakib</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
