import React from 'react';
import Card from '../ui/Card';

const commitmentsData = [
  {
    title: 'تعهد ارسال گذشته و امروز',
    value: '۱۰'
  },
  {
    title: 'تعهد ارسال فردا به بعد',
    value: '۷'
  },
  {
    title: 'سفارش‌های امروز',
    value: '۵'
  },
  {
    title: 'سفارش‌های لغوشده',
    value: '۶'
  }
];

export default function ShippingCommitments() {
  return (
    <Card variant="soft">
      <h3 className="text-base lg:text-lg font-semibold text-text-primary mb-4 lg:mb-6 font-yekan">سفارش و تعهد ارسال</h3>
      
      <div className="grid grid-cols-2 gap-3 lg:gap-4">
        {commitmentsData.map((item, index) => (
          <div key={index} className="text-right">
            <div className="text-xl lg:text-2xl font-bold text-text-primary font-yekan mb-1">
              {item.value}
            </div>
            <p className="text-xs lg:text-sm text-text-muted font-yekan leading-tight">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
