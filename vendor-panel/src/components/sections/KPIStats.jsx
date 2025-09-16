import React from 'react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import Stat from '../ui/Stat';

const statsData = [
  {
    title: 'درآمد ناخالص',
    value: '۱۲.۵۸۶.۰۰۰',
    unit: 'ریال',
    change: '+ ۳۰٪ نسبت به بازه قبل',
    changeType: 'positive'
  },
  {
    title: 'فروخته‌شده',
    value: '۲۰',
    unit: 'کالا',
    change: '+ ۳۰٪ نسبت به بازه قبل',
    changeType: 'positive'
  }
];

export default function KPIStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
      {statsData.map((stat, index) => (
        <Stat
          key={index}
          title={stat.title}
          value={stat.value}
          unit={stat.unit}
          change={stat.change}
          changeType={stat.changeType}
          icon={<TrendingUp className="w-6 h-6 text-brand-primary" />}
          action={
            <Button 
              variant="primary" 
              size="sm" 
              className="font-yekan text-xs lg:text-sm"
              icon={<ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 transform scale-x-[-1]" />}
              iconPosition="right"
            >
              جزئیات
            </Button>
          }
        />
      ))}
    </div>
  );
}
