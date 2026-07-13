export type Service = {
  id: string;
  code: string; // battery-spec style code, e.g. "01-CHK"
  title: string;
  short: string;
  detail: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "battery-checkup",
    code: "CHK-01",
    title: "Get Battery Checkup",
    short: "Free load, voltage & terminal health scan.",
    detail:
      "Our technicians run a full diagnostic on your car or bike battery — load test, voltage reading, terminal corrosion check and alternator output — so you know exactly how much life is left before it strands you.",
    bullets: [
      "On-the-spot voltage & load testing",
      "Terminal & corrosion inspection",
      "Printed health report, no obligation",
    ],
    image:
      "https://images.unsplash.com/photo-1632823469850-1b7b1e8b7692?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "solar-checkup",
    code: "CHK-02",
    title: "Get Solar Checkup",
    short: "Panel output & inverter battery diagnostics.",
    detail:
      "Solar setups lose efficiency silently. We inspect panel output, charge controller behaviour and battery bank health so your system keeps delivering the power it's rated for.",
    bullets: [
      "Panel output & wiring inspection",
      "Charge controller diagnostics",
      "Battery bank capacity check",
    ],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "solar-cleaning",
    code: "SRV-03",
    title: "Get Solar Cleaning",
    short: "Dust & grime removal for peak sunlight capture.",
    detail:
      "Dust build-up can cut solar output by 15–25%. Our cleaning crew uses soft-brush, deionised-water methods that protect the panel coating while restoring maximum sunlight capture.",
    bullets: [
      "Scratch-safe soft-brush method",
      "Deionised water, no residue",
      "Before/after output comparison",
    ],
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "purchase-battery",
    code: "SRV-04",
    title: "Purchase New Battery",
    short: "Genuine brands, fitted at your doorstep.",
    detail:
      "Browse a curated range of car, bike, inverter and solar batteries from trusted brands. Pick your vehicle or system type and we'll match the right specification, deliver, and fit it on the spot.",
    bullets: [
      "Genuine, warranty-backed batteries",
      "Doorstep delivery & fitting",
      "Old battery exchange available",
    ],
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "call-battery",
    code: "SOS-05",
    title: "Call Battery",
    short: "Dead battery? One tap connects you to help.",
    detail:
      "Stuck with a dead battery right now? Tap to call and our nearest technician is dispatched for a jumpstart, on-the-spot replacement, or towing assistance — whichever gets you moving fastest.",
    bullets: [
      "Direct call, no forms",
      "Rapid-response technicians",
      "Available for emergencies",
    ],
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
  },
];
