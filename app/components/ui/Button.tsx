import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
}

export function Button({ variant = 'primary', size = 'md', className = '', href, children, isLoading, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-palay focus:ring-offset-2 focus:ring-offset-background cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

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
  const isDisabled = props.disabled || isLoading;

  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes} {...(props as Omit<React.ComponentProps<typeof Link>, 'href'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={isDisabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
}
