import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display font-bold text-xl text-white">
            Batt<span className="text-volt">Kart</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed max-w-xs">
            Powering every journey — genuine batteries, honest checkups, and
            solar care you can rely on.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BattKart on Facebook"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-volt transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BattKart on Instagram"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-volt transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25A3.25 3.25 0 1 1 12 6.75a3.25 3.25 0 0 1 0 6.5ZM17.25 4.5a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z"/></svg>
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with BattKart on WhatsApp"
              className="h-9 w-9 grid place-items-center rounded-full bg-white/10 hover:bg-volt transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.28-1.39a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.51 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.89-1.25-4.78-4.14-4.93-4.33-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36h.56c.18 0 .42-.03.65.5.24.55.81 1.9.88 2.04.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.71 1.17 1.53 1.89 1.05.94 1.94 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.26.13.44.19.5.3.07.11.07.63-.17 1.3Z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/franchise" className="hover:text-white">Franchise</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>Battery Checkup</li>
            <li>Solar Checkup</li>
            <li>Solar Cleaning</li>
            <li>New Battery Purchase</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href={siteConfig.phoneHref} className="hover:text-white">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a></li>
            <li>{siteConfig.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} BattKart. All rights reserved.
      </div>
    </footer>
  );
}
