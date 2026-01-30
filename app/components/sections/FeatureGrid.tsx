import React from 'react';
import { Code2, Zap, Palette } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Built with Next.js, TypeScript, and Tailwind CSS for lightning-fast performance."
  },
  {
    icon: Palette,
    title: "Cyber-Tropical Design",
    description: "A unique aesthetic blending Filipino heritage with futuristic minimalism."
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "From concept to deployment, we ship with the speed of a Master Craftsman."
  }
];

export function FeatureGrid() {
  return (
    <section className="py-24 bg-brand-void relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ang Aming Alok</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            World-class services powered by local talent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-palay/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-palay/10 flex items-center justify-center mb-6 group-hover:bg-brand-palay/20 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-palay" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
