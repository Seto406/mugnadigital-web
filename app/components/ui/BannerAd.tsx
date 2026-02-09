"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import Script from 'next/script';
import { Button } from './Button';

// Configuration for AdSense
// AdSense configuration is loaded from environment variables
const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "";
const ADSENSE_SLOT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID || "";

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

export function BannerAd() {
  const [isVisible, setIsVisible] = useState(true);
  const showAdSense = !!(ADSENSE_CLIENT_ID && ADSENSE_SLOT_ID);

  useEffect(() => {
    if (showAdSense && isVisible) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [showAdSense, isVisible]);

  return (
    <>
      {showAdSense && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-4 left-4 right-4 z-[45] pointer-events-none"
          >
            <div className="max-w-5xl mx-auto pointer-events-auto">
              <div className="bg-[var(--brand-void-static)]/90 backdrop-blur-xl border border-[var(--brand-palay)]/40 shadow-[0_0_20px_rgba(16,185,129,0.2)] rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 transition-all duration-300 hover:border-[var(--brand-palay)]/60">

                {showAdSense ? (
                  /* AdSense Container */
                  <div className="w-full flex justify-center items-center min-h-[90px] bg-white/5 rounded-lg overflow-hidden relative">
                     <span className="absolute text-[10px] text-slate-500 top-1 right-1 z-10">Advertisement</span>
                     <ins
                        className="adsbygoogle block w-full"
                        style={{ display: 'block' }}
                        data-ad-client={ADSENSE_CLIENT_ID}
                        data-ad-slot={ADSENSE_SLOT_ID}
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                     />
                  </div>
                ) : (
                  /* Internal Promo Container */
                  <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                    <div className="flex items-center gap-4 flex-1 w-full md:w-auto">
                      <div className="w-12 h-12 bg-[var(--brand-palay)]/10 rounded-xl flex items-center justify-center border border-[var(--brand-palay)]/30 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                          <span className="text-[var(--brand-palay)] font-bold text-xs tracking-wider">AD</span>
                      </div>

                      <div className="text-left">
                          <h3 className="text-sm md:text-base font-bold text-slate-100 tracking-tight">
                            Reach your local audience
                          </h3>
                          <p className="text-xs md:text-sm text-slate-400">
                            Partner with <span className="text-[var(--brand-palay)]">MugnaDigital</span> to showcase your brand here.
                          </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto pl-16 md:pl-0">
                      <Button
                        href="#contact"
                        variant="primary"
                        size="sm"
                        className="flex-1 md:flex-none text-xs md:text-sm font-bold shadow-lg shadow-[var(--brand-palay)]/20"
                      >
                        Advertise with Us <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Close Button - Always visible but positioned nicely */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="absolute top-2 right-2 md:static p-2 text-slate-400 hover:text-[var(--brand-palay)] hover:bg-white/10 transition-all rounded-full"
                  aria-label="Close advertisement"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
