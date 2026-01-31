'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Menu, X, Settings, Sun, Moon } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useTheme, ThemeMode, VisionMode } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { themeMode, setThemeMode, visionMode, setVisionMode } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--foreground)]/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo className="h-10 w-auto text-[var(--foreground)]" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[var(--foreground)]/80 hover:text-[var(--brand-palay)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Settings Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="p-2 text-[var(--foreground)] hover:text-[var(--brand-palay)] transition-colors rounded-full hover:bg-[var(--foreground)]/5"
                title="Theme Settings"
              >
                <Settings size={20} />
              </button>

              {isSettingsOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-[var(--background)] border border-[var(--foreground)]/10 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                  <div className="space-y-4">
                    {/* Theme Mode */}
                    <div>
                      <h3 className="text-xs font-bold text-[var(--foreground)]/50 mb-2 uppercase tracking-wider">Appearance</h3>
                      <div className="flex bg-[var(--foreground)]/5 rounded-lg p-1">
                        {(['light', 'dark'] as ThemeMode[]).map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setThemeMode(mode)}
                            className={`flex-1 flex items-center justify-center gap-2 py-1.5 rounded-md text-sm font-medium transition-all ${
                              themeMode === mode
                                ? 'bg-[var(--background)] text-[var(--brand-palay)] shadow-sm'
                                : 'text-[var(--foreground)]/60 hover:text-[var(--foreground)]'
                            }`}
                          >
                            {mode === 'light' ? <Sun size={14} /> : <Moon size={14} />}
                            <span className="capitalize">{mode}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Vision Mode */}
                    <div>
                      <h3 className="text-xs font-bold text-[var(--foreground)]/50 mb-2 uppercase tracking-wider">Vision Mode</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {(['normal', 'protanopia', 'deuteranopia', 'tritanopia'] as VisionMode[]).map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setVisionMode(mode)}
                            className={`px-2 py-1.5 rounded-md text-xs font-medium text-left transition-all border ${
                              visionMode === mode
                                ? 'border-[var(--brand-palay)] text-[var(--brand-palay)] bg-[var(--brand-palay)]/10'
                                : 'border-transparent text-[var(--foreground)]/70 hover:bg-[var(--foreground)]/5'
                            }`}
                          >
                            {mode === 'normal' ? 'Standard' : mode.charAt(0).toUpperCase() + mode.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Button variant="primary" size="sm" href="#contact">
              Tara, Let&apos;s Build
            </Button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground)] hover:bg-[var(--foreground)]/10 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--foreground)]/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--brand-palay)] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 pb-4 border-t border-[var(--foreground)]/5">
             <div className="px-5 space-y-4">
                {/* Mobile Settings */}
                <div>
                  <h3 className="text-xs font-bold text-[var(--foreground)]/50 mb-2 uppercase">Theme</h3>
                  <div className="flex gap-4">
                     <button onClick={() => setThemeMode('light')} className={`p-2 rounded-md ${themeMode === 'light' ? 'bg-[var(--brand-palay)]/20 text-[var(--brand-palay)]' : 'text-[var(--foreground)]'}`}>
                       <Sun />
                     </button>
                     <button onClick={() => setThemeMode('dark')} className={`p-2 rounded-md ${themeMode === 'dark' ? 'bg-[var(--brand-palay)]/20 text-[var(--brand-palay)]' : 'text-[var(--foreground)]'}`}>
                       <Moon />
                     </button>
                  </div>
                </div>

                <div>
                   <h3 className="text-xs font-bold text-[var(--foreground)]/50 mb-2 uppercase">Vision</h3>
                   <div className="flex flex-wrap gap-2">
                      {(['normal', 'protanopia', 'deuteranopia', 'tritanopia'] as VisionMode[]).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setVisionMode(mode)}
                          className={`px-3 py-1 text-xs rounded-full border ${
                            visionMode === mode
                              ? 'border-[var(--brand-palay)] text-[var(--brand-palay)]'
                              : 'border-[var(--foreground)]/20 text-[var(--foreground)]'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                   </div>
                </div>

                <Button variant="primary" className="w-full justify-center" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Tara, Let&apos;s Build
                </Button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
}
