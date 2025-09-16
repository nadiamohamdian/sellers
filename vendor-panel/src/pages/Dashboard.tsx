import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar__header">
          <div className="dashboard-sidebar__avatar">
            <img src="/icons/Group 45650.svg" alt="User" className="dashboard-sidebar__avatar-icon" />
            <div className="dashboard-sidebar__badge">20</div>
          </div>
          <span className="dashboard-sidebar__name">نام فروشنده</span>
        </div>
        
        <nav className="dashboard-sidebar__nav">
          <div className="dashboard-sidebar__section">
            <h3 className="dashboard-sidebar__section-title">کالا</h3>
            <ul className="dashboard-sidebar__list">
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45698.svg" alt="Search" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">جستجو و ثبت کالا</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45699.svg" alt="Manage" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">مدیریت کالا و افزودن تنوع</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45700.svg" alt="Pricing" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">مدیریت تنوع و قیمت گذاری</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45701.svg" alt="Inventory" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">گزارش موجودی کالا</span>
              </li>
            </ul>
          </div>

          <div className="dashboard-sidebar__section">
            <h3 className="dashboard-sidebar__section-title">سفارش‌ها</h3>
            <ul className="dashboard-sidebar__list">
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45703.svg" alt="Orders" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">مدیریت سفارشات جاری</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45704.svg" alt="History" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">تاریخچه سفارشات</span>
              </li>
            </ul>
          </div>

          <div className="dashboard-sidebar__section">
            <h3 className="dashboard-sidebar__section-title">مالی</h3>
            <ul className="dashboard-sidebar__list">
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45705.svg" alt="Invoices" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">صورتحساب ها</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45707.svg" alt="Analytics" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">تحلیل عملکرد</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45708.svg" alt="Sales" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">فروش و درآمد</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Vector.svg" alt="Returns" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">مرجوعی</span>
              </li>
            </ul>
          </div>

          <div className="dashboard-sidebar__section">
            <h3 className="dashboard-sidebar__section-title">راهنما</h3>
            <ul className="dashboard-sidebar__list">
              <li className="dashboard-sidebar__item">
                <img src="/icons/Layer_1.svg" alt="Academy" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">مرکز آموزش فروشندگان</span>
              </li>
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45698.svg" alt="Warning" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">کالاهای غیر مجاز</span>
              </li>
            </ul>
          </div>

          <div className="dashboard-sidebar__section">
            <h3 className="dashboard-sidebar__section-title">پشتیبانی</h3>
            <ul className="dashboard-sidebar__list">
              <li className="dashboard-sidebar__item">
                <img src="/icons/Group 45699.svg" alt="Support" className="dashboard-sidebar__icon" />
                <span className="dashboard-sidebar__text">درخواست پشتیبانی</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="dashboard-header__left">
            <img src="/icons/Group 45698.svg" alt="Document" className="dashboard-header__icon" />
            <img src="/icons/Group 45699.svg" alt="Mail" className="dashboard-header__icon dashboard-header__icon--badge" />
          </div>
          <div className="dashboard-header__right">
            <span className="dashboard-header__name">نام فروشنده</span>
            <img src="/icons/Group 45650.svg" alt="User" className="dashboard-header__avatar" />
          </div>
        </header>

        {/* Content */}
        <div className="dashboard-content">
          {/* Summary Cards */}
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <div className="dashboard-card__header">
                <h3 className="dashboard-card__title">فروخته شده</h3>
                <button className="dashboard-card__button">جزئیات</button>
              </div>
              <div className="dashboard-card__content">
                <div className="dashboard-card__value">۲۰ کالا</div>
                <div className="dashboard-card__change">+ ۳۰% نسبت به بازه قبل</div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card__header">
                <h3 className="dashboard-card__title">درآمد ناخالص</h3>
                <button className="dashboard-card__button">جزئیات</button>
              </div>
              <div className="dashboard-card__content">
                <div className="dashboard-card__value">۱۲۰,۵۸۶,۰۰۰ ریال</div>
                <div className="dashboard-card__change">+ ۳۰% نسبت به بازه قبل</div>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card__header">
                <h3 className="dashboard-card__title">سفارش و تعهد ارسال</h3>
                <button className="dashboard-card__button">جزئیات</button>
              </div>
              <div className="dashboard-card__content">
                <div className="dashboard-card__metrics">
                  <div className="dashboard-card__metric">
                    <span className="dashboard-card__metric-label">تعهد ارسال گذشته و امروز:</span>
                    <span className="dashboard-card__metric-value">10</span>
                  </div>
                  <div className="dashboard-card__metric">
                    <span className="dashboard-card__metric-label">تعهد ارسال فردا به بعد:</span>
                    <span className="dashboard-card__metric-value">7</span>
                  </div>
                  <div className="dashboard-card__metric">
                    <span className="dashboard-card__metric-label">سفارش‌های امروز:</span>
                    <span className="dashboard-card__metric-value">5</span>
                  </div>
                  <div className="dashboard-card__metric">
                    <span className="dashboard-card__metric-label">سفارشهای لغو شده:</span>
                    <span className="dashboard-card__metric-value">6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="dashboard-orders">
            <div className="dashboard-orders__header">
              <h3 className="dashboard-orders__title">آخرین سفارشات</h3>
              <button className="dashboard-orders__button">جزئیات</button>
            </div>
            <div className="dashboard-orders__table">
              {[
                { id: '25482', amount: '۵,۱۹۸,۳۶۵ ریال', date: '۱۴۰۳/۰۲/۱۰', time: '۲۱:۴۵' },
                { id: '25481', amount: '۶,۱۹۵,۲۵۸ ریال', date: '۱۴۰۳/۰۲/۱۰', time: '۲۱:۴۵' },
                { id: '25480', amount: '۵,۱۹۸,۳۶۵ ریال', date: '۱۴۰۳/۰۲/۱۰', time: '۲۱:۴۵' },
                { id: '25479', amount: '۶,۱۹۵,۲۵۸ ریال', date: '۱۴۰۳/۰۲/۱۰', time: '۲۱:۴۵' },
                { id: '25478', amount: '۵,۱۹۸,۳۶۵ ریال', date: '۱۴۰۳/۰۲/۱۰', time: '۲۱:۴۵' },
              ].map((order, index) => (
                <div key={order.id} className="dashboard-orders__row">
                  <div className="dashboard-orders__number">{index + 1}</div>
                  <div className="dashboard-orders__date">{order.date}</div>
                  <div className="dashboard-orders__time">{order.time}</div>
                  <div className="dashboard-orders__id">کد سفارش: {order.id}</div>
                  <div className="dashboard-orders__amount">{order.amount}</div>
                  <div className="dashboard-orders__arrow">←</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Chart */}
          <div className="dashboard-chart">
            <div className="dashboard-chart__header">
              <h3 className="dashboard-chart__title">روند فروش شما</h3>
              <button className="dashboard-chart__button">گزارش فروش</button>
            </div>
            <div className="dashboard-chart__content">
              <div className="dashboard-chart__placeholder">
                <p>نمودار فروش در اینجا نمایش داده می‌شود</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;