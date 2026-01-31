import React from 'react';
import { Heart } from 'lucide-react';
import { Logo } from '../ui/Logo';

export function Footer() {
  return (
    <footer className="bg-background border-t border-black/5 dark:border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              The Filipino Engine for Digital Innovation.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in the Philippines</span>
            </div>
            <p className="text-slate-500 text-xs">
              © {new Date().getFullYear()} MugnaDigital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
