import Link from 'next/link';
import { Button } from './components/ui/Button';
import ParticlesBackground from './components/ui/ParticlesBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--background)]">
      <ParticlesBackground />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-[12rem] font-bold text-[var(--brand-palay)] opacity-20 leading-none select-none">
          404
        </h1>

        <div className="space-y-6 -mt-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)]">
            Lost in the <span className="text-[var(--brand-palay)]">Digital Void</span>
          </h2>

          <p className="text-lg text-[var(--foreground)]/70 max-w-md mx-auto">
            The page you're looking for has been disconnected from the matrix.
            Let's guide you back to safety.
          </p>

          <div className="flex justify-center gap-4">
            <Button variant="primary" href="/">
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
