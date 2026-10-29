"use client";

import { useEffect, useState } from "react";

// Thin reading-progress line fixed to the top of the viewport.
// Rendered outside animated wrappers: a transformed ancestor would break
// `fixed` positioning, so this component must stay a direct page child.
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (el.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-50 h-[3px] bg-porcelain"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
