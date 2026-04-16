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
          className="absolute top-0 left-0 z-[100] -translate-y-full focus:translate-y-0 bg-emerald-400 text-slate-950 px-4 py-2 font-bold transition-transform"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
