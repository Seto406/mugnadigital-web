'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

interface ShowroomGalleryProps {
  projects: Project[];
}

export const ShowroomGallery = ({ projects }: ShowroomGalleryProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showHint, setShowHint] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Manual reduced motion check for reliability
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setShouldReduceMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const updateScrollState = () => {
      // Only show hint if content overflows and we haven't scrolled much
      if (container.scrollWidth > container.clientWidth && container.scrollLeft < 20) {
        setShowHint(true);
      } else {
        setShowHint(false);
      }

      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);

      ticking = false;
    };

    const checkScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    // Initial check
    updateScrollState();

    // Listeners
    container.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth / 2;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: shouldReduceMotion ? 'auto' : 'smooth'
      });
    }
  };

  return (
    <div className="relative group/gallery">
      <AnimatePresence>
        {canScrollLeft && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 dark:bg-black/50 rounded-full shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-black/80 text-foreground transition-all -ml-5 border border-white/20"
            aria-label="Scroll previous projects"
            aria-controls="gallery-container"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {canScrollRight && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 dark:bg-black/50 rounded-full shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-black/80 text-foreground transition-all -mr-5 border border-white/20"
            aria-label="Scroll next projects"
            aria-controls="gallery-container"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <div
        id="gallery-container"
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 -mx-4 px-4 md:-mx-0 md:px-0 hide-scrollbar focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-palay)] rounded-xl"
        style={{ scrollBehavior: shouldReduceMotion ? 'auto' : 'smooth' }}
        tabIndex={0}
        aria-label="Project Gallery"
      >
        {projects.map((project, index) => (
          <div key={index} className="flex-none w-[85vw] md:w-[600px] snap-center first:pl-0">
            <motion.div
               className="group relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-palay/50 transition-colors h-full flex flex-col shadow-sm dark:shadow-none"
               initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ margin: "-20%" }}
               transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 85vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-palay/10 group-hover:bg-brand-palay/0 transition-colors" />
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

      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-0 bottom-12 w-32 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none flex items-center justify-end pr-4 md:pr-0 z-20 md:hidden"
            aria-hidden="true"
          >
            <ChevronRight className="w-10 h-10 text-[var(--brand-palay)] animate-pulse drop-shadow-lg" />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
