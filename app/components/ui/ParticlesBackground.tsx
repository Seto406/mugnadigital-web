'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { themeMode, visionMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let brandColorRgb = '16, 185, 129'; // Default RGB

    // Handle Reduced Motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    const updateBrandColor = () => {
        const style = getComputedStyle(document.documentElement);
        let color = style.getPropertyValue('--color-brand-palay').trim() || style.getPropertyValue('--brand-palay').trim();

        if (!color) {
            color = '#10b981';
        }

        if (color.startsWith('#')) {
            const hex = color.substring(1);
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            brandColorRgb = `${r}, ${g}, ${b}`;
        }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * (canvas?.width || 0),
      y: Math.random() * (canvas?.height || 0),
      size: Math.random() * 2 + 0.5,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.5 + 0.1,
    });

    const updateParticle = (p: Particle) => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (canvas) {
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      }
    };

    const drawParticle = (p: Particle) => {
      if (!ctx) return;
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const init = () => {
      particles = [];
      const numberOfParticles = Math.min(window.innerWidth * 0.05, 50);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = `rgb(${brandColorRgb})`;

      particles.forEach((particle) => {
        if (!prefersReducedMotion) {
          updateParticle(particle);
        }
        drawParticle(particle);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    // Use setTimeout to ensure we read the computed style *after* the ThemeContext
    // has updated the document.documentElement classes/attributes.
    const timeoutId = setTimeout(() => {
      updateBrandColor();
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      init();
      animate();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', resizeCanvas);
      mediaQuery.removeEventListener('change', handleMotionChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeMode, visionMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
