import React from 'react';

export function WeavePattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 opacity-10 pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="weave" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#weave)" className="text-brand-teal" />
      </svg>
    </div>
  );
}
