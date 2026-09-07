import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        porcelain: "#F6F5F1",
        ink: "#16233D",
        marigold: "#E8A33D",
        forest: "#1B4B43",
        line: "#E2DED4",
      },
      fontFamily: {
        serif: ["var(--font-piazzolla)", "Georgia", "serif"],
        sans: ["var(--font-plex)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
export default config;
