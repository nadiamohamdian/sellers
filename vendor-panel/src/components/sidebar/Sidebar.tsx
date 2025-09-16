import React from "react";

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
        <div className="seller-name clickable">
          <span className="seller-text">نام فروشنده</span>
          <div className="header-icons">
            <div className="small-icon collapse-icon" onClick={toggleSidebar}>
              <img src="/icons/Vector (1).svg" alt="بستن" />
            </div>
            <div className="small-icon message-icon" onClick={showMessages}>
              <img src="/icons/Group 45699.svg" alt="پیام‌ها" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">23</span>
                        </div>
                        </div>
                    </div>
          <div className="profile-icon">
            <img src="/icons/Vector.svg" alt="پروفایل" />
                    </div>
                </div>
                </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <div className={`nav-item ${activePage === "dashboard" ? "active" : ""}`} onClick={() => handleItemClick("dashboard")}>
          <span className="nav-icon">
            <img src="/icons/Group 45701.svg" alt="پیشخوان" />
          </span>
          <span className="nav-text">پیشخوان</span>
                    </div>

        <div className="nav-category">
          <div className="category-header">کالا</div>
          <div className={`nav-item ${activePage === "search-product" ? "active" : ""}`} onClick={() => handleItemClick("search-product")}>
            <span className="nav-icon">
              <img src="/icons/Group 45702.svg" alt="جستجو و ثبت کالا" />
            </span>
            <span className="nav-text">جستجو و ثبت کالا</span>
          </div>
          <div className={`nav-item ${activePage === "manage-product" ? "active" : ""}`} onClick={() => handleItemClick("manage-product")}>
            <span className="nav-icon">
              <img src="/icons/Group 45703.svg" alt="مدیریت کالا" />
            </span>
            <span className="nav-text">مدیریت کالا و افزودن تنوع</span>
          </div>
          <div className={`nav-item ${activePage === "manage-variety" ? "active" : ""}`} onClick={() => handleItemClick("manage-variety")}>
            <span className="nav-icon">
              <img src="/icons/Group 45704.svg" alt="مدیریت تنوع" />
            </span>
            <span className="nav-text">مدیریت تنوع و قیمت گذاری</span>
          </div>
          <div className={`nav-item ${activePage === "inventory-report" ? "active" : ""}`} onClick={() => handleItemClick("inventory-report")}>
            <span className="nav-icon">
              <img src="/icons/Group 45705.svg" alt="گزارش موجودی" />
            </span>
            <span className="nav-text">گزارش موجودی کالا</span>
                        </div>
                    </div>

        <div className="nav-category">
          <div className="category-header">سفارش ها</div>
          <div className={`nav-item ${activePage === "current-orders" ? "active" : ""}`} onClick={() => handleItemClick("current-orders")}>
            <span className="nav-icon">
              <img src="/icons/Group 45707.svg" alt="سفارشات جاری" />
            </span>
            <span className="nav-text">مدیریت سفارشات جاری</span>
          </div>
          <div className={`nav-item ${activePage === "order-history" ? "active" : ""}`} onClick={() => handleItemClick("order-history")}>
            <span className="nav-icon">
              <img src="/icons/Group 45708.svg" alt="تاریخچه سفارشات" />
            </span>
            <span className="nav-text">تاریخچه سفارشات</span>
                        </div>
                    </div>

        <div className="nav-category">
          <div className="category-header">مالی</div>
          <div className={`nav-item ${activePage === "invoices" ? "active" : ""}`} onClick={() => handleItemClick("invoices")}>
            <span className="nav-icon">
              <img src="/icons/Vector (1).svg" alt="صورتحساب ها" />
            </span>
            <span className="nav-text">صورتحساب ها</span>
          </div>
          <div className={`nav-item ${activePage === "performance-analysis" ? "active" : ""}`} onClick={() => handleItemClick("performance-analysis")}>
            <span className="nav-icon">
              <img src="/icons/Vector (2).svg" alt="تحلیل عملکرد" />
            </span>
            <span className="nav-text">تحلیل عملکرد</span>
          </div>
          <div className={`nav-item ${activePage === "sales-revenue" ? "active" : ""}`} onClick={() => handleItemClick("sales-revenue")}>
            <span className="nav-icon">
              <img src="/icons/Vector (3).svg" alt="فروش و درآمد" />
            </span>
            <span className="nav-text">فروش و درآمد</span>
          </div>
          <div className={`nav-item ${activePage === "returns" ? "active" : ""}`} onClick={() => handleItemClick("returns")}>
            <span className="nav-icon">
              <img src="/icons/Vector (4).svg" alt="مرجوعی" />
            </span>
            <span className="nav-text">مرجوعی</span>
                        </div>
                    </div>

        <div className="nav-category">
          <div className="category-header">راهنما</div>
          <div className={`nav-item ${activePage === "training-center" ? "active" : ""}`} onClick={() => handleItemClick("training-center")}>
            <span className="nav-icon">
              <img src="/icons/Layer_1.svg" alt="مرکز آموزش" />
            </span>
            <span className="nav-text">مرکز آموزش فروشندگان</span>
          </div>
          <div className={`nav-item ${activePage === "prohibited-products" ? "active" : ""}`} onClick={() => handleItemClick("prohibited-products")}>
            <span className="nav-icon">
              <img src="/icons/Layer_1 (1).svg" alt="کالاهای غیر مجاز" />
            </span>
            <span className="nav-text">کالاهای غیر مجاز</span>
                        </div>
                    </div>

        <div className="nav-category">
          <div className="category-header">پشتیبانی</div>
          <div className={`nav-item ${activePage === "support-request" ? "active" : ""}`} onClick={() => handleItemClick("support-request")}>
            <span className="nav-icon">
              <img src="/icons/Layer_1 (2).svg" alt="پشتیبانی" />
            </span>
            <span className="nav-text">درخواست پشتیبانی</span>
                        </div>
                    </div>
      </nav>
            </div>
    );
}
