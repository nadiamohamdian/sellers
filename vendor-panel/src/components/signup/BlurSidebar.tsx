import React from 'react';

const BlurSidebar: React.FC = () => {
  const menuItems = [
    { label: 'جستجو و ثبت کالا', icon: 'search' },
    { label: 'مدیریت کالا و افزودن تنوع', icon: 'package' },
    { label: 'مدیریت تنوع و قیمت گذاری', icon: 'pricing' },
    { label: 'گزارش موجودی کالا', icon: 'inventory' },
    { label: 'سفارش ها', icon: 'orders' },
    { label: 'مدیریت سفارشات جاری', icon: 'current-orders' },
    { label: 'تاریخچه سفارشات', icon: 'history' },
    { label: 'صورت حساب ها', icon: 'invoices' },
    { label: 'تحلیل عملکرد', icon: 'analytics' },
    { label: 'فروش و درآمد', icon: 'sales' },
    { label: 'مرجوعی', icon: 'returns' },
    { label: 'مرکز آموزش فروشندگان', icon: 'training' },
    { label: 'کالاهای غیر مجاز', icon: 'prohibited' },
    { label: 'درخواست پشتیبانی', icon: 'support' },
  ];

  return (
    <div className="blur-sidebar">
      {/* Header */}
      <div className="blur-sidebar__header">
        <div className="blur-sidebar__avatar">
          <div className="icon-placeholder"></div>
        </div>
        <div className="blur-sidebar__name">نام فروشنده</div>
      </div>

      {/* Dashboard Button */}
      <button className="blur-sidebar__dashboard">
        <div className="icon-placeholder"></div>
        پیشخوان
      </button>

      {/* Menu Items */}
      <div className="blur-sidebar__menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="menu-item__icon">
              <div className="icon-placeholder"></div>
            </div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlurSidebar;
