"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/franchise", label: "Franchise" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/images/logo.png" alt="BattKart" width={44} height={44} className="h-10 w-auto" priority />
          <span className="font-display font-bold text-xl tracking-tight text-ink">
            Batt<span className="text-volt">Kart</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 hover:text-volt transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-semibold px-5 py-2.5 hover:bg-volt transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-terminal animate-pulseDot" />
            Call Us
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-white px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink/80"
            >
              {link.label}
            </Link>
          ))}
          <a href={siteConfig.phoneHref} className="rounded-full bg-ink text-white text-sm font-semibold px-5 py-2.5 text-center">
            Call Us — {siteConfig.phone}
          </a>
        </div>
      )}
    </header>
  );
}
