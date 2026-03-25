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
          className="absolute z-50 p-4 bg-slate-900 text-white transition-transform -translate-y-full focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
