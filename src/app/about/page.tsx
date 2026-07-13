import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BattKart is a Delhi-NCR battery shop offering honest checkups, genuine batteries, and solar care. Learn about our story and values.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
          <span className="font-mono text-xs tracking-[0.2em] text-volt">ABOUT BATTKART</span>
          <h1 className="mt-4 font-display font-bold text-4xl md:text-5xl max-w-2xl">
            A neighbourhood battery shop, built on a simple promise.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Don't sell what we wouldn't fit in our own vehicles.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24">
        <div className="prose-none space-y-6 text-ink/80 leading-relaxed">
          <p>
            BattKart started the way most reliable battery shops do — with one
            technician, a small counter, and a habit of never sending someone
            home with a battery they didn't need. Over the years, that habit
            turned into a full setup: checkups, genuine batteries across every
            vehicle segment, and solar care for homes running on backup power.
          </p>
          <p>
            We still run on the same rule we started with: test before we
            sell, explain before we charge, and show up when someone's
            stranded. That's the whole business model.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {[
            { title: "Honesty first", desc: "We tell you when a battery can be saved — not just replaced." },
            { title: "Genuine stock", desc: "Every battery we sell is warranty-backed and traceable to the brand." },
            { title: "Show up fast", desc: "A dead battery is an emergency. We treat it like one." },
          ].map((v) => (
            <div key={v.title} className="terminal-notch rounded-xl border border-ink/10 p-6 text-volt-dark">
              <h3 className="font-display font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-steel">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-mist border border-ink/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-ink">Have a battery question?</h3>
            <p className="mt-1 text-steel text-sm">Call, WhatsApp, or drop by — we're happy to help either way.</p>
          </div>
          <a href={siteConfig.phoneHref} className="shrink-0 rounded-full bg-volt text-white text-sm font-semibold px-6 py-3 hover:bg-volt-dark transition-colors">
            Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
