import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white/45">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-[1.4fr_1fr_0.7fr] sm:py-16">
        <div>
          <Link href="/" className="group flex items-center gap-3 font-serif text-lg font-semibold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-sm text-porcelain shadow-[0_5px_14px_rgba(22,35,61,0.12)] transition-transform group-hover:rotate-6">RA</span>
            <span>Rakib Ahmed</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/65">
            Helping businesses get found, trusted, and chosen online.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-ink/65">
          <p className="mb-1 text-xs uppercase tracking-[0.16em] text-forest">Contact</p>
          <a href="mailto:rakib.official13155@gmail.com" className="transition-colors hover:text-ink">
            rakib.official13155@gmail.com
          </a>
          <a href="tel:+8801577173135" className="transition-colors hover:text-ink">
            +8801577173135
          </a>
          <a
            href="https://www.linkedin.com/in/rafsaanrakib"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col gap-2 text-sm text-ink/65">
          <p className="mb-1 text-xs uppercase tracking-[0.16em] text-forest">Explore</p>
          <Link href="/work" className="transition-colors hover:text-ink">Work</Link>
          <Link href="/services" className="transition-colors hover:text-ink">Services</Link>
          <Link href="/blog" className="transition-colors hover:text-ink">Blog</Link>
          <Link href="/newsletter" className="transition-colors hover:text-ink">Newsletter</Link>
          <Link href="/ebook" className="transition-colors hover:text-ink">Ebook</Link>
        </div>
      </div>

      <p className="border-t border-line px-6 py-4 text-center text-xs text-ink/45">
        © {new Date().getFullYear()} Rakib Ahmed.
      </p>
    </footer>
  );
}
