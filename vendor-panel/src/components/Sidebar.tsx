// src/components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/', label: 'داشبورد', icon: '📊' },
  { path: '/orders', label: 'سفارشات', icon: '📦' },
  { path: '/products', label: 'محصولات', icon: '🛍️' },
  { path: '/settings', label: 'تنظیمات', icon: '⚙️' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-fg">پنل فروشنده</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-brand text-white'
                      : 'text-muted hover:bg-border hover:text-fg'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center text-white text-sm font-bold">
            U
          </div>
          <div>
            <p className="text-sm font-medium text-fg">کاربر</p>
            <p className="text-xs text-muted">فروشنده</p>
          </div>
        </div>
      </div>
    </div>
  );
}
