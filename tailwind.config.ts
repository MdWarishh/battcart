import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E17",
        "ink-2": "#111726",
        volt: "#1B5FFF",
        "volt-dark": "#0B2A6B",
        terminal: "#E4232F",
        steel: "#6B7280",
        mist: "#F4F6FB",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(27,95,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(27,95,255,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        charge: {
          "0%": { width: "0%" },
          "100%": { width: "var(--charge-level, 82%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        charge: "charge 1.6s cubic-bezier(0.4,0,0.2,1) forwards",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
