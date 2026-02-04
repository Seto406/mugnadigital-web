"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export function BannerAd() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[45] p-4 md:p-0 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto">
            <div className="bg-[var(--brand-void-static)]/95 backdrop-blur-md border border-[var(--brand-palay)]/30 shadow-[0_-4px_30px_rgba(16,185,129,0.15)] rounded-xl md:rounded-b-none md:rounded-t-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mx-4 md:mx-0 mb-4 md:mb-0">

              <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
                 {/* Ad Icon/Image Placeholder */}
                 <div className="w-10 h-10 bg-[var(--brand-palay)]/10 rounded-lg flex items-center justify-center border border-[var(--brand-palay)]/30 shrink-0">
                    <span className="text-[var(--brand-palay)] font-bold text-[10px]">AD</span>
                 </div>

                 <div className="text-left">
                    <h3 className="text-sm font-bold text-slate-100">
                       Reach your local audience
                    </h3>
                    <p className="text-xs text-slate-400">
                       Partner with MugnaDigital to showcase your brand here.
                    </p>
                 </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto pl-14 md:pl-0">
                <Button
                   href="#contact"
                   variant="primary"
                   size="sm"
                   className="flex-1 md:flex-none text-xs font-bold"
                >
                   Advertise with Us <ExternalLink className="w-3 h-3 ml-2" />
                </Button>

                <button
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 text-slate-400 hover:text-[var(--brand-palay)] transition-colors rounded-full hover:bg-white/5"
                  aria-label="Close advertisement"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
