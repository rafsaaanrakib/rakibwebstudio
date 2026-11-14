// Static poster for the globe — a lightweight SVG dot-grid, no canvas,
// no JavaScript. Used on small screens (and for the first paint) instead
// of the interactive Globe, so mobile never pays for the canvas, the
// 8,747-dot dataset or the animation loop.
export default function GlobePoster() {
  const dots: { x: number; y: number; o: number; r: number }[] = [];
  const R = 200;
  for (let lat = -60; lat <= 75; lat += 15) {
    for (let lon = -180; lon < 180; lon += 15) {
      const phi = (lat * Math.PI) / 180;
      const lam = (lon * Math.PI) / 180;
      const x = Math.cos(phi) * Math.sin(lam);
      const y = Math.sin(phi);
      const z = Math.cos(phi) * Math.cos(lam);
      if (z <= 0.05) continue;
      dots.push({
        x: 220 + x * R,
        y: 220 - y * R,
        o: 0.25 + z * 0.75,
        r: 2.2 + z * 2.2,
      });
    }
  }

  // The same five cities the interactive globe marks.
  const cities = [
    { x: 220 + 0.62 * R, y: 220 - 0.38 * R },
    { x: 220 - 0.55 * R, y: 220 - 0.62 * R },
    { x: 220 + 0.02 * R, y: 220 - 0.72 * R },
    { x: 220 + 0.5 * R, y: 220 - 0.42 * R },
    { x: 220 - 0.85 * R, y: 220 + 0.55 * R },
  ];

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]" role="img" aria-label="Globe showing Rakib Web Studio's worldwide reach">
      <div className="pointer-events-none absolute inset-[4%] rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(70,120,230,0.28),rgba(10,10,11,0)_68%)] blur-2xl" />
      <svg viewBox="0 0 440 440" className="relative block h-auto w-full" aria-hidden="true">
        <circle cx="220" cy="220" r={R} fill="rgba(16,26,48,0.5)" stroke="rgba(140,200,255,0.5)" strokeWidth="1.4" />
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#8CB2EE" opacity={d.o} />
        ))}
        {cities.map((c, i) => (
          <circle key={i} cx={c.x} cy={c.y} r={i === 0 ? 5 : 4} fill="#38BDF8" />
        ))}
      </svg>
    </div>
  );
}
