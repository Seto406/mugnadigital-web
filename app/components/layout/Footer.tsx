import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-void border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center md:justify-start">
              <Image
                src="/logo-white.svg"
                alt="MugnaDigital"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-slate-400 text-sm">
              The Filipino Engine for Digital Innovation.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-brand-mist">
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
