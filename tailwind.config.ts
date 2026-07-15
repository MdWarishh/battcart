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
        "radial-glow":
          "radial-gradient(circle at center, rgba(27,95,255,0.28), transparent 70%)",
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
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        charge: "charge 1.6s cubic-bezier(0.4,0,0.2,1) forwards",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        fadeUp: "fadeUp 0.7s cubic-bezier(0.4,0,0.2,1) both",
        fadeIn: "fadeIn 0.5s ease-out both",
        shimmer: "shimmer 2.2s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;