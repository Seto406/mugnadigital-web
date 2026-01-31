import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g transform="translate(10, 8)">
        {/* Central Diamond (Core) */}
        <path d="M32 20L44 32L32 44L20 32L32 20Z" fill="currentColor" />

        {/* Surrounding Diamonds (Rays/Weave Pattern) */}
        <path d="M32 4L38 10L32 16L26 10L32 4Z" fill="currentColor" />
        <path d="M32 48L38 54L32 60L26 54L32 48Z" fill="currentColor" />
        <path d="M4 32L10 38L16 32L10 26L4 32Z" fill="currentColor" />
        <path d="M48 32L54 38L60 32L54 26L48 32Z" fill="currentColor" />

        {/* Diagonals (Smaller squares/diamonds) */}
        <rect x="12" y="12" width="8" height="8" fill="currentColor" />
        <rect x="44" y="12" width="8" height="8" fill="currentColor" />
        <rect x="12" y="44" width="8" height="8" fill="currentColor" />
        <rect x="44" y="44" width="8" height="8" fill="currentColor" />
      </g>

      {/* Text */}
      <text
        x="85"
        y="52"
        fontFamily="Inter, Helvetica, Arial, sans-serif"
        fontSize="36"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-1"
      >
        Mugna
        <tspan fill="var(--color-brand-palay)">Digital</tspan>
      </text>
    </svg>
  );
}
