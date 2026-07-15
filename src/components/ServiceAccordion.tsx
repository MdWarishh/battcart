"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export default function ServiceAccordion() {
  const [activeId, setActiveId] = useState<string>(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  // If the page loads (or the hash changes) with a service id in the URL,
  // e.g. from a hero card link (#battery-checkup), open that service.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && services.some((s) => s.id === hash)) {
        setActiveId(hash);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      <div className="lg:col-span-2 flex flex-col gap-3">
        {services.map((service) => {
          const isActive = service.id === activeId;
          return (
            <button
              key={service.id}
              id={service.id}
              onClick={() => setActiveId(service.id)}
              className={`terminal-notch scroll-mt-28 text-left rounded-xl border px-5 py-4 transition-all duration-300 ${
                isActive
                  ? "bg-ink text-white border-ink shadow-lg shadow-ink/10"
                  : "bg-white text-ink border-ink/10 hover:border-volt/50 hover:-translate-y-0.5"
              }`}
              aria-expanded={isActive}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <span
                    className={`font-mono text-[11px] tracking-widest ${
                      isActive ? "text-volt" : "text-volt-dark"
                    }`}
                  >
                    {service.code}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-1">
                    {service.title}
                  </h3>
                  <p className={`text-sm mt-1 leading-relaxed ${isActive ? "text-white/70" : "text-steel"}`}>
                    {service.short}
                  </p>
                </div>
                <span
                  className={`shrink-0 h-8 w-8 rounded-full grid place-items-center border transition-transform duration-300 ${
                    isActive ? "border-white/30 rotate-45" : "border-ink/20"
                  }`}
                >
                  +
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="lg:col-span-3 rounded-2xl border border-ink/10 bg-mist overflow-hidden">
        <div className="relative h-56 md:h-64 w-full overflow-hidden">
          <Image
            key={active.id}
            src={active.image}
            alt={active.title}
            fill
            className="object-cover animate-fadeIn"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
          <span className="absolute bottom-3 left-4 font-mono text-xs text-white/90 tracking-widest">
            {active.code}
          </span>
        </div>
        <div key={`${active.id}-body`} className="p-6 md:p-8 animate-fadeIn">
          <h3 className="font-display font-bold text-2xl text-ink tracking-tight">{active.title}</h3>
          <p className="mt-3 text-steel leading-relaxed">{active.detail}</p>
          <ul className="mt-5 space-y-2">
            {active.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ink/80">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-volt shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-volt text-white text-sm font-semibold px-5 py-2.5 hover:bg-volt-dark transition-colors"
            >
              Book This — Call Now
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 text-ink text-sm font-semibold px-5 py-2.5 hover:border-volt hover:text-volt transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}