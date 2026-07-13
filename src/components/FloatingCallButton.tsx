import { siteConfig } from "@/config/site";

export default function FloatingCallButton() {
  return (
    <a
      href={siteConfig.phoneHref}
      aria-label="Call BattKart now"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-terminal text-white pl-4 pr-5 py-3.5 shadow-lg shadow-terminal/30 hover:scale-105 active:scale-95 transition-transform"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2Z" />
      </svg>
      <span className="text-sm font-semibold">Call Now</span>
    </a>
  );
}
