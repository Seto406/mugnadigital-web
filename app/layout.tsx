import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { MusicPlayer } from "./components/ui/MusicPlayer";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { BackToTop } from "./components/ui/BackToTop";
import { BannerAd } from "./components/ui/BannerAd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MugnaDigital | Digital Craftsmanship in Negros Oriental",
    template: "%s | MugnaDigital",
  },
  description: "Bridging the gap between imagination and execution for local businesses through cutting-edge digital craftsmanship. Based in Dumaguete City.",
  keywords: ["web development", "digital agency", "dumaguete", "negros oriental", "tech", "website", "design", "branding", "software engineering"],
  authors: [{ name: "MugnaDigital Team" }],
  creator: "MugnaDigital",
  publisher: "MugnaDigital",
  openGraph: {
    title: "MugnaDigital | Digital Craftsmanship",
    description: "Bridging the gap between imagination and execution for local businesses.",
    url: "https://mugnadigital.com",
    siteName: "MugnaDigital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MugnaDigital",
    description: "Bridging the gap between imagination and execution.",
    creator: "@mugnadigital",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ScrollProgress />
          <BackToTop />
          <a
            href="#main-content"
            className="fixed top-4 left-4 z-[100] -translate-y-[200%] focus:translate-y-0 px-6 py-3 bg-[var(--background)] text-[var(--brand-palay)] border-2 border-[var(--brand-palay)] rounded-lg shadow-xl font-bold transition-transform duration-300"
          >
            Skip to content
          </a>
          <MusicPlayer />
          <BannerAd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
