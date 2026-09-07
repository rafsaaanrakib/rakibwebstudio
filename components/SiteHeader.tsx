"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/ebook", label: "Ebook" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-porcelain/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="group flex items-center gap-3 text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink font-serif text-sm font-semibold text-porcelain shadow-[0_5px_14px_rgba(22,35,61,0.14)] transition-transform group-hover:rotate-6">
            RA
          </span>
          <span className="font-serif text-lg font-semibold">Rakib Ahmed</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm text-ink/80 transition-colors hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-marigold after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-forest px-4 py-2 text-sm font-medium text-porcelain shadow-[0_6px_16px_rgba(27,75,67,0.14)] transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_9px_20px_rgba(22,35,61,0.18)]"
          >
            Let&apos;s talk
          </Link>
        </nav>

        <button
          className="flex items-center gap-2 text-sm font-medium text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="flex w-5 flex-col gap-1" aria-hidden="true">
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-3/4 self-end bg-ink" />
          </span>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line bg-white/50 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-line/70 py-3 text-sm text-ink/80 transition-colors hover:text-forest"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 bg-forest px-4 py-3 text-center text-sm font-medium text-porcelain"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </Link>
        </nav>
      )}
    </header>
  );
}
