'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
  title: string;
  category: string;
  description: string;
}

interface ShowroomGalleryProps {
  projects: Project[];
}

export const ShowroomGallery = ({ projects }: ShowroomGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 -mx-4 px-4 md:-mx-0 md:px-0 hide-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-none w-[85vw] md:w-[600px] snap-center first:pl-0">
            <motion.div
               className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-palay/50 transition-colors h-full flex flex-col shadow-sm dark:shadow-none"
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ margin: "-20%" }}
               transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shrink-0">
                <div className="absolute inset-0 bg-brand-palay/10 group-hover:bg-brand-palay/0 transition-colors" />
                <div className="flex items-center justify-center h-full text-slate-400 dark:text-slate-600 font-mono text-sm p-4 text-center">
                  [Image: {project.title}]
                </div>
              </div>

              <div className="p-6 md:p-8 relative z-10 bg-white dark:bg-slate-900 flex flex-col flex-grow transition-colors">
                <div className="text-brand-teal text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-palay transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white hover:text-brand-palay transition-colors mt-auto group/link">
                  View Case Study <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Scroll Hint / Progress could go here, but keeping it clean for now */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
