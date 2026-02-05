import React from 'react';
import { Target, Zap } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-palay/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-sm font-medium mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Digital Craftsmen of the <span className="text-brand-palay">Visayas</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
              MugnaDigital is more than just a dev shop. We are a collective of innovators, designers, and engineers dedicated to elevating the digital landscape of Negros Oriental and beyond.
            </p>
            <div className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              &quot;Mugna&quot; means <strong className="text-foreground">to create</strong> in Visayan. It embodies our mission: to bridge the gap between imagination and execution using world-class technology and local ingenuity.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-palay/10 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-brand-palay" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Our Mission</h4>
                  <p className="text-slate-500 text-sm">To empower local businesses with global-standard digital solutions.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold mb-1">Our Speed</h4>
                  <p className="text-slate-500 text-sm">Accelerated by AI agents, refined by human experts.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="aspect-square rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-black/10 dark:border-white/10 relative z-10">
                <Image
                  src="/images/about-team.jpg"
                  alt="MugnaDigital Team"
                  fill
                  className="object-cover"
                />
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-palay/20 rounded-full blur-xl z-0" />
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-teal/20 rounded-full blur-xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
