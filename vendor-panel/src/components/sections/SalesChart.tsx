import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const salesData = [
  { date: '۱/۱۵', revenue: 1, sales: 1 },
  { date: '۱/۱۷', revenue: 2, sales: 1.5 },
  { date: '۱/۱۹', revenue: 1.5, sales: 2 },
  { date: '۱/۲۱', revenue: 3, sales: 2.5 },
  { date: '۱/۲۳', revenue: 2.5, sales: 3 },
  { date: '۱/۲۵', revenue: 4, sales: 3.5 },
  { date: '۱/۲۷', revenue: 3.5, sales: 4 }
];

export default function SalesChart() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">روند فروش شما</h3>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
          <ArrowLeft className="w-4 h-4 ml-1" />
        </Button>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="date" 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#666"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              labelStyle={{ color: '#374151' }}
            />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="sales" 
              stroke="#1d4ed8" 
              strokeWidth={3}
              dot={{ fill: '#1d4ed8', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#1d4ed8', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">درآمد تا خالص (ریال)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
          <span className="text-sm text-gray-600">تعداد فروش شما</span>
        </div>
      </div>
    </Card>
  );
}
