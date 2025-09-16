import React from 'react';
import { cn } from '../../lib/utils';

export default function Input({ 
  id, 
  name, 
  type = "text", 
  placeholder, 
  dir = "rtl", 
  className,
  ...props 
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      dir={dir}
      className={cn(
        'w-full h-12 rounded-lg border border-text-muted/40 bg-white shadow-sm px-4 text-text-primary placeholder:text-text-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors',
        className
      )}
      {...props}
    />
  );
}
