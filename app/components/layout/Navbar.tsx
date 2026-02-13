'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { Menu, X, Sun, Moon, Eye } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { useTheme, VisionMode } from '../../context/ThemeContext';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { themeMode, setThemeMode, visionMode, setVisionMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar

      if (scrollPosition < 200) {
        setActiveSection('');
        return;
      }

      // Find the current section
      const sections = navLinks
        .map(link => link.href.substring(1))
        .filter(id => id !== '');

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsVisionOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    if (isVisionOpen || isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVisionOpen, isMobileMenuOpen]);

  const isActive = (href: string) => {
    const sectionId = href.substring(1);
    return (href === '#' && activeSection === '') || activeSection === sectionId;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--foreground)]/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" aria-label="Home">
              <Logo className="h-10 w-auto text-[var(--foreground)]" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-[var(--brand-palay)]'
                      : 'text-[var(--foreground)]/80 hover:text-[var(--brand-palay)]'
                  }`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
              className="p-2 text-[var(--foreground)] hover:text-[var(--brand-palay)] transition-colors rounded-full hover:bg-[var(--foreground)]/5"
              title={themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label={themeMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {themeMode === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            {/* Vision Mode Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsVisionOpen(!isVisionOpen)}
                className={`p-2 transition-colors rounded-full hover:bg-[var(--foreground)]/5 ${visionMode !== 'normal' ? 'text-[var(--brand-palay)]' : 'text-[var(--foreground)] hover:text-[var(--brand-palay)]'}`}
                title="Vision Accessibility"
                aria-label="Vision Settings"
                aria-haspopup="true"
                aria-expanded={isVisionOpen}
                aria-controls="vision-menu"
              >
                <Eye size={20} />
              </button>

              {isVisionOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsVisionOpen(false)} />
                  <div
                    id="vision-menu"
                    className="absolute right-0 mt-2 w-48 bg-[var(--background)] border border-[var(--foreground)]/10 rounded-xl shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-200"
                  >
                    <div className="text-xs font-bold text-[var(--foreground)]/50 mb-2 px-2 uppercase tracking-wider" aria-hidden="true">Vision Mode</div>
                    {(['normal', 'protanopia', 'deuteranopia', 'tritanopia'] as VisionMode[]).map((mode) => (
                      <button
                        key={mode}
                        aria-current={visionMode === mode ? 'true' : undefined}
                        onClick={() => { setVisionMode(mode); setIsVisionOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                          visionMode === mode
                            ? 'bg-[var(--brand-palay)]/10 text-[var(--brand-palay)] font-medium'
                            : 'text-[var(--foreground)]/80 hover:bg-[var(--foreground)]/5'
                        }`}
                      >
                        {mode === 'normal' ? 'Standard' : mode.charAt(0).toUpperCase() + mode.slice(1)}
                        {visionMode === mode && <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-palay)]" />}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="w-px h-6 bg-[var(--foreground)]/10 mx-2" />

            <Button variant="primary" size="sm" href="#contact" className="!leading-none !py-[9px]">
              Tara, Let&apos;s Build
            </Button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground)] hover:bg-[var(--foreground)]/10 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Toggle main menu</span>
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
        <div
          id="mobile-menu"
          className="md:hidden bg-[var(--background)] border-b border-[var(--foreground)]/5 h-screen overflow-y-auto pb-20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--brand-palay)] block px-3 py-4 rounded-md text-xl font-medium border-b border-[var(--foreground)]/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 pb-4">
             <div className="px-5 space-y-6">
                {/* Mobile Settings */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-[var(--foreground)]">Theme</span>
                  <div className="flex gap-2 bg-[var(--foreground)]/5 p-1 rounded-lg">
                     <button
                        onClick={() => setThemeMode('light')}
                        className={`p-2 rounded-md transition-all ${themeMode === 'light' ? 'bg-[var(--background)] text-[var(--brand-palay)] shadow-sm' : 'text-[var(--foreground)]/60'}`}
                        aria-label="Switch to light mode"
                        aria-pressed={themeMode === 'light'}
                     >
                       <Sun size={20} />
                     </button>
                     <button
                        onClick={() => setThemeMode('dark')}
                        className={`p-2 rounded-md transition-all ${themeMode === 'dark' ? 'bg-[var(--background)] text-[var(--brand-palay)] shadow-sm' : 'text-[var(--foreground)]/60'}`}
                        aria-label="Switch to dark mode"
                        aria-pressed={themeMode === 'dark'}
                     >
                       <Moon size={20} />
                     </button>
                  </div>
                </div>

                <div>
                   <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">Vision Experience</h3>
                   <div className="grid grid-cols-2 gap-3">
                      {(['normal', 'protanopia', 'deuteranopia', 'tritanopia'] as VisionMode[]).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setVisionMode(mode)}
                          className={`px-4 py-3 text-sm rounded-xl border text-center transition-all ${
                            visionMode === mode
                              ? 'border-[var(--brand-palay)] text-[var(--brand-palay)] bg-[var(--brand-palay)]/5 font-bold'
                              : 'border-[var(--foreground)]/10 text-[var(--foreground)]/70'
                          }`}
                          aria-pressed={visionMode === mode}
                        >
                          {mode === 'normal' ? 'Standard' : mode.charAt(0).toUpperCase() + mode.slice(1)}
                        </button>
                      ))}
                   </div>
                </div>

                <Button variant="primary" size="lg" className="w-full justify-center mt-4" href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Tara, Let&apos;s Build
                </Button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
}
