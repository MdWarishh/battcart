import Link from "next/link";
import ServiceAccordion from "@/components/ServiceAccordion";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/data/blogPosts";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <span className="inline-block font-mono text-xs tracking-[0.2em] text-volt border border-volt/30 rounded-full px-3 py-1">
            DELHI-NCR &middot; BATTERY &amp; SOLAR CARE
          </span>
          <h1 className="mt-6 font-display font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl">
            Powering every journey,
            <br /> one honest charge at a time.
          </h1>
          <p className="mt-6 text-white/70 max-w-xl text-lg">
            Free battery &amp; solar checkups, genuine batteries fitted at your
            doorstep, and a technician one call away when you're stuck.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={siteConfig.phoneHref}
              className="rounded-full bg-volt px-7 py-3.5 text-sm font-semibold hover:bg-white hover:text-ink transition-colors"
            >
              Call Battery — Get Help Now
            </a>
            <Link
              href="#services"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold hover:border-white/60 transition-colors"
            >
              Explore Services
            </Link>
          </div>

          {/* charge bar signature element */}
          <div className="mt-16 max-w-md">
            <div className="flex justify-between text-xs font-mono text-white/50 mb-2">
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
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="font-mono text-xs tracking-[0.2em] text-volt-dark">
            WHAT WE DO
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink">
            Five ways we keep you powered
          </h2>
          <p className="mt-3 text-steel">
            Tap a service to see how it works, what's included, and what happens next.
          </p>
        </div>
        <div className="mt-10">
          <ServiceAccordion />
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "10+",
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
            ].map((item) => (
              <div key={item.label} className="terminal-notch bg-white text-volt-dark rounded-xl border border-ink/10 p-7">
                <div className="font-mono text-3xl font-semibold text-ink">{item.stat}</div>
                <div className="mt-2 font-display font-semibold text-ink">{item.label}</div>
                <p className="mt-2 text-sm text-steel">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-volt-dark">FROM THE BLOG</span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-4xl text-ink">
              Battery care, in plain language
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-volt hover:text-volt-dark">
            View all posts →
          </Link>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-ink/10 overflow-hidden hover:border-volt/40 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.image} alt={post.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="font-mono text-[11px] text-steel">{post.date} &middot; {post.readTime}</span>
                <h3 className="mt-2 font-display font-semibold text-ink group-hover:text-volt transition-colors">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-center md:text-left">
            Battery trouble can't wait. <span className="text-volt">Neither do we.</span>
          </h2>
          <a
            href={siteConfig.phoneHref}
            className="shrink-0 rounded-full bg-terminal px-7 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-ink transition-colors"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
