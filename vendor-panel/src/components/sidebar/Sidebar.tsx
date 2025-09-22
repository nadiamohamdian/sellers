import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import { ROUTES } from "../../routes/routes";

interface SidebarProps {
  activePage?: string;
  onPageChange?: (page: string) => void;
}

export default function Sidebar({ activePage = "dashboard", onPageChange }: SidebarProps) {
  const location = useLocation();
  
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
        <Link to={ROUTES.ownerInfo} className="sidebar-header-link">
          <div className="profile-section">
            <div className="profile-avatar">
              <img src="/icons/Group 45650.svg" alt="User Avatar" />
            </div>
            <div className="seller-name">نام فروشنده</div>
            <div className="profile-icons">
              <img src="/icons/mail.svg" alt="Mail" className="icon-small" />
              <img src="/icons/notification.svg" alt="Notification" className="icon-small" />
            </div>
          </div>
          <div className={`pill active-page ${location.pathname === ROUTES.ownerInfo ? 'current-active' : ''}`}>
            <img src="/icons/Group 45698.svg" alt="Dashboard" />
            پیشخوان
          </div>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        {/* جستجو و ثبت کالا Category */}
        <div className="sidebar-section">جستجو و ثبت کالا</div>
        <ul className="sidebar-list">
          <li className={`sidebar-item ${activePage === "search-product" ? "active" : ""}`} onClick={() => handleItemClick("search-product")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45699.svg" alt="جستجو و ثبت کالا" />
            </span>
            <span className="label">جستجو و ثبت کالا</span>
          </li>
          
          <li className={`sidebar-item ${activePage === "manage-product" ? "active" : ""}`} onClick={() => handleItemClick("manage-product")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45702.svg" alt="مدیریت کالا" />
            </span>
            <span className="label">مدیریت کالا و افزودن تنوع</span>
          </li>
          
          <li className={`sidebar-item ${activePage === "manage-variety" ? "active" : ""}`} onClick={() => handleItemClick("manage-variety")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45703.svg" alt="مدیریت تنوع" />
            </span>
            <span className="label">مدیریت تنوع و قیمت گذاری</span>
          </li>
          
          <li className={`sidebar-item ${activePage === "inventory-report" ? "active" : ""}`} onClick={() => handleItemClick("inventory-report")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45704.svg" alt="گزارش موجودی" />
            </span>
            <span className="label">گزارش موجودی کالا</span>
          </li>
        </ul>

        {/* سفارش ها Category */}
        <div className="sidebar-section">سفارش ها</div>
        <ul className="sidebar-list">
          <li className={`sidebar-item ${activePage === "current-orders" ? "active" : ""}`} onClick={() => handleItemClick("current-orders")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45705.svg" alt="سفارشات جاری" />
            </span>
            <span className="label">مدیریت سفارشات جاری</span>
          </li>
          
          <li className={`sidebar-item ${activePage === "order-history" ? "active" : ""}`} onClick={() => handleItemClick("order-history")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45706.svg" alt="تاریخچه سفارشات" />
            </span>
            <span className="label">تاریخچه سفارشات</span>
          </li>
        </ul>

        {/* مالی Category */}
        <div className="sidebar-section">مالی</div>
        <ul className="sidebar-list">
          <li className={`sidebar-item ${activePage === "invoices" ? "active" : ""}`} onClick={() => handleItemClick("invoices")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45707.svg" alt="صورتحساب ها" />
            </span>
            <span className="label">صورتحساب ها</span>
          </li>
        </ul>

        {/* تحلیل عملکرد Category */}
        <div className="sidebar-section">تحلیل عملکرد</div>
        <ul className="sidebar-list">
          <li className={`sidebar-item ${activePage === "sales-revenue" ? "active" : ""}`} onClick={() => handleItemClick("sales-revenue")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45708.svg" alt="فروش و درآمد" />
            </span>
            <span className="label">فروش و درآمد</span>
          </li>
          
          <li className={`sidebar-item ${activePage === "returns" ? "active" : ""}`} onClick={() => handleItemClick("returns")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45709.svg" alt="مرجوعی" />
            </span>
            <span className="label">مرجوعی</span>
          </li>
        </ul>

        {/* راهنما Category */}
        <div className="sidebar-section">راهنما</div>
        <ul className="sidebar-list">
          <li className={`sidebar-item ${activePage === "training-center" ? "active" : ""}`} onClick={() => handleItemClick("training-center")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45710.svg" alt="مرکز آموزش" />
            </span>
            <span className="label">مرکز آموزش فروشندگان</span>
          </li>
          
          <li className={`sidebar-item ${activePage === "prohibited-products" ? "active" : ""}`} onClick={() => handleItemClick("prohibited-products")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45711.svg" alt="کالاهای غیر مجاز" />
            </span>
            <span className="label">کالاهای غیر مجاز</span>
          </li>
        </ul>

        {/* اطلاعات Category */}
        <div className="sidebar-section">اطلاعات</div>
        <ul className="sidebar-list">
          <li className={`sb-item ${location.pathname === ROUTES.ownerInfo ? "active" : ""}`}>
            <Link to={ROUTES.ownerInfo} className="no-underline w-full">
              <span className="sb-ic" aria-hidden="true">
                <img src="/icons/Group 45698.svg" alt="اطلاعات مالک کسب و کار" />
              </span>
              <span className="sb-lb">اطلاعات مالک کسب و کار</span>
            </Link>
          </li>
          
          <li className={`sb-item ${location.pathname === ROUTES.storeInfo ? "active" : ""}`}>
            <Link to={ROUTES.storeInfo} className="no-underline w-full">
              <span className="sb-ic" aria-hidden="true">
                <img src="/icons/Group 45699.svg" alt="اطلاعات فروشگاه" />
              </span>
              <span className="sb-lb">اطلاعات فروشگاه</span>
            </Link>
          </li>
          
          <li className={`sb-item ${location.pathname === ROUTES.addresses ? "active" : ""}`}>
            <Link to={ROUTES.addresses} className="no-underline w-full">
              <span className="sb-ic" aria-hidden="true">
                <img src="/icons/Group 45701.svg" alt="آدرس‌ها" />
              </span>
              <span className="sb-lb">آدرس‌ها</span>
            </Link>
          </li>
          
          <li className={`sb-item ${location.pathname === ROUTES.finance ? "active" : ""}`}>
            <Link to={ROUTES.finance} className="no-underline w-full">
              <span className="sb-ic" aria-hidden="true">
                <img src="/icons/Group 45702.svg" alt="مالی" />
              </span>
              <span className="sb-lb">مالی</span>
            </Link>
          </li>
          
          <li className={`sb-item ${location.pathname === ROUTES.documents ? "active" : ""}`}>
            <Link to={ROUTES.documents} className="no-underline w-full">
              <span className="sb-ic" aria-hidden="true">
                <img src="/icons/Group 45703.svg" alt="مدارک" />
              </span>
              <span className="sb-lb">مدارک</span>
            </Link>
          </li>

          <li className={`sb-item ${location.pathname === ROUTES.contracts ? "active" : ""}`}>
            <Link to={ROUTES.contracts} className="no-underline w-full">
              <span className="sb-ic" aria-hidden="true">
                <img src="/icons/Group 45704.svg" alt="قراردادها" />
              </span>
              <span className="sb-lb">قراردادها</span>
            </Link>
          </li>
        </ul>

        {/* پشتیبانی Category */}
        <div className="sidebar-section">پشتیبانی</div>
        <ul className="sidebar-list">
          <li className={`sidebar-item ${activePage === "support-request" ? "active" : ""}`} onClick={() => handleItemClick("support-request")}>
            <span className="icon" aria-hidden="true">
              <img src="/icons/Group 45712.svg" alt="درخواست پشتیبانی" />
            </span>
            <span className="label">درخواست پشتیبانی</span>
          </li>
        </ul>
      </nav>
    </div>
    );
}
