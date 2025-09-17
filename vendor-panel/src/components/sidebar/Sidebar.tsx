import React from "react";
import "./Sidebar.css";

interface SidebarProps {
  activePage?: string;
  onPageChange?: (page: string) => void;
}

export default function Sidebar({ activePage = "dashboard", onPageChange }: SidebarProps) {
  const handleItemClick = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const toggleSidebar = () => {
    console.log("Toggle sidebar");
  };

  const showMessages = () => {
    console.log("Show messages");
  };

    return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <div className="seller-info">
          <span className="seller-name">نام فروشنده</span>
          <div className="profile-avatar">
            <img src="/icons/Group 45650.svg" alt="Profile" />
            <div className="notification-badge">24</div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        {/* کالا Category */}
        <div className="nav-category">
          <div className="category-header">
            <span className="category-dot">•</span>
            <span className="category-title">کالا</span>
          </div>
          
          <div className={`nav-item ${activePage === "dashboard" ? "active" : ""}`} onClick={() => handleItemClick("dashboard")}>
            <img src="/icons/Group 45698.svg" alt="پیشخوان" className="nav-icon" />
            <span className="nav-text">پیشخوان</span>
          </div>
          
          <div className={`nav-item ${activePage === "search-product" ? "active" : ""}`} onClick={() => handleItemClick("search-product")}>
            <img src="/icons/Group 45699.svg" alt="جستجو و ثبت کالا" className="nav-icon" />
            <span className="nav-text">جستجو و ثبت کالا</span>
          </div>
          
          <div className={`nav-item ${activePage === "manage-product" ? "active" : ""}`} onClick={() => handleItemClick("manage-product")}>
            <img src="/icons/Group 45700.svg" alt="مدیریت کالا" className="nav-icon" />
            <span className="nav-text">مدیریت کالا و افزودن تنوع</span>
          </div>
          
          <div className={`nav-item ${activePage === "manage-variety" ? "active" : ""}`} onClick={() => handleItemClick("manage-variety")}>
            <img src="/icons/Group 45701.svg" alt="مدیریت تنوع" className="nav-icon" />
            <span className="nav-text">مدیریت تنوع و قیمت گذاری</span>
          </div>
          
          <div className={`nav-item ${activePage === "inventory-report" ? "active" : ""}`} onClick={() => handleItemClick("inventory-report")}>
            <img src="/icons/Group 45702.svg" alt="گزارش موجودی" className="nav-icon" />
            <span className="nav-text">گزارش موجودی کالا</span>
          </div>
        </div>

        {/* سفارش ها Category */}
        <div className="nav-category">
          <div className="category-header">
            <span className="category-dot">•</span>
            <span className="category-title">سفارش ها</span>
          </div>
          
          <div className={`nav-item ${activePage === "current-orders" ? "active" : ""}`} onClick={() => handleItemClick("current-orders")}>
            <img src="/icons/Group 45703.svg" alt="سفارشات جاری" className="nav-icon" />
            <span className="nav-text">مدیریت سفارشات جاری</span>
          </div>
          
          <div className={`nav-item ${activePage === "order-history" ? "active" : ""}`} onClick={() => handleItemClick("order-history")}>
            <img src="/icons/Group 45704.svg" alt="تاریخچه سفارشات" className="nav-icon" />
            <span className="nav-text">تاریخچه سفارشات</span>
          </div>
        </div>

        {/* مالی Category */}
        <div className="nav-category">
          <div className="category-header">
            <span className="category-dot">•</span>
            <span className="category-title">مالی</span>
          </div>
          
          <div className={`nav-item ${activePage === "invoices" ? "active" : ""}`} onClick={() => handleItemClick("invoices")}>
            <img src="/icons/Group 45705.svg" alt="صورتحساب ها" className="nav-icon" />
            <span className="nav-text">صورتحساب ها</span>
          </div>
        </div>

        {/* تحلیل عملکرد Category */}
        <div className="nav-category">
          <div className="category-header">
            <span className="category-dot">•</span>
            <span className="category-title">تحلیل عملکرد</span>
          </div>
          
          <div className={`nav-item ${activePage === "sales-revenue" ? "active" : ""}`} onClick={() => handleItemClick("sales-revenue")}>
            <img src="/icons/Group 45707.svg" alt="فروش و درآمد" className="nav-icon" />
            <span className="nav-text">فروش و درآمد</span>
          </div>
          
          <div className={`nav-item ${activePage === "returns" ? "active" : ""}`} onClick={() => handleItemClick("returns")}>
            <img src="/icons/Group 45708.svg" alt="مرجوعی" className="nav-icon" />
            <span className="nav-text">مرجوعی</span>
          </div>
        </div>

        {/* راهنما Category */}
        <div className="nav-category">
          <div className="category-header">
            <span className="category-dot">•</span>
            <span className="category-title">راهنما</span>
          </div>
          
          <div className={`nav-item ${activePage === "prohibited-products" ? "active" : ""}`} onClick={() => handleItemClick("prohibited-products")}>
            <span className="nav-text">کالاهای غیر مجاز</span>
          </div>
        </div>

        {/* پشتیبانی Category */}
        <div className="nav-category">
          <div className="category-header">
            <span className="category-dot">•</span>
            <span className="category-title">پشتیبانی</span>
          </div>
          
          <div className={`nav-item ${activePage === "support-request" ? "active" : ""}`} onClick={() => handleItemClick("support-request")}>
            <span className="nav-text">درخواست پشتیبانی</span>
          </div>
        </div>
      </nav>
    </div>
    );
}
