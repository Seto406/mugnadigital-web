import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', href, children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-palay focus:ring-offset-2 focus:ring-offset-background cursor-pointer";

  const variantStyles = {
    primary: "bg-brand-palay text-brand-void hover:bg-brand-palay/90 hover:shadow-[0_0_15px_var(--color-brand-palay)] border border-transparent",
    secondary: "bg-transparent border-2 border-brand-palay text-brand-palay hover:bg-brand-palay/10",
    ghost: "bg-transparent text-foreground hover:text-brand-palay border border-transparent"
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as Omit<React.ComponentProps<typeof Link>, 'href'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
