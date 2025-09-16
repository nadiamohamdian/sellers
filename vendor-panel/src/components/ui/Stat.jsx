import React from 'react';
import { cn } from '../../lib/utils';

export default function Stat({ 
  title, 
  value, 
  unit,
  change, 
  changeType = 'neutral', 
  icon, 
  action, 
  className 
}) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-text-muted'
  };
  
  return (
    <div className={cn('bg-surface-soft rounded-20 p-4 lg:p-6 shadow-card border border-gray-200', className)}>
      <div className="flex items-center justify-between mb-3 lg:mb-4">
        <h3 className="text-xs lg:text-sm font-medium text-text-muted font-yekan">{title}</h3>
        {action}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1 lg:gap-2">
            <p className="text-lg lg:text-2xl font-bold text-text-primary font-yekan truncate">{value}</p>
            {unit && (
              <span className="text-xs lg:text-sm text-text-muted font-yekan flex-shrink-0">{unit}</span>
            )}
          </div>
          {change && (
            <p className={cn('text-xs lg:text-sm font-medium font-yekan mt-1', changeColors[changeType])}>
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-surface-blue rounded-12 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
