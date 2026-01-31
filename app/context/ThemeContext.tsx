'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';
export type VisionMode = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia';

interface ThemeContextType {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  visionMode: VisionMode;
  setVisionMode: (mode: VisionMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [visionMode, setVisionMode] = useState<VisionMode>('normal');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load from local storage
    const storedTheme = localStorage.getItem('themeMode') as ThemeMode;
    const storedVision = localStorage.getItem('visionMode') as VisionMode;

    if (storedTheme) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setThemeMode(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setThemeMode('dark');
    }

    if (storedVision) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisionMode(storedVision);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('themeMode', themeMode);
    localStorage.setItem('visionMode', visionMode);

    const root = document.documentElement;

    // Handle Theme Mode
    if (themeMode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Handle Vision Mode
    root.setAttribute('data-vision', visionMode);

  }, [themeMode, visionMode, mounted]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, visionMode, setVisionMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
