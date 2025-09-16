import React from 'react';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import Stat from '../ui/Stat';
import Button from '../ui/Button';

const statsData = [
  {
    title: 'درآمد تا خالص',
    value: '۱۲۰,۵۸۶,۰۰۰ ریال',
    change: '+ ۳۰% نسبت به بازه قبل',
    changeType: 'positive' as const,
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    action: (
      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
        <ArrowLeft className="w-4 h-4 ml-1" />
        جزئیات
      </Button>
    )
  },
  {
    title: 'فروخته شده',
    value: '۲۰ کالا',
    change: '+ ۳۰% نسبت به بازه قبل',
    changeType: 'positive' as const,
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    action: (
      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
        <ArrowLeft className="w-4 h-4 ml-1" />
        جزئیات
      </Button>
    )
  },
  {
    title: 'سفارش و تعهد ارسال',
    value: '',
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    action: (
      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
        <ArrowLeft className="w-4 h-4 ml-1" />
        جزئیات
      </Button>
    ),
    customContent: (
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">تعهد ارسال گذشته و امروز</span>
          <span className="font-semibold text-gray-900">10</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">تعهد ارسال فردا به بعد</span>
          <span className="font-semibold text-gray-900">7</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">سفارش های امروز</span>
          <span className="font-semibold text-gray-900">5</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">سفارش های لغو شده</span>
          <span className="font-semibold text-gray-900">4</span>
        </div>
      </div>
    )
  }
];

export default function KPIStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {statsData.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
            {stat.action}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {stat.customContent ? (
                stat.customContent
              ) : (
                <>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  {stat.change && (
                    <p className={`text-sm font-medium ${
                      stat.changeType === 'positive' ? 'text-green-600' : 
                      stat.changeType === 'negative' ? 'text-red-600' : 
                      'text-gray-600'
                    }`}>
                      {stat.change}
                    </p>
                  )}
                </>
              )}
            </div>
            {stat.icon && (
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                {stat.icon}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
