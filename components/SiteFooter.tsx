import Link from "next/link";
import { site, whatsappLink } from "@/data/site";

const socials = [
  { label: "Instagram", href: site.instagram },
  { label: "TikTok", href: site.tiktok },
  { label: "Facebook", href: site.facebook },
  { label: "X", href: site.x },
  { label: "LinkedIn", href: site.linkedin },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight text-porcelain sm:text-5xl">
              Rakib<span className="text-signal">.</span>
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-mist">
              Web Studio — Business Growth Partner
            </p>
          </div>
          <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mist">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="h-2 w-2 rounded-full bg-signal" />
            </span>
            Working with clients worldwide
          </p>
        </div>

        <div className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-3">
          <div className="flex flex-col gap-2.5 text-sm text-mist">
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-porcelain">Contact</p>
            <a href={`mailto:${site.email}`} className="break-words hover:text-porcelain">{site.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-porcelain">
              WhatsApp {site.whatsappDisplay}
            </a>
            <a href={site.googleProfile} target="_blank" rel="noopener noreferrer" className="hover:text-porcelain">
              Google profile &amp; reviews
            </a>
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-mist">
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-porcelain">Follow</p>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-porcelain">
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-mist">
            <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.22em] text-porcelain">Explore</p>
            <Link href="/services" className="hover:text-porcelain">Services</Link>
            <Link href="/work" className="hover:text-porcelain">Work</Link>
            <Link href="/tools" className="hover:text-porcelain">Free Tools</Link>
            <Link href="/blog" className="hover:text-porcelain">Blog</Link>
            <Link href="/ebook" className="hover:text-porcelain">The Book — $11.99</Link>
            <Link href="/privacy" className="hover:text-porcelain">Privacy</Link>
          </div>
        </div>

        <p className="mt-14 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-mist/60">
          © {new Date().getFullYear()} Rakib Web Studio — Rakib Ahmed · Based in {site.location} · Working worldwide
        </p>
      </div>
    </footer>
  );
}
