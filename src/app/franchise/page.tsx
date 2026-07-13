import type { Metadata } from "next";
import FranchiseForm from "@/components/FranchiseForm";

export const metadata: Metadata = {
  title: "Franchise",
  description:
    "Start a BattKart franchise in your city. Choose your battery segment, tell us your investment range, and our team will reach out.",
};

const steps = [
  { code: "01", title: "Submit enquiry", desc: "Tell us your city, battery segment, and budget." },
  { code: "02", title: "We call you", desc: "Our team walks you through the model & numbers." },
  { code: "03", title: "Site & setup", desc: "We help finalise location, stock, and branding." },
  { code: "04", title: "Go live", desc: "Open under the BattKart name with full support." },
];

export default function FranchisePage() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-16 md:pt-24 md:pb-20">
          <span className="font-mono text-xs tracking-[0.2em] text-volt">FRANCHISE WITH BATTKART</span>
          <h1 className="mt-4 font-display font-bold text-4xl md:text-5xl max-w-2xl">
            Bring honest battery care to your city.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            We're expanding across battery, solar, and inverter segments —
            partner with a brand built on trust, not just margins.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
        <div className="grid sm:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.code} className="terminal-notch rounded-xl border border-ink/10 p-6 text-volt-dark">
              <span className="font-mono text-xs text-steel">{s.code}</span>
              <h3 className="mt-2 font-display font-semibold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm text-steel">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-mist py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-ink">Franchise enquiry form</h2>
          <p className="mt-2 text-steel text-sm">
            Fill this in and it lands directly in our inbox — no account needed.
          </p>
          <div className="mt-8 bg-white rounded-2xl border border-ink/10 p-6 md:p-8">
            <FranchiseForm />
          </div>
        </div>
      </section>
    </>
  );
}
