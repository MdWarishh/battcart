"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/config/site";

const businessTypes = [
  "Two-Wheeler Battery Outlet",
  "Four-Wheeler / Car Battery Outlet",
  "Inverter & Home UPS Battery Outlet",
  "Solar Battery & Panel Outlet",
  "Commercial / Fleet Battery Outlet",
];

const investmentRanges = [
  "₹2 – 5 Lakh",
  "₹5 – 10 Lakh",
  "₹10 – 20 Lakh",
  "₹20 Lakh+",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function FranchiseForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // FormSubmit delivers this straight to siteConfig.email — no backend required.
      // TODO: On the very first submission, FormSubmit sends a one-time confirmation
      // email to siteConfig.email that must be clicked to activate delivery.
      const res = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-volt/30 bg-mist p-8 text-center">
        <h3 className="font-display font-bold text-xl text-ink">Enquiry sent ✓</h3>
        <p className="mt-2 text-steel">
          Thanks for your interest in a BattKart franchise — our team will call you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
      <input type="hidden" name="_subject" value="New BattKart Franchise Enquiry" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="name">Full name</label>
        <input required id="name" name="name" type="text" className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:border-volt outline-none" placeholder="Your name" />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="phone">Phone number</label>
        <input required id="phone" name="phone" type="tel" className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:border-volt outline-none" placeholder="+91 XXXXX XXXXX" />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="email">Email</label>
        <input required id="email" name="email" type="email" className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:border-volt outline-none" placeholder="you@example.com" />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="city">City</label>
        <input required id="city" name="city" type="text" className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:border-volt outline-none" placeholder="Your city" />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="businessType">Battery segment interested in</label>
        <select required id="businessType" name="businessType" className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:border-volt outline-none bg-white">
          <option value="">Select one</option>
          {businessTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="investment">Investment budget</label>
        <select required id="investment" name="investment" className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:border-volt outline-none bg-white">
          <option value="">Select a range</option>
          {investmentRanges.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="message">Anything else we should know?</label>
        <textarea id="message" name="message" rows={4} className="w-full rounded-lg border border-ink/15 px-4 py-2.5 focus:border-volt outline-none" placeholder="Location, shop size, timeline, etc." />
      </div>

      <div className="sm:col-span-2 flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-volt text-white text-sm font-semibold px-7 py-3 hover:bg-volt-dark transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Submit Enquiry"}
        </button>
        {status === "error" && (
          <span className="text-sm text-terminal">Something went wrong — please call us instead.</span>
        )}
      </div>
    </form>
  );
}
