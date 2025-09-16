import React from 'react';
import { Search, Bell, User, Settings } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <h1 className="text-lg lg:text-xl font-semibold text-text-primary font-yekan">main page 10</h1>
      </div>
      
      <div className="flex items-center gap-2 lg:gap-4">
        {/* Search - Hidden on mobile */}
        <div className="relative hidden md:block">
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="جستجو..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-8 focus:ring-2 focus:ring-brand-primary focus:border-transparent w-48 lg:w-64 font-yekan"
            dir="rtl"
          />
        </div>
        
        {/* Notifications */}
        <button className="p-2 hover:bg-surface-soft rounded-lg transition-colors relative">
          <Bell className="w-5 h-5 text-text-muted" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        
        {/* User Menu - Simplified on mobile */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-text-muted" />
          </div>
          <span className="hidden sm:block text-sm font-medium text-text-primary font-yekan">کاربر</span>
        </div>
        
        {/* Settings */}
        <button className="p-2 hover:bg-surface-soft rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-text-muted" />
        </button>
      </div>
    </div>
  );
}
