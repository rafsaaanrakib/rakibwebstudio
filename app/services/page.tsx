import Reveal from "@/components/Reveal";
import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
      <Reveal>
        <p className="text-sm font-medium text-forest">Services</p>
        <h1 className="mt-3 max-w-2xl font-serif text-3xl font-semibold text-ink sm:text-5xl">
          Helping businesses get found, trusted, and chosen online.
        </h1>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/70 sm:text-lg">
          From the first page load to the next customer conversation, I build
          the connected systems that help your business become easier to find,
          easier to trust, and easier to choose.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.05}>
            <article className="group h-full rounded-sm border border-line bg-white/60 p-7 shadow-[0_10px_24px_rgba(22,35,61,0.04)] transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-marigold hover:shadow-[0_16px_30px_rgba(232,163,61,0.12)] sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-marigold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="h-2 w-2 rounded-full bg-forest transition-transform group-hover:scale-150" />
              </div>
              <h2 className="mt-6 font-serif text-2xl font-semibold text-ink">
                {service.title}
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-ink">
                {service.copy}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {service.details}
              </p>
              <ul className="mt-6 space-y-2 border-t border-line pt-5 text-xs text-ink/60">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex gap-2">
                    <span className="text-marigold">+</span>
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-16">
        <div className="rounded-sm border border-line bg-ink p-8 shadow-[0_18px_40px_rgba(22,35,61,0.14)] sm:flex sm:items-center sm:justify-between sm:gap-10 sm:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-marigold">
              Let&apos;s build the system
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-2xl font-semibold text-porcelain sm:text-3xl">
              Your next customer is already looking. Make sure they find you.
            </h2>
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-block shrink-0 bg-marigold px-6 py-3 text-sm font-medium text-ink shadow-[0_8px_20px_rgba(232,163,61,0.18)] transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-porcelain hover:shadow-[0_12px_24px_rgba(246,245,241,0.16)] sm:mt-0"
          >
            Start a conversation
          </Link>
        </div>
      </Reveal>
    </div>
  );
}