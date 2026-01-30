import React from 'react';
import { Button } from '../ui/Button';
import { WeavePattern } from '../ui/WeavePattern';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <WeavePattern />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-palay/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-palay/10 border border-brand-palay/20 text-brand-palay text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-palay opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-palay"></span>
          </span>
          Phase 1: Cyber-Tropical
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          The Filipino Engine <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-palay to-brand-teal">
            For Digital Innovation
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Bridging the gap between imagination (&quot;Mugna&quot;) and execution.
          We build high-performance digital solutions with Filipino craftsmanship and futuristic vision.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" className="text-lg px-8">
            Start Your Project
          </Button>
          <Button variant="secondary" className="text-lg px-8">
            View Our Work
          </Button>
        </div>
      </div>
    </div>
  );
}
