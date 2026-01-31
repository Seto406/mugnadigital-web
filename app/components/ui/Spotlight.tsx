'use client';

import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export function Spotlight() {
  // Use MotionValues for performance
  const mouseX = useMotionValue(-1000); // Start off-screen
  const mouseY = useMotionValue(-1000);

  // Spring for smooth movement
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handlePointerDown = (e: PointerEvent) => {
       // On mobile/tap, move spotlight immediately
       mouseX.set(e.clientX);
       mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
        filter: 'blur(30px)',
      }}
    />
  );
}
