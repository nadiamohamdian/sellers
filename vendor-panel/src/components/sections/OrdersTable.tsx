import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const ordersData = [
  {
    id: 1,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۲۱:۴۵',
    orderCode: 'کد سفارش: ۲۵۴۸۲',
    amount: '۵,۱۹۸,۳۶۵ ریال'
  },
  {
    id: 2,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۲۰:۳۰',
    orderCode: 'کد سفارش: ۲۵۴۸۱',
    amount: '۳,۲۵۰,۰۰۰ ریال'
  },
  {
    id: 3,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۱۹:۱۵',
    orderCode: 'کد سفارش: ۲۵۴۸۰',
    amount: '۱,۸۰۰,۰۰۰ ریال'
  },
  {
    id: 4,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۱۸:۴۵',
    orderCode: 'کد سفارش: ۲۵۴۷۹',
    amount: '۴,۵۰۰,۰۰۰ ریال'
  },
  {
    id: 5,
    date: '۱۴۰۳/۰۲/۱۰',
    time: '۱۷:۲۰',
    orderCode: 'کد سفارش: ۲۵۴۷۸',
    amount: '۲,۱۰۰,۰۰۰ ریال'
  }
];

export default function OrdersTable() {
  return (
    <Card className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">آخرین سفارشات</h3>
        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
          <ArrowLeft className="w-4 h-4 ml-1" />
          جزئیات
        </Button>
      </div>
      
      <div className="space-y-3">
        {ordersData.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-blue-600">{order.id}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>{order.date}</span>
                  <span>•</span>
                  <span>{order.time}</span>
                </div>
                <p className="text-sm font-medium text-gray-900">{order.orderCode}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-900">{order.amount}</span>
              <ArrowLeft className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
