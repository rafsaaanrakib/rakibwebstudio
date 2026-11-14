"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import GlobePoster from "@/components/GlobePoster";

// The interactive globe is a canvas with an animation loop and an
// 8,747-dot dataset — too heavy for the mobile first paint, where it is
// the LCP element. Small screens get the static SVG poster instead and
// never download the globe code; larger screens get the interactive
// globe after hydration. First paint is always the poster.
const Globe = dynamic(() => import("@/components/Globe"), { ssr: false });

export default function GlobeSection() {
  const [wide, setWide] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(min-width: 768px)");
    setWide(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setWide(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (!mounted || !wide) return <GlobePoster />;
  return <Globe />;
}
