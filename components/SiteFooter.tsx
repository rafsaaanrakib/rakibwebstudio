import Link from "next/link";
import SubscribeForm from "@/components/SubscribeForm";
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

        <div className="mt-14 grid items-end gap-8 border-t border-line pt-10 lg:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-porcelain">
              The Newsletter
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-mist">
              One email whenever a new post goes live — the systems that turn
              visitors into customers. Subscribe and the first email brings the
              free <Link href="/checklist" className="font-medium text-porcelain underline decoration-porcelain/40 underline-offset-4 hover:decoration-signal">5 Leaks checklist</Link>.
            </p>
          </div>
          <SubscribeForm source="footer" />
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
            <Link href="/newsletter" className="hover:text-porcelain">Newsletter</Link>
            <Link href="/reviews" className="hover:text-porcelain">Reviews</Link>
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
