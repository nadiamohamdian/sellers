import React from "react";

interface SidebarProps {
  activePage?: string;
  onPageChange?: (page: string) => void;
}

export default function StepsBar({ activePage = "dashboard", onPageChange }: SidebarProps) {
  const navigationItems = [
    {
      id: "dashboard",
      title: "پیشخوان",
      icon: "⚙️",
      isActive: true
    },
    {
      category: "کالا",
      items: [
        { id: "search-product", title: "جستجو و ثبت کالا", icon: "📁" },
        { id: "manage-product", title: "مدیریت کالا و افزودن تنوع", icon: "📁" },
        { id: "manage-variety", title: "مدیریت تنوع و قیمت گذاری", icon: "📁" },
        { id: "inventory-report", title: "گزارش موجودی کالا", icon: "📁" }
      ]
    },
    {
      category: "سفارش ها",
      items: [
        { id: "current-orders", title: "مدیریت سفارشات جاری", icon: "📄" },
        { id: "order-history", title: "تاریخچه سفارشات", icon: "📄" }
      ]
    },
    {
      category: "مالی",
      items: [
        { id: "invoices", title: "صورتحساب ها", icon: "💰" }
      ]
    },
    {
      category: "تحلیل عملکرد",
      items: [
        { id: "sales-revenue", title: "فروش و درآمد", icon: "📊" },
        { id: "returns", title: "مرجوعی", icon: "↩️" }
      ]
    },
    {
      category: "راهنما",
      items: [
        { id: "training-center", title: "مرکز آموزش فروشندگان", icon: "👤" },
        { id: "prohibited-products", title: "کالاهای غیر مجاز", icon: "📋" }
      ]
    },
    {
      category: "پشتیبانی",
      items: [
        { id: "support-request", title: "درخواست پشتیبانی", icon: "🎧" }
      ]
    }
  ];

  const handleItemClick = (itemId: string) => {
    if (onPageChange) {
      onPageChange(itemId);
    }
  };

    return (
    <div className="w-80 h-screen bg-white border-l border-gray-200 shadow-lg fixed right-0 top-0 z-40 overflow-y-auto">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        {/* Top Icons */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="relative w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
              <span className="text-sm">📧</span>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">23</span>
              </div>
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
              <span className="text-sm">←</span>
            </div>
          </div>
        </div>
        
        {/* User Profile */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">👤</span>
          </div>
          <span className="text-gray-800 font-medium text-sm">نام فروشنده</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="py-6">
        {navigationItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {/* Dashboard Button */}
            {section.id === "dashboard" && (
              <div className="px-6 mb-6">
                <button
                  onClick={() => handleItemClick("dashboard")}
                  className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${
                    activePage === "dashboard"
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <span className="text-lg">⚙️</span>
                    <span className="font-medium text-sm">پیشخوان</span>
                  </div>
                </button>
              </div>
            )}

            {/* Category Sections */}
            {section.category && (
              <>
                <div className="px-6 mb-3">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {section.category}
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-1">
                  {section.items?.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full flex items-center space-x-3 space-x-reverse px-6 py-3 text-right hover:bg-gray-50 transition-colors ${
                        activePage === item.id ? "bg-blue-50 border-r-4 border-blue-500" : ""
                      }`}
                    >
                      <span className="text-sm text-gray-600">{item.title}</span>
                      <span className="text-sm">{item.icon}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
                </div>
            ))}
      </div>
        </div>
    );
}
