import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ShowroomGallery } from '../ui/ShowroomGallery';
import { Reveal } from '../ui/Reveal';

const projects = [
  {
    title: "Visayan Marketplace",
    category: "E-Commerce",
    description: "A platform connecting local Visayan artisans to the global market, featuring real-time inventory and secure payments.",
    image: "/images/project-marketplace.jpg"
  },
  {
    title: "Negros Digital Hub",
    category: "Community Platform",
    description: "A centralized hub for tech professionals in Negros Oriental to collaborate, share resources, and find opportunities.",
    image: "/images/project-hub.jpg"
  },
  {
    title: "EcoTours PH",
    category: "Mobile App",
    description: "An eco-tourism guide app that promotes sustainable travel across the Philippines.",
    image: "/images/project-ecotours.jpg"
  },
  {
    title: "Dumaguete Foodie",
    category: "Delivery Platform",
    description: "Hyper-local food delivery service connecting students with the best hidden gems in the city.",
    image: "/images/project-foodie.jpg"
  }
];

export function Work() {
  return (
    <section id="work" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Selected Works</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A showcase of our digital craftsmanship. We build solutions that matter.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <button className="text-brand-palay hover:text-foreground flex items-center gap-2 transition-colors font-medium">
                View All Projects <ArrowUpRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>

        <ShowroomGallery projects={projects} />
      </div>
    </section>
  );
}
