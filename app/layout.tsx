import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Noir Élégance | The Art of Luxury Perfumery",
  description:
    "Discover Noir Élégance, a sensory couture experience. An olfactory masterpiece blending midnight jasmine with smoked oud, crafted for timeless sophistication.",
  keywords: [
    "Luxury Perfume",
    "Noir Elegance",
    "Couture Fragrance",
    "Artisanal Scents",
    "High-end Perfumery",
  ],
  authors: [{ name: "Noir Élégance" }],
  openGraph: {
    title: "Noir Élégance | Luxury Perfume",
    description:
      "A refined, cinematic fragrance experience. Discover our midnight jasmine and smoked oud collection.",
    url: "https://noir-elegance.vercel.app",
    siteName: "Noir Élégance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-img.png",
        width: 1200,
        height: 630,
        alt: "Noir Élégance Luxury Perfume",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noir Élégance | Luxury Perfume",
    description: "An olfactory masterpiece blending midnight jasmine with smoked oud.",
    images: ["/images/hero-img.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorantGaramond.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="font-sans antialiased selection:bg-white/20 bg-[#0e0e0e] text-[#e7e5e4] overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
