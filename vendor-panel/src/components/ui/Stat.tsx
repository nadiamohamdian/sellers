import React from 'react';
import { cn } from '../../lib/utils';

interface StatProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export default function Stat({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon, 
  action, 
  className 
}: StatProps) {
  const changeColors = {
    positive: 'text-green-600',
    negative: 'text-red-600',
    neutral: 'text-gray-600'
  };
  
  return (
    <div className={cn('bg-white rounded-xl p-6 shadow-sm border border-gray-200', className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {action}
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={cn('text-sm font-medium', changeColors[changeType])}>
              {change}
            </p>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}
