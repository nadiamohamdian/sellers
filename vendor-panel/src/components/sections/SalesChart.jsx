import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const salesData = [
  { date: '۱/۱۵', revenue: 0, sales: 0 },
  { date: '۱/۱۷', revenue: 1, sales: 1 },
  { date: '۱/۱۹', revenue: 2, sales: 1.5 },
  { date: '۱/۲۱', revenue: 1.5, sales: 2 },
  { date: '۱/۲۳', revenue: 3, sales: 2.5 },
  { date: '۱/۲۵', revenue: 2.5, sales: 3 },
  { date: '۱/۲۷', revenue: 4, sales: 3.5 },
  { date: '۱/۲۹', revenue: 3.5, sales: 4 },
  { date: '۲/۱', revenue: 2, sales: 2.5 },
  { date: '۲/۳', revenue: 3.5, sales: 3 },
  { date: '۲/۵', revenue: 4, sales: 3.5 },
  { date: '۲/۷', revenue: 3, sales: 2.5 },
  { date: '۲/۹', revenue: 4.5, sales: 4 },
  { date: '۲/۱۱', revenue: 3.5, sales: 3 },
  { date: '۲/۱۲', revenue: 4, sales: 3.5 }
];

export default function SalesChart() {
  return (
    <Card variant="soft">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 gap-3">
        <h3 className="text-base lg:text-lg font-semibold text-text-primary font-yekan">روند فروش شما</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-brand-primary hover:text-brand-accent font-yekan text-xs lg:text-sm self-start sm:self-auto"
          icon={<ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 transform scale-x-[-1]" />}
          iconPosition="right"
        >
          گزارش فروش
        </Button>
      </div>
      
      <div className="h-64 sm:h-72 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              stroke="#606060"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              fontFamily="Yekan Bakh, IRANYekan, system-ui, sans-serif"
            />
            <YAxis 
              stroke="#606060"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={[0, 4]}
              fontFamily="Yekan Bakh, IRANYekan, system-ui, sans-serif"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0,0,0,.08)',
                fontFamily: 'Yekan Bakh, IRANYekan, system-ui, sans-serif'
              }}
              labelStyle={{ color: '#0F1723' }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#0560FD" 
              strokeWidth={2}
              dot={{ fill: '#0560FD', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#0560FD', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#0091D0" 
              strokeWidth={2}
              dot={{ fill: '#0091D0', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#0091D0', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 sm:gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-brand-primary rounded-full"></div>
          <span className="text-xs lg:text-sm text-text-muted font-yekan">درآمد ناخالص (ریال)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-brand-accent rounded-full"></div>
          <span className="text-xs lg:text-sm text-text-muted font-yekan">تعداد فروش شما</span>
        </div>
      </div>
    </Card>
  );
}
