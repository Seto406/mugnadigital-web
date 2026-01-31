import React from 'react';
import { Button } from '../ui/Button';

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-void via-slate-900 to-brand-void border-t border-white/5" />

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-brand-palay/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to Build Your <span className="text-brand-palay">Digital Future?</span>
        </h2>

        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Join the next generation of Filipino tech leaders. Let&apos;s turn your imagination into reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg" className="text-lg px-10" href="#contact">
            Start Your Project
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-10" href="#contact">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
