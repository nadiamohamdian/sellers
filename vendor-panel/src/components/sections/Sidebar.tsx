import React from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  User
} from 'lucide-react';
import { cn } from '../../lib/utils';

const menuItems = [
  {
    category: 'کالا',
    items: [
      { path: '/products/search', label: 'جستجو و ثبت کالا', icon: Package },
      { path: '/products/manage', label: 'مدیریت کالا و افزودن تنوع', icon: Package },
      { path: '/products/variations', label: 'مدیریت تنوع و قیمت گذاری', icon: Package },
      { path: '/products/inventory', label: 'گزارش موجودی کالا', icon: Package }
    ]
  },
  {
    category: 'سفارش ها',
    items: [
      { path: '/orders/current', label: 'مدیریت سفارشات جاری', icon: ShoppingCart },
      { path: '/orders/history', label: 'تاریخچه سفارشات', icon: ShoppingCart }
    ]
  },
  {
    category: 'مالی',
    items: [
      { path: '/financial/invoices', label: 'صورتحساب ها', icon: DollarSign },
      { path: '/financial/analytics', label: 'تحلیل عملکرد', icon: BarChart3 },
      { path: '/financial/sales', label: 'فروش و درآمد', icon: DollarSign },
      { path: '/financial/returns', label: 'مرجوعی', icon: DollarSign }
    ]
  },
  {
    category: 'راهنما',
    items: [
      { path: '/help/training', label: 'مرکز آموزش فروشندگان', icon: HelpCircle },
      { path: '/help/prohibited', label: 'کالاهای غیر مجاز', icon: HelpCircle }
    ]
  },
  {
    category: 'پشتیبانی',
    items: [
      { path: '/support/request', label: 'درخواست پشتیبانی', icon: Headphones }
    ]
  }
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-80 bg-white border-l border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">نام فروشنده</h2>
          </div>
        </div>
        
        {/* Action Icons */}
        <div className="flex items-center gap-3 mb-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <MessageCircle className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Mail className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Dashboard Button */}
        <Link
          to="/"
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors',
            location.pathname === '/' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          )}
        >
          <BarChart3 className="w-5 h-5" />
          پیشخوان
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-6">
          {menuItems.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                {section.category}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;
                  
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={cn(
                          'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                          isActive
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
