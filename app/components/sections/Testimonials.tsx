import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "MugnaDigital transformed our local bakery into a digital brand. Their 'Cyber-Tropical' approach really stands out.",
    author: "Maria Santos",
    role: "Owner, Santos Sweets",
  },
  {
    content: "Fast, reliable, and truly world-class. The team is easy to work with and they understand the local market.",
    author: "Juan Dela Cruz",
    role: "CEO, Visayan Tech",
  },
  {
    content: "The best investment we made for our startup. The 'Mugna' spirit is real in their work.",
    author: "Ana Reyes",
    role: "Founder, EcoTours",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-void relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-brand-teal/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Local Innovators
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Here's what our partners say about building with the Filipino Engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-palay/50 transition-colors relative group"
            >
              <Quote className="w-8 h-8 text-brand-palay mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-slate-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-brand-teal text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
