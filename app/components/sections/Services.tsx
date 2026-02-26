import React from 'react';
import { Code2, Smartphone, Palette, Cloud } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import FloatingElement from '../ui/FloatingElement';

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance websites and web applications built with cutting-edge technologies like Next.js and React."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Seamless mobile experiences for iOS and Android, bridging your business to users on the go."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful interfaces with our signature Cyber-Tropical aesthetic."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable, secure, and reliable cloud infrastructure to ensure your digital engine never stops."
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We combine <span className="text-brand-palay font-medium">precision hardcoding</span> with <span className="text-brand-teal font-medium">advanced AI agents</span> to deliver professional digital services faster and more affordably.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.1} className="h-full">
              <div
                className="p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-brand-palay/50 transition-colors group h-full"
              >
                <FloatingElement delay={index * 0.2}>
                  <div className="w-12 h-12 rounded-lg bg-brand-palay/10 flex items-center justify-center mb-6 group-hover:bg-brand-palay/20 transition-colors">
                    <service.icon className="w-6 h-6 text-brand-palay" />
                  </div>
                </FloatingElement>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
