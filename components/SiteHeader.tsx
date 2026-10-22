"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/tools", label: "Free Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/ebook", label: "The Book" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-night/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="leading-none">
          <span className="block font-display text-[17px] font-extrabold uppercase tracking-tight text-porcelain">
            Rakib<span className="text-signal">.</span>
          </span>
          <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.28em] text-mist">
            Web Studio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-porcelain"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent px-4 py-2.5 font-display text-[13px] font-bold uppercase tracking-wide text-night transition hover:bg-porcelain"
          >
            Start a project →
          </Link>
        </nav>

        <button
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-porcelain md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-line bg-panel px-6 py-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-line py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-mist hover:text-porcelain"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="my-4 bg-accent px-4 py-3 text-center font-display text-sm font-bold uppercase tracking-wide text-night"
            onClick={() => setOpen(false)}
          >
            Start a project →
          </Link>
        </nav>
      )}
    </header>
  );
}
