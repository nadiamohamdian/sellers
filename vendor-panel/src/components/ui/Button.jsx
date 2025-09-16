import React from 'react';
import { cn } from '../../lib/utils';

export default function Button({ 
  children, 
  className, 
  type = "button", 
  variant = "primary", 
  fullWidth = false,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-primary text-text-onPrimary rounded-lg shadow-glow hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary",
    outline: "border border-text-muted/30 bg-white text-text-primary hover:bg-surface-blue rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
  };

  const sizeStyles = fullWidth ? "w-full h-12" : "px-6 py-3";

  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variants[variant],
        sizeStyles,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}