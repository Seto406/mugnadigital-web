import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const testimonials = [
  {
    content: "MugnaDigital transformed our traditional business into a modern digital powerhouse. Their attention to detail and understanding of our local market was impressive.",
    author: "Maria Santos",
    role: "Owner, Santos Delicacies",
  },
  {
    content: "The best development team in the Visayas. They delivered our e-commerce platform ahead of schedule and it looks absolutely stunning.",
    author: "James Tan",
    role: "CEO, Visayan Retail Group",
  },
  {
    content: "What sets them apart is their 'Mugna' spirit—they really care about creating something unique and valuable. Highly recommended!",
    author: "Sarah Johnson",
    role: "Founder, Island EcoTours",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[radial-gradient(closest-side,var(--color-brand-teal),transparent)] opacity-20 rounded-full" />
         <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[radial-gradient(closest-side,var(--color-brand-palay),transparent)] opacity-20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted by Local Innovators
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Here&apos;s what our partners say about building with the Filipino Engine.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.1} className="h-full">
                <div
                className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-brand-palay/50 transition-colors relative group flex flex-col h-full"
                >
                <Quote className="w-8 h-8 text-brand-palay mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow italic">
                    &quot;{testimonial.content}&quot;
                </p>
                <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/5">
                    <p className="text-foreground font-semibold">{testimonial.author}</p>
                    <p className="text-brand-teal text-sm">{testimonial.role}</p>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
