import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const displayFont = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISAAC — Folding laundry just became optional",
  description:
    "The first personal robot for your home. Drop in a load, pick up perfectly folded clothes.",
  openGraph: {
    title: "ISAAC — Folding laundry just became optional",
    description:
      "The first personal robot for your home. Drop in a load, pick up perfectly folded clothes.",
    siteName: "ISAAC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
