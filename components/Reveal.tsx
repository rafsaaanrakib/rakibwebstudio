"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Tiny IntersectionObserver reveal — no animation library.
//
// The first render (including the static HTML) is fully legible at
// opacity 1: nothing is hidden before JavaScript runs. Only elements
// below the fold are hidden after hydration, and only until they scroll
// into view. With prefers-reduced-motion there is no animation at all.
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    // Already on screen: leave it visible, no animation.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 60 && rect.bottom > -60) return;
    setHidden(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const visible = !hidden || revealed;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(12px)",
        transition: reduced
          ? "none"
          : `opacity 0.35s ease-out ${delay}s, transform 0.35s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
