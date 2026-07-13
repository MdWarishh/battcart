export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "extend-car-battery-life",
    title: "7 Habits That Quietly Extend Your Car Battery's Life",
    date: "May 12, 2026",
    readTime: "4 min read",
    excerpt:
      "Most batteries don't die of old age — they die of neglect. Here's what actually adds years to your battery's life.",
    image:
      "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
    content: [
      "A car battery rarely fails suddenly — it fades. Short trips that never let the alternator fully recharge it, terminals left loose or corroded, and long idle periods in extreme heat all shave months off its working life.",
      "Getting a load test every six months catches the fade before it strands you. Keeping terminals clean and tight, and starting the car at least every few days if it's parked long-term, are the two habits our technicians see make the biggest difference.",
      "If you're noticing slower cranking on cold mornings or dimmer headlights at idle, that's usually the first sign — worth a free checkup before it becomes a breakdown.",
    ],
  },
  {
    slug: "signs-battery-needs-replacement",
    title: "5 Signs Your Battery Needs Replacing — Before It Strands You",
    date: "April 28, 2026",
    readTime: "3 min read",
    excerpt:
      "Batteries rarely give a clean warning. These are the small tells that show up weeks before a full failure.",
    image:
      "https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1200&auto=format&fit=crop",
    content: [
      "A slow crank on start-up, a dashboard battery light that flickers on rough roads, and a swollen or bulging case are the three most reliable early warnings — and all three are visible days or weeks before total failure.",
      "Age matters too: most lead-acid batteries are rated for 3–5 years, and performance drops sharply after that window even if the battery still technically starts the vehicle.",
      "A quick load test settles the question either way — it takes minutes and tells you exactly how much capacity is left.",
    ],
  },
  {
    slug: "solar-battery-maintenance-101",
    title: "Solar Battery Maintenance 101: Getting the Rated Backup You Paid For",
    date: "April 9, 2026",
    readTime: "5 min read",
    excerpt:
      "Most solar backups underperform their rated capacity within the first year — usually for fixable reasons.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Solar battery banks lose capacity faster than most owners expect, and dust on the panels is often the invisible culprit — a layer of grime can cut output by 15–25% well before the battery itself is at fault.",
      "Deep discharging a battery bank regularly, rather than keeping it in a healthier charge range, is the second major cause of early capacity loss.",
      "A seasonal panel clean paired with a charge-controller and battery-bank checkup is usually enough to keep a solar system delivering close to its rated backup for years longer.",
    ],
  },
];
