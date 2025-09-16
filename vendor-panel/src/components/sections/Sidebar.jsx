import React, { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  HelpCircle, 
  Headphones,
  Bell,
  MessageCircle,
  Mail,
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const menuGroups = [
  {
    id: 'products',
    label: 'کالا',
    items: [
      { id: 'search', label: 'جستجو و ثبت کالا', icon: Package, path: '/products/search' },
      { id: 'manage', label: 'مدیریت کالا و افزودن تنوع', icon: Package, path: '/products/manage' },
      { id: 'variations', label: 'مدیریت تنوع و قیمت گذاری', icon: Package, path: '/products/variations' },
      { id: 'inventory', label: 'گزارش موجودی کالا', icon: Package, path: '/products/inventory' }
    ]
  },
  {
    id: 'orders',
    label: 'سفارش ها',
    items: [
      { id: 'current', label: 'مدیریت سفارشات جاری', icon: ShoppingCart, path: '/orders/current' },
      { id: 'history', label: 'تاریخچه سفارشات', icon: ShoppingCart, path: '/orders/history' }
    ]
  },
  {
    id: 'financial',
    label: 'مالی',
    items: [
      { id: 'invoices', label: 'صورتحساب ها', icon: DollarSign, path: '/financial/invoices' },
      { id: 'analytics', label: 'تحلیل عملکرد', icon: BarChart3, path: '/financial/analytics' },
      { id: 'sales', label: 'فروش و درآمد', icon: DollarSign, path: '/financial/sales' },
      { id: 'returns', label: 'مرجوعی', icon: DollarSign, path: '/financial/returns' }
    ]
  },
  {
    id: 'help',
    label: 'راهنما',
    items: [
      { id: 'training', label: 'مرکز آموزش فروشندگان', icon: HelpCircle, path: '/help/training' },
      { id: 'prohibited', label: 'کالاهای غیر مجاز', icon: HelpCircle, path: '/help/prohibited' }
    ]
  },
  {
    id: 'support',
    label: 'پشتیبانی',
    items: [
      { id: 'request', label: 'درخواست پشتیبانی', icon: Headphones, path: '/support/request' }
    ]
  }
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const activeItem = 'dashboard'; // پیشخوان is always active

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white border-l border-gray-200 h-full flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-80'
    } hidden lg:flex`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className={`flex items-center gap-3 mb-4 ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-text-onPrimary" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-semibold text-text-primary font-yekan">نام فروشنده</h2>
            </div>
          )}
        </div>
        
        {/* Action Icons */}
        <div className={`flex items-center gap-3 mb-4 ${isCollapsed ? 'justify-center' : ''}`}>
          <button 
            className="p-2 hover:bg-surface-soft rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label="اعلان‌ها"
          >
            <Bell className="w-5 h-5 text-text-muted" />
          </button>
          <button 
            className="p-2 hover:bg-surface-soft rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label="پیام‌ها"
          >
            <MessageCircle className="w-5 h-5 text-text-muted" />
          </button>
          <button 
            className="p-2 hover:bg-surface-soft rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
            aria-label="ایمیل"
          >
            <Mail className="w-5 h-5 text-text-muted" />
          </button>
        </div>
        
        {/* Dashboard Button - Highlighted */}
        <button 
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all duration-200 bg-brand-primary text-text-onPrimary font-yekan shadow-card hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 ${
            isCollapsed ? 'justify-center' : ''
          }`}
          aria-current="page"
          aria-label="پیشخوان - صفحه اصلی"
        >
          <BarChart3 className="w-5 h-5" />
          {!isCollapsed && <span>پیشخوان</span>}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6 overflow-y-auto" aria-label="Seller sidebar">
        <div className="space-y-6">
          {menuGroups.map((group) => (
            <div key={group.id}>
              {!isCollapsed && (
                <h3 className="text-sm font-semibold text-text-muted mb-3 uppercase tracking-wide font-yekan">
                  {group.label}
                </h3>
              )}
              <ul className="space-y-1" role="list">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;
                  
                  return (
                    <li key={item.id} role="listitem">
                      <button 
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-yekan text-right focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-1 ${
                          isActive 
                            ? 'bg-brand-primary text-text-onPrimary shadow-card' 
                            : 'text-text-primary hover:bg-surface-soft'
                        } ${isCollapsed ? 'justify-center' : ''}`}
                        aria-label={item.label}
                        title={isCollapsed ? item.label : undefined}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        {!isCollapsed && <span className="truncate">{item.label}</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      {/* Collapse Toggle Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={toggleCollapse}
          className="w-full flex items-center justify-center p-2 hover:bg-surface-soft rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
          aria-label={isCollapsed ? 'باز کردن منو' : 'بستن منو'}
        >
          {isCollapsed ? (
            <ChevronLeft className="w-5 h-5 text-text-muted" />
          ) : (
            <ChevronRight className="w-5 h-5 text-text-muted" />
          )}
        </button>
      </div>
    </div>
  );
}
