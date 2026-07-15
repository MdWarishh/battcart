import Link from "next/link";
import ServiceAccordion from "@/components/ServiceAccordion";
import HeroParticles from "@/components/HeroParticles";
import HeroParallax from "@/components/HeroParallax";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blogPosts";

const heroServices = [
  { id: "battery-checkup", label: "Get Battery Checkup" },
  { id: "purchase-inventory", label: "Purchase Inventory/Battery" },
  { id: "purchase-solar-system", label: "Purchase Solar System" },
  { id: "purchase-vehicle-battery", label: "Purchase Car/Bike/Truck Battery" },
  { id: "solar-cleaning", label: "Get Solar Cleaning" },
  { id: "solar-checkup", label: "Get Solar Checkup" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] opacity-30" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] bg-radial-glow opacity-60" />
        <HeroParticles />

        <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-24 pb-24 md:pt-32 md:pb-32">
          <div className="grid md:grid-cols-2 gap-14 md:gap-10 items-center">
            {/* LEFT: hero copy */}
            <div className="animate-fadeUp">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-volt border border-volt/30 rounded-full px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-volt animate-pulseDot" />
                India's &middot; BATTERY &amp; SOLAR CARE
              </span>

              <h1 className="mt-7 font-display font-extrabold text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] max-w-xl">
                Powering every journey,{" "}
                <span className="bg-gradient-to-r from-volt to-terminal bg-clip-text text-transparent">
                  one honest charge
                </span>{" "}
                at a time.
              </h1>

              <p className="mt-6 text-white/65 max-w-lg text-base md:text-lg leading-relaxed">
                Free battery &amp; solar checkups, genuine batteries fitted at your
                doorstep, and a technician one call away when you're stuck.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href={siteConfig.phoneHref}
                  className="group relative overflow-hidden rounded-full bg-volt px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-volt-dark"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
                  <span className="relative">Call Battery — Get Help Now</span>
                </a>
                <Link
                  href="#services"
                  className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold hover:border-volt/60 hover:text-volt transition-colors"
                >
                  Explore Services
                </Link>
              </div>

              {/* charge bar signature element */}
              <div className="mt-16 max-w-md">
                <div className="flex justify-between text-[11px] font-mono text-white/45 mb-2 tracking-wide">
                  <span>SHOP HEALTH</span>
                  <span>82% CHARGED</span>
                </div>
                <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-volt to-terminal animate-charge"
                    style={{ ["--charge-level" as string]: "82%" }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: premium 6-service grid, tilts gently with the cursor */}
            <HeroParallax className="relative animate-fadeUp [animation-delay:150ms]">
              <div className="absolute -inset-6 rounded-3xl bg-volt/10 blur-3xl" />
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 md:p-6 shadow-[0_30px_80px_-30px_rgba(27,95,255,0.45)]">
                <div className="flex items-center justify-between mb-5 px-1">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-white/50">
                    OUR SERVICES
                  </span>
                  <span className="font-mono text-[11px] text-volt">06</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {heroServices.map((service, i) => (
                    <Link
                      key={service.id}
                      href={`#${service.id}`}
                      style={{ animationDelay: `${250 + i * 70}ms` }}
                      className="group relative animate-fadeUp rounded-xl border border-white/10 bg-ink/40 p-4 flex flex-col justify-between min-h-[112px] hover:border-volt/50 hover:bg-white/[0.06] transition-colors"
                    >
                      <span className="font-mono text-[10px] text-white/30 group-hover:text-volt transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-3 font-display text-sm font-semibold leading-snug text-white/90 group-hover:text-white">
                        {service.label}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono text-volt opacity-0 group-hover:opacity-100 transition-opacity">
                        View &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </HeroParallax>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.2em] text-volt-dark">
            WHAT WE DO
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink tracking-tight">
            Six ways we keep you powered
          </h2>
          <p className="mt-3 text-steel text-base md:text-lg">
            Tap a service to see how it works, what's included, and what happens next.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <ServiceAccordion />
        </Reveal>
      </section>

      {/* WHY US */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "60+",
                label: "Years fixing power problems",
                desc: "Local expertise across car, bike, inverter and solar batteries.",
              },
              {
                stat: "100%",
                label: "Genuine batteries only",
                desc: "Every unit is warranty-backed — no rebranded or refurbished stock.",
              },
              {
                stat: "<60 min",
                label: "Average call-out time",
                desc: "Emergency jumpstart and replacement, dispatched fast.",
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="terminal-notch h-full bg-white text-volt-dark rounded-xl border border-ink/10 p-7 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5">
                  <div className="font-mono text-3xl font-semibold text-ink">{item.stat}</div>
                  <div className="mt-2 font-display font-semibold text-ink">{item.label}</div>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <Reveal className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-volt-dark">FROM THE BLOG</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink tracking-tight">
              Battery care, in plain language
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-volt hover:text-volt-dark">
            View all posts →
          </Link>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-ink/10 overflow-hidden hover:border-volt/40 transition-colors"
              >
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="font-mono text-[11px] text-steel">{post.date} &middot; {post.readTime}</span>
                  <h3 className="mt-2 font-display font-semibold text-lg text-ink group-hover:text-volt transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] opacity-20" />
        <Reveal className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center md:text-left tracking-tight">
            Battery trouble can't wait. <span className="text-volt">Neither do we.</span>
          </h2>
          <a
            href={siteConfig.phoneHref}
            className="group relative shrink-0 overflow-hidden rounded-full bg-terminal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shimmer" />
            <span className="relative">Call {siteConfig.phone}</span>
          </a>
        </Reveal>
      </section>
    </>
  );
}