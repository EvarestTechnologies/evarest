import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Self-hosted, preloaded, with size-adjusted fallbacks so text does not shift when the fonts arrive.
const interTight = localFont({ src: "./fonts/inter-tight-latin.woff2", weight: "400 800", variable: "--font-inter-tight", display: "swap" });
const jetbrains = localFont({ src: "./fonts/jetbrains-mono-latin.woff2", weight: "400 500", variable: "--font-jetbrains", display: "swap" });
const montserrat = localFont({ src: "./fonts/montserrat-latin.woff2", weight: "700", variable: "--font-montserrat", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://evarestke.com"),
  icons: { icon: "/favicon.svg" },
  openGraph: { siteName: "Evarest Technologies", type: "website", images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrains.variable} ${montserrat.variable}`}>
      <body className="bg-white font-sans text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
