import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MugnaDigital | Strategic Web Design & Development',
  description:
    'MugnaDigital builds premium websites that help businesses grow through better storytelling, performance, and conversion design.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a
          href="#main-content"
          className="absolute top-0 left-0 z-[100] p-4 bg-[var(--brand-palay)] text-[var(--brand-void)] font-bold transition-transform duration-200 -translate-y-full focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)] focus:ring-offset-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
