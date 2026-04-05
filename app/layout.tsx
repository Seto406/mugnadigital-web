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
          className="absolute left-4 top-4 z-50 -translate-y-24 rounded-md bg-sky-400 p-3 font-bold text-slate-950 transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
