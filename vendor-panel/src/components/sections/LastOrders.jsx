import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ordersData = [
  {
    id: 1,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۲۱:۴۵',
    orderCode: '۲۵۴۸۲',
    amount: '۵,۱۹۸,۳۶۵'
  },
  {
    id: 2,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۲۰:۳۰',
    orderCode: '۲۵۴۸۱',
    amount: '۳,۲۵۰,۰۰۰'
  },
  {
    id: 3,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۱۹:۱۵',
    orderCode: '۲۵۴۸۰',
    amount: '۱,۸۰۰,۰۰۰'
  },
  {
    id: 4,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۱۸:۴۵',
    orderCode: '۲۵۴۷۹',
    amount: '۴,۵۰۰,۰۰۰'
  },
  {
    id: 5,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۱۷:۲۰',
    orderCode: '۲۵۴۷۸',
    amount: '۲,۱۰۰,۰۰۰'
  }
];

export default function LastOrders() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4 lg:mb-6">
        <h3 className="text-base lg:text-lg font-semibold text-text-primary font-yekan">آخرین سفارشات</h3>
        <Button 
          variant="primary" 
          size="sm" 
          className="font-yekan text-xs lg:text-sm"
          icon={<ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 transform scale-x-[-1]" />}
          iconPosition="right"
        >
          جزئیات
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]" dir="rtl">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-right py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-text-muted font-yekan">
                #
              </th>
              <th className="text-right py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-text-muted font-yekan">
                تاریخ
              </th>
              <th className="text-right py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-text-muted font-yekan">
                ساعت
              </th>
              <th className="text-right py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-text-muted font-yekan">
                کد سفارش
              </th>
              <th className="text-right py-2 lg:py-3 px-2 lg:px-4 text-xs lg:text-sm font-semibold text-text-muted font-yekan">
                مبلغ
              </th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr 
                key={order.id} 
                className="border-b border-gray-100 hover:bg-surface-soft transition-colors cursor-pointer"
              >
                <td className="py-3 lg:py-4 px-2 lg:px-4 text-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-brand-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xs lg:text-sm font-semibold text-text-onPrimary font-yekan">
                      {order.id}
                    </span>
                  </div>
                </td>
                <td className="py-3 lg:py-4 px-2 lg:px-4 text-right text-xs lg:text-sm text-text-primary font-yekan">
                  {order.date}
                </td>
                <td className="py-3 lg:py-4 px-2 lg:px-4 text-right text-xs lg:text-sm text-text-primary font-yekan">
                  {order.time}
                </td>
                <td className="py-3 lg:py-4 px-2 lg:px-4 text-right text-xs lg:text-sm text-text-primary font-yekan">
                  {order.orderCode}
                </td>
                <td className="py-3 lg:py-4 px-2 lg:px-4 text-right text-xs lg:text-sm font-semibold text-text-primary font-yekan">
                  {order.amount} ریال
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
