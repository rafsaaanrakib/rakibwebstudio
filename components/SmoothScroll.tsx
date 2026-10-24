"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Lenis smooth scroll (gap fix, 2026-10-24) — the premium-tier scroll
// feel (Darkroom's own library). Wheel-only smoothing: touch stays
// native so the interactive globe's drag is untouched, and the whole
// thing is skipped for visitors who prefer reduced motion.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}
