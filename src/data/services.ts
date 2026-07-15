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
      
    ],
    image:
      "https://images.unsplash.com/photo-1671782584185-1300064c5289?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxiYXR0ZXJ5fGVufDB8fDB8fHww",
  },
  {
    id: "purchase-inventory",
    code: "SRV-02",
    title: "Purchase Inventory/Battery",
    short: "Browse our full in-stock range across brands.",
    detail:
      "Explore our complete inventory of car, bike, inverter and solar batteries from trusted brands, all in stock and ready. Compare specs, ratings and pricing, and we'll set aside the right unit for you.",
    bullets: [
      "Wide brand & capacity range in stock",
      "Transparent, upfront pricing",
      "Reserve online, collect or get it delivered",
    ],
    image:
      "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "purchase-solar-system",
    code: "SRV-03",
    title: "Purchase Solar System",
    short: "End-to-end solar setup, sized to your load.",
    detail:
      "From rooftop panels to charge controller and battery bank, we design and install a solar system sized to your actual power needs — with genuine components and a clear installation timeline.",
    bullets: [
      "Free load assessment & sizing",
      "Genuine panels, inverters & batteries",
      "Full installation & commissioning",
    ],
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "purchase-vehicle-battery",
    code: "SRV-04",
    title: "Purchase Car/Bike/Truck Battery",
    short: "Genuine vehicle batteries, fitted at your doorstep.",
    detail:
      "Tell us your vehicle type and we'll match the right battery specification, deliver it to your location and fit it on the spot — with your old battery taken off your hands.",
    bullets: [
      "Genuine, warranty-backed batteries",
      "Doorstep delivery & fitting",
      "Old battery exchange available",
    ],
    image:
      "https://images.unsplash.com/photo-1592318348310-f31b61a931c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwYmF0dGVyeXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "solar-cleaning",
    code: "SRV-05",
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
    id: "solar-checkup",
    code: "CHK-06",
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
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop",
  },
];