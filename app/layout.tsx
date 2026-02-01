import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { MusicPlayer } from "./components/ui/MusicPlayer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MugnaDigital",
  description: "Bridging the gap between imagination and execution for local businesses through cutting-edge digital craftsmanship.",
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
          <a
            href="#main-content"
            className="fixed top-4 left-4 z-[100] -translate-y-[200%] focus:translate-y-0 px-6 py-3 bg-[var(--background)] text-[var(--brand-palay)] border-2 border-[var(--brand-palay)] rounded-lg shadow-xl font-bold transition-transform duration-300"
          >
            Skip to content
          </a>
          <MusicPlayer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
