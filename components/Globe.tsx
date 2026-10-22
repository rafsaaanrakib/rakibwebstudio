"use client";

import { useEffect, useRef } from "react";
import dotsData from "@/data/globeDots.json";

// Interactive dotted globe, rendered on a 2D canvas (works everywhere,
// no WebGL dependency). Land dots come from real world geography data,
// precomputed into data/globeDots.json as [lat, lon] pairs.
// Interaction: drag with mouse or finger to spin, flick for inertia,
// gentle auto-rotation resumes when idle. City markers pulse on the surface.

type Vec = { x: number; y: number; z: number };

const CITIES: { name: string; lat: number; lon: number }[] = [
  { name: "Chattogram", lat: 22.36, lon: 91.78 },
  { name: "New York", lat: 40.71, lon: -74.0 },
  { name: "London", lat: 51.5, lon: -0.12 },
  { name: "Dubai", lat: 25.2, lon: 55.27 },
  { name: "Sydney", lat: -33.87, lon: 151.21 },
];

function toVec(lat: number, lon: number): Vec {
  const phi = (lat * Math.PI) / 180;
  const lam = (lon * Math.PI) / 180;
  return {
    x: Math.cos(phi) * Math.sin(lam),
    y: Math.sin(phi),
    z: Math.cos(phi) * Math.cos(lam),
  };
}

