import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://battkart.in"),
  title: {
    default: "BattKart — Premium Battery Sales, Checkup & Solar Care | Powering Every Journey",
    template: "%s | BattKart",
  },
  description:
    "BattKart offers free battery checkups, solar panel checkup & cleaning, genuine battery sales with doorstep fitting, and emergency battery call-out. Powering every journey.",
  keywords: [
    "battery shop",
    "car battery checkup",
    "bike battery replacement",
    "solar battery checkup",
    "solar panel cleaning",
    "buy car battery online",
    "battery franchise India",
    "BattKart",
  ],
  openGraph: {
    title: "BattKart — Powering Every Journey",
    description:
      "Free battery checkups, solar care, genuine battery sales with doorstep fitting, and emergency call-out service.",
    url: "https://battkart.in",
    siteName: "BattKart",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
