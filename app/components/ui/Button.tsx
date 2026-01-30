import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  const baseStyles = "rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-palay focus:ring-offset-2 focus:ring-offset-brand-void";

  const variants = {
    primary: "bg-brand-palay text-brand-void hover:bg-brand-palay/90 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]",
    secondary: "border-2 border-brand-palay text-brand-palay hover:bg-brand-palay/10",
    ghost: "text-brand-mist hover:text-brand-palay"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