// globeDots.json is a flat array of [lat*2, lon*2, ...] integers (compact
// storage of the same 0.5-degree-precise coordinates).
const RAW_DOTS = dotsData as number[];
const DOTS: Vec[] = [];
for (let i = 0; i + 1 < RAW_DOTS.length; i += 2) {
  DOTS.push(toVec(RAW_DOTS[i] / 2, RAW_DOTS[i + 1] / 2));
}
const CITY_VECS = CITIES.map((c) => ({ ...c, v: toVec(c.lat, c.lon) }));

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let size = 0;
    let raf = 0;
    let visible = true;
    let yaw = -0.9; // start with the Atlantic/Asia side pleasingly framed
    let pitch = 0.32;
    let velYaw = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let lastMove = 0;
    let idleSince = performance.now();

    // Pre-rendered dot sprites at a few depth levels keep drawing cheap.
    const sprites: HTMLCanvasElement[] = [];
    for (let i = 0; i < 6; i++) {
      const s = document.createElement("canvas");
      s.width = s.height = 24;
      const g = s.getContext("2d")!;
      const alpha = 0.16 + (i / 5) * 0.84;
      const grad = g.createRadialGradient(12, 12, 0, 12, 12, 10);
      grad.addColorStop(0, `rgba(196, 216, 248, ${alpha})`);
      grad.addColorStop(0.55, `rgba(140, 178, 238, ${alpha * 0.85})`);
      grad.addColorStop(1, "rgba(120, 165, 240, 0)");
      g.fillStyle = grad;
      g.fillRect(0, 0, 24, 24);
      sprites.push(s);
    }

    function resize() {
      const rect = wrap!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = Math.min(rect.width, rect.height);
      canvas!.width = Math.round(size * dpr);
      canvas!.height = Math.round(size * dpr);
      canvas!.style.width = `${size}px`;
      canvas!.style.height = `${size}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    io.observe(wrap);

    function project(v: Vec) {
      // yaw around Y, then pitch around X
      const cy = Math.cos(yaw), sy = Math.sin(yaw);
      const x1 = v.x * cy + v.z * sy;
      const z1 = -v.x * sy + v.z * cy;
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      const y2 = v.y * cp - z1 * sp;
      const z2 = v.y * sp + z1 * cp;
      return { x: x1, y: y2, z: z2 };
    }

    function draw(now: number) {
      if (!size) return;
      const R = size * 0.42;
      const cx = size / 2;
      const cyy = size / 2;
      ctx!.clearRect(0, 0, size, size);

      // Sphere body: deep blue-black disc with a soft top-right light.
      const body = ctx!.createRadialGradient(cx - R * 0.35, cyy - R * 0.4, R * 0.1, cx, cyy, R * 1.05);
      body.addColorStop(0, "rgba(38, 64, 110, 0.55)");
      body.addColorStop(0.55, "rgba(16, 26, 48, 0.5)");
      body.addColorStop(1, "rgba(6, 10, 18, 0.15)");
      ctx!.fillStyle = body;
      ctx!.beginPath();
      ctx!.arc(cx, cyy, R, 0, Math.PI * 2);
      ctx!.fill();

      // Land dots, front side only, depth-shaded via sprites.
      const dotBase = Math.max(5, R * 0.03);
      for (const d of DOTS) {
        const p = project(d);
        if (p.z <= 0.02) continue;
        const lvl = Math.min(5, Math.floor(p.z * 6));
        const s = dotBase * (0.75 + p.z * 0.55);
        ctx!.drawImage(sprites[lvl], cx + p.x * R - s / 2, cyy - p.y * R - s / 2, s, s);
      }

      // City markers: cyan dot + slow pulse ring when facing the viewer.
      for (let i = 0; i < CITY_VECS.length; i++) {
        const c = CITY_VECS[i];
        const p = project(c.v);
        if (p.z <= 0.05) continue;
        const x = cx + p.x * R;
        const y = cyy - p.y * R;
        const t = ((now / 2400) + i * 0.37) % 1;
        ctx!.strokeStyle = `rgba(56, 189, 248, ${(1 - t) * 0.75 * p.z})`;
        ctx!.lineWidth = 1.4;
        ctx!.beginPath();
        ctx!.arc(x, y, 3 + t * 13, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.fillStyle = `rgba(56, 189, 248, ${0.35 + 0.65 * p.z})`;
        ctx!.beginPath();
        ctx!.arc(x, y, i === 0 ? 3.1 : 2.4, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Rim light: brighter toward the top-right, like atmosphere catching sun.
      const rim = ctx!.createLinearGradient(cx - R, cyy + R, cx + R, cyy - R);
      rim.addColorStop(0, "rgba(56, 130, 246, 0)");
      rim.addColorStop(0.75, "rgba(80, 160, 255, 0.25)");
      rim.addColorStop(1, "rgba(140, 200, 255, 0.6)");
      ctx!.strokeStyle = rim;
      ctx!.lineWidth = 1.4;
      ctx!.beginPath();
      ctx!.arc(cx, cyy, R, 0, Math.PI * 2);
      ctx!.stroke();
    }

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      if (!dragging) {
        yaw += velYaw;
        velYaw *= 0.94;
        if (!reduced && now - idleSince > 2600 && Math.abs(velYaw) < 0.0016) {
          yaw += 0.0016;
        }
      }
      draw(now);
    }
    raf = requestAnimationFrame(frame);

    function onDown(e: PointerEvent) {
      dragging = true;
      velYaw = 0;
      lastX = e.clientX;
      lastY = e.clientY;
      lastMove = performance.now();
      canvas!.setPointerCapture(e.pointerId);
      canvas!.style.cursor = "grabbing";
    }
    function onMove(e: PointerEvent) {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      lastMove = performance.now();
      yaw += dx * 0.0052;
      pitch = Math.max(-0.55, Math.min(0.62, pitch + dy * 0.0028));
      velYaw = dx * 0.0052;
    }
    function onUp(e: PointerEvent) {
      dragging = false;
      idleSince = performance.now();
      if (performance.now() - lastMove > 90) velYaw = 0;
      canvas!.style.cursor = "grab";
      try {
        canvas!.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    }

    canvas.style.cursor = "grab";
    canvas.style.touchAction = "none";
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative mx-auto aspect-square w-full max-w-[560px]" role="img" aria-label="Interactive globe showing Rakib Web Studio's worldwide reach — drag to rotate it">
      {/* Atmosphere glow behind the sphere */}
      <div className="pointer-events-none absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(70,120,230,0.28),rgba(10,10,11,0)_68%)] blur-2xl" />
      <canvas ref={canvasRef} className="relative block" />
      <p className="pointer-events-none mt-3 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-mist/70">
        Drag to spin the world
      </p>
    </div>
  );
}
