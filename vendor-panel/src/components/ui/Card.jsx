import React from 'react';
import { cn } from '../../lib/utils';

export default function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-surface-soft shadow-card p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}