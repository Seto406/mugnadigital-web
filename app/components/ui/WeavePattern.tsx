import React from 'react';

export function WeavePattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-30 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="weave" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            {/* Interwoven effect using alternating colors */}
            <path d="M0 20 H60 M0 40 H60" stroke="var(--color-brand-palay)" strokeWidth="2" fill="none" />
            <path d="M20 0 V60 M40 0 V60" stroke="var(--color-brand-teal)" strokeWidth="2" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#weave)" />
      </svg>
    </div>
  );
}
