import type { Config } from "tailwindcss";

// Design system v3 — "editorial monochrome".
// Near-black neutral base, warm bone text, hairline rules, one signal colour
// (cyan) used only for a live-status dot and the globe's route markers.
// Everything else is black, white and warm greys: restraint reads premium.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0A0A0B",
        panel: "#121214",
        panel2: "#17171A",
        line: "rgba(236, 236, 230, 0.13)",
        porcelain: "#ECECE6",
        mist: "#C6C2BA",
        accent: "#E8E6DF",
        violet: "#A8A8AD",
        mint: "#B8B4AB",
        signal: "#38BDF8",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "Helvetica", "Arial", "sans-serif"],
        sans: ["var(--font-archivo)", "Helvetica", "Arial", "sans-serif"],
        serif: ["var(--font-piazzolla)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
