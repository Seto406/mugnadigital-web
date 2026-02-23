'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Settings } from 'lucide-react';

interface GearAnimationProps {
  size?: number;
  color?: string;
  duration?: number;
  className?: string;
  reverse?: boolean;
}

export default function GearAnimation({
  size = 100,
  color = '#10b981', // Brand Green
  duration = 10,
  className = '',
  reverse = false,
}: GearAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`absolute opacity-10 pointer-events-none ${className}`}
      animate={{ rotate: shouldReduceMotion ? 0 : (reverse ? -360 : 360) }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Settings size={size} color={color} strokeWidth={1} />
    </motion.div>
  );
}
