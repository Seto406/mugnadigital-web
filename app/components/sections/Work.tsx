import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Visayan Marketplace",
    category: "E-Commerce",
    description: "A platform connecting local Visayan artisans to the global market, featuring real-time inventory and secure payments.",
  },
  {
    title: "Negros Digital Hub",
    category: "Community Platform",
    description: "A centralized hub for tech professionals in Negros Oriental to collaborate, share resources, and find opportunities.",
  },
  {
    title: "EcoTours PH",
    category: "Mobile App",
    description: "An eco-tourism guide app that promotes sustainable travel across the Philippines.",
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 bg-brand-void relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-slate-400 max-w-xl">
              A showcase of our digital craftsmanship. We build solutions that matter.
            </p>
          </div>
          <button className="text-brand-palay hover:text-white flex items-center gap-2 transition-colors font-medium">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-brand-palay/50 transition-colors">
              {/* Image Placeholder */}
              <div className="aspect-video bg-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-brand-palay/10 group-hover:bg-brand-palay/0 transition-colors" />
                <div className="flex items-center justify-center h-full text-slate-600 font-mono text-sm p-4 text-center">
                  [Image: {project.title}]
                </div>
              </div>

              <div className="p-6 relative z-10 bg-brand-void">
                <div className="text-brand-teal text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-palay transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-sm text-white hover:text-brand-palay transition-colors">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
