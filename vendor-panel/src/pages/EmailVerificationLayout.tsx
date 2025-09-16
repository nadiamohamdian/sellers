import React, { useState, useEffect } from "react";
import "./EmailVerificationLayout.css";

interface HeaderContent {
  type: "text" | "avatar" | "icon";
  value?: string;
  src?: string;
  size?: number;
  bg?: string;
  shadow?: string;
  badge?: number;
  badgeColor?: string;
  style?: {
    weight?: number;
    size?: number;
  };
}

interface SidebarItem {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface EmailVerificationLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  modeToggle?: boolean;
}

const EmailVerificationLayout: React.FC<EmailVerificationLayoutProps> = ({ 
  children, 
  pageTitle = "تأیید ایمیل",
  modeToggle = true 
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const headerContent: { right: HeaderContent[]; left: HeaderContent[] } = {
    right: [
      { 
        type: "text", 
        value: "نام فروشنده", 
        style: { weight: 700, size: 20 } 
      },
      { 
        type: "avatar", 
        size: 40, 
        bg: "brand", 
        shadow: "glowBrand" 
      }
    ],
    left: [
      { type: "icon", src: "/img/placeholder-upload.svg" },
      { 
        type: "icon", 
        src: "/img/placeholder-bell.svg", 
        badge: 24, 
        badgeColor: "brand" 
      }
    ]
  };

  const sidebarSections: SidebarSection[] = [
    {
      title: "پیشخوان",
      items: [
        { icon: "/img/placeholder-dashboard.svg", label: "پیشخوان", href: "/vendor" }
      ]
    },
    {
      title: "کالا",
      items: [
        { icon: "/img/placeholder-search.svg", label: "جستجو و ثبت کالا", href: "/vendor/products/search" },
        { icon: "/img/placeholder-variant.svg", label: "مدیریت کالا و افزودن تنوع", href: "/vendor/products/manage" },
        { icon: "/img/placeholder-pricing.svg", label: "مدیریت تنوع و قیمت گذاری", href: "/vendor/products/pricing" },
        { icon: "/img/placeholder-inventory.svg", label: "گزارش موجودی کالا", href: "/vendor/products/stock" }
      ]
    },
    {
      title: "سفارش‌ها",
      items: [
        { icon: "/img/placeholder-orders.svg", label: "مدیریت سفارشات جاری", href: "/vendor/orders/open" },
        { icon: "/img/placeholder-history.svg", label: "تاریخچه سفارشات", href: "/vendor/orders/history" }
      ]
    },
    {
      title: "مالی",
      items: [
        { icon: "/img/placeholder-billing.svg", label: "صورتحساب ها", href: "/vendor/billing" }
      ]
    },
    {
      title: "تحلیل عملکرد",
      items: [
        { icon: "/img/placeholder-analytics.svg", label: "فروش و درآمد", href: "/vendor/analytics" },
        { icon: "/img/placeholder-return.svg", label: "مرجوعی", href: "/vendor/returns" }
      ]
    },
    {
      title: "راهنما",
      items: [
        { icon: "/img/placeholder-academy.svg", label: "مرکز آموزش فروشندگان", href: "/vendor/academy" },
        { icon: "/img/placeholder-restricted.svg", label: "کالاهای غیرمجاز", href: "/vendor/restricted" }
      ]
    },
    {
      title: "پشتیبانی",
      items: [
        { icon: "/img/placeholder-support.svg", label: "درخواست پشتیبانی", href: "/vendor/support" }
      ]
    }
  ];

  return (
    <div className="evl-layout-shell">
      {/* Header */}
      <header className="evl-layout-header">
        <div className="evl-layout-header__content">
          {/* Right side content */}
          <div className="evl-layout-header__right">
            {headerContent.right.map((item, index) => (
              <div key={index} className="evl-layout-header__item">
                {item.type === "text" && (
                  <span 
                    className="evl-layout-header__text"
                    style={{
                      fontWeight: item.style?.weight,
                      fontSize: item.style?.size
                    }}
                  >
                    {item.value}
                  </span>
                )}
                {item.type === "avatar" && (
                  <div 
                    className={`evl-layout-header__avatar evl-layout-header__avatar--${item.bg}`}
                    style={{
                      width: item.size,
                      height: item.size,
                      boxShadow: item.shadow === "glowBrand" ? "var(--shadow-glow-brand)" : undefined
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Left side content */}
          <div className="evl-layout-header__left">
            {headerContent.left.map((item, index) => (
              <div key={index} className="evl-layout-header__item">
                {item.type === "icon" && (
                  <button className="evl-layout-header__icon-btn">
                    <img src={item.src} alt="" className="evl-layout-header__icon" />
                    {item.badge && (
                      <span className={`evl-layout-header__badge evl-layout-header__badge--${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                  </button>
                )}
              </div>
            ))}
            {modeToggle && (
              <button 
                className="evl-layout-header__mode-toggle"
                data-mode-toggle
                onClick={toggleDarkMode}
                aria-label={darkMode ? "روشن کردن تم روشن" : "روشن کردن تم تاریک"}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="evl-layout-body">
        {/* Sidebar */}
        <aside className={`vp-sidebar ${sidebarCollapsed ? "evl-sidebar--collapsed" : ""}`}>
          <div className="evl-sidebar__header">
            <div className="evl-sidebar__avatar" />
          </div>
          
          <nav className="evl-sidebar__nav">
            {sidebarSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="evl-sidebar__section">
                <h3 className="vp-sidebar__section-title">{section.title}</h3>
                <ul className="evl-sidebar__list">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="evl-sidebar__item">
                      <a 
                        href={item.href} 
                        className={`vp-nav-item ${item.active ? "vp-nav-item--active" : ""}`}
                      >
                        <img src={item.icon} alt="" className="vp-nav-item__icon" />
                        {!sidebarCollapsed && (
                          <span className="evl-sidebar__label">{item.label}</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <button 
            className="evl-sidebar__toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            aria-label={sidebarCollapsed ? "باز کردن منو" : "بستن منو"}
          >
            {sidebarCollapsed ? "→" : "←"}
          </button>
        </aside>

        {/* Main Content */}
        <main className="evl-layout-main">
          <div className="evl-layout-content">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default EmailVerificationLayout;
