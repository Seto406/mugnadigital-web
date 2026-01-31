'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { WeavePattern } from '../ui/WeavePattern';
import GearAnimation from '../ui/GearAnimation';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated Gears */}
      <GearAnimation
        className="-top-20 -left-20 opacity-5"
        size={300}
        duration={20}
      />
      <GearAnimation
        className="top-1/4 -right-10 opacity-5"
        size={200}
        duration={15}
        reverse
      />
      <GearAnimation
        className="-bottom-32 left-1/3 opacity-5"
        size={400}
        duration={30}
      />

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-palay/20 blur-[120px] rounded-full pointer-events-none"
      />

      <WeavePattern />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-palay/10 border border-brand-palay/20 text-brand-palay text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-palay opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-palay"></span>
          </span>
          Phase 1: Cyber-Tropical
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          The Filipino Engine <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-palay to-brand-teal">
            For Digital Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Bridging the gap between imagination (&quot;Mugna&quot;) and execution.
          We build high-performance digital solutions with Filipino craftsmanship and futuristic vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="primary" className="text-lg px-8">
            Start Your Project
          </Button>
          <Button variant="secondary" className="text-lg px-8">
            View Our Work
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
