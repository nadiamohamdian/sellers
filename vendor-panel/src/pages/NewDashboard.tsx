import React, { useState } from 'react';
import './NewDashboard.css';

const NewDashboard: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  return (
    <div className="nd-layout">
      {/* Header */}
      <header className="nd-header">
        <div className="nd-header__left">
          <span className="nd-header__page">main page 10</span>
        </div>
        <div className="nd-header__right">
          <div className="nd-header__icons">
            <div className="nd-header__icon nd-header__icon--notification">
              <img src="/icons/Group 45698.svg" alt="Notification" />
              <span className="nd-header__badge">3</span>
            </div>
            <div className="nd-header__icon">
              <img src="/icons/Group 45699.svg" alt="Message" />
            </div>
          </div>
          <div className="nd-header__code-icon">
            <span>&lt;/&gt;</span>
          </div>
          <span className="nd-header__name">نام فروشنده</span>
          <div className="nd-header__avatar">
            <img src="/icons/Group 45650.svg" alt="User" />
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="nd-sidebar">
        <div className="nd-sidebar__header">
          <button 
            className={`nd-sidebar__item nd-sidebar__item--active`}
            onClick={() => handlePageChange('dashboard')}
          >
            <img src="/icons/Group 45698.svg" alt="Dashboard" className="nd-sidebar__icon" />
            <span className="nd-sidebar__text">پیشخوان</span>
          </button>
        </div>

        <nav className="nd-sidebar__nav">
          <div className="nd-sidebar__section">
            <h3 className="nd-sidebar__section-title">کالا</h3>
            <ul className="nd-sidebar__list">
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45699.svg" alt="Search" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">جستجو و ثبت کالا</span>
              </li>
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45700.svg" alt="Manage" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">مدیریت کالا و افزودن تنوع</span>
              </li>
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45701.svg" alt="Pricing" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">مدیریت تنوع و قیمت گذاری</span>
              </li>
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45702.svg" alt="Inventory" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">گزارش موجودی کالا</span>
              </li>
            </ul>
          </div>

          <div className="nd-sidebar__section">
            <h3 className="nd-sidebar__section-title">سفارش‌ها</h3>
            <ul className="nd-sidebar__list">
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45703.svg" alt="Orders" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">مدیریت سفارشات جاری</span>
              </li>
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45704.svg" alt="History" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">تاریخچه سفارشات</span>
              </li>
            </ul>
          </div>

          <div className="nd-sidebar__section">
            <h3 className="nd-sidebar__section-title">مالی</h3>
            <ul className="nd-sidebar__list">
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45705.svg" alt="Invoices" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">صورتحساب ها</span>
              </li>
            </ul>
          </div>

          <div className="nd-sidebar__section">
            <h3 className="nd-sidebar__section-title">تحلیل عملکرد</h3>
            <ul className="nd-sidebar__list">
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45707.svg" alt="Sales" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">فروش و درآمد</span>
              </li>
              <li className="nd-sidebar__item">
                <img src="/icons/Group 45708.svg" alt="Returns" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">مرجوعی</span>
              </li>
            </ul>
          </div>

          <div className="nd-sidebar__section">
            <h3 className="nd-sidebar__section-title">راهنما</h3>
            <ul className="nd-sidebar__list">
              <li className="nd-sidebar__item">
                <img src="/icons/Vector.svg" alt="Academy" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">مرکز آموزش فروشندگان</span>
              </li>
              <li className="nd-sidebar__item">
                <img src="/icons/Layer_1.svg" alt="Restricted" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">کالاهای غیرمجاز</span>
              </li>
            </ul>
          </div>

          <div className="nd-sidebar__section">
            <h3 className="nd-sidebar__section-title">پشتیبانی</h3>
            <ul className="nd-sidebar__list">
              <li className="nd-sidebar__item">
                <img src="/icons/Layer_1.svg" alt="Support" className="nd-sidebar__icon" />
                <span className="nd-sidebar__text">درخواست پشتیبانی</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="nd-main">
        <div className="nd-content">
          {/* Summary Cards */}
          <div className="nd-summary-cards">
            <div className="nd-card">
              <div className="nd-card__header">
                <h3 className="nd-card__title">درآمد نا خالص</h3>
                <button className="nd-card__button">جزئیات</button>
              </div>
              <div className="nd-card__value">۱۲۰,۵۸۶,۰۰۰ ریال</div>
              <div className="nd-card__trend">+ ۳۰٪ نسبت به بازه قبل</div>
            </div>

            <div className="nd-card">
              <div className="nd-card__header">
                <h3 className="nd-card__title">فروخته شده</h3>
                <button className="nd-card__button">جزئیات</button>
              </div>
              <div className="nd-card__value">۲۰ کالا</div>
              <div className="nd-card__trend">+ ۳۰٪ نسبت به بازه قبل</div>
            </div>

            <div className="nd-card">
              <div className="nd-card__header">
                <h3 className="nd-card__title"></h3>
                <button className="nd-card__button">جزئیات</button>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="nd-orders-table">
            <div className="nd-table-header">
              <h3 className="nd-table-title">آخرین سفارشات</h3>
              <button className="nd-table-button">جزئیات</button>
            </div>
            <div className="nd-table-content">
              <div className="nd-table-row">
                <div className="nd-table-cell">۱</div>
                <div className="nd-table-cell">۱۴۰۳/۰۲/۱۰</div>
                <div className="nd-table-cell">۲۱:۴۵</div>
                <div className="nd-table-cell">کد سفارش : ۲۵۴۸۲</div>
                <div className="nd-table-cell">۵,۱۹۸,۳۶۵ ریال</div>
                <div className="nd-table-cell">←</div>
              </div>
              <div className="nd-table-row">
                <div className="nd-table-cell">۲</div>
                <div className="nd-table-cell">۱۴۰۳/۰۲/۱۰</div>
                <div className="nd-table-cell">۲۱:۴۵</div>
                <div className="nd-table-cell">کد سفارش : ۲۵۴۸۲</div>
                <div className="nd-table-cell">۵,۱۹۸,۳۶۵ ریال</div>
                <div className="nd-table-cell">←</div>
              </div>
              <div className="nd-table-row">
                <div className="nd-table-cell">۳</div>
                <div className="nd-table-cell">۱۴۰۳/۰۲/۱۰</div>
                <div className="nd-table-cell">۲۱:۴۵</div>
                <div className="nd-table-cell">کد سفارش : ۲۵۴۸۲</div>
                <div className="nd-table-cell">۵,۱۹۸,۳۶۵ ریال</div>
                <div className="nd-table-cell">←</div>
              </div>
              <div className="nd-table-row">
                <div className="nd-table-cell">۴</div>
                <div className="nd-table-cell">۱۴۰۳/۰۲/۱۰</div>
                <div className="nd-table-cell">۲۱:۴۵</div>
                <div className="nd-table-cell">کد سفارش : ۲۵۴۸۲</div>
                <div className="nd-table-cell">۵,۱۹۸,۳۶۵ ریال</div>
                <div className="nd-table-cell">←</div>
              </div>
              <div className="nd-table-row">
                <div className="nd-table-cell">۵</div>
                <div className="nd-table-cell">۱۴۰۳/۰۲/۱۰</div>
                <div className="nd-table-cell">۲۱:۴۵</div>
                <div className="nd-table-cell">کد سفارش : ۲۵۴۸۲</div>
                <div className="nd-table-cell">۵,۱۹۸,۳۶۵ ریال</div>
                <div className="nd-table-cell">←</div>
              </div>
            </div>
          </div>

          {/* Orders and Shipping Commitment */}
          <div className="nd-commitment-card">
            <div className="nd-card__header">
              <h3 className="nd-card__title">سفارش و تعهد ارسال</h3>
            </div>
            <div className="nd-commitment-list">
              <div className="nd-commitment-item">
                <span className="nd-commitment-text">تعهد ارسال گذشته و امروز</span>
                <span className="nd-commitment-value">۱۰</span>
                <span className="nd-commitment-arrow">←</span>
              </div>
              <div className="nd-commitment-item">
                <span className="nd-commitment-text">تعهد ارسال فردا به بعد</span>
                <span className="nd-commitment-value">۷</span>
                <span className="nd-commitment-arrow">←</span>
              </div>
              <div className="nd-commitment-item">
                <span className="nd-commitment-text">سفارش های امروز</span>
                <span className="nd-commitment-value">۵</span>
                <span className="nd-commitment-arrow">←</span>
              </div>
              <div className="nd-commitment-item">
                <span className="nd-commitment-text">سفارش های لغو شده</span>
                <span className="nd-commitment-value">۴</span>
                <span className="nd-commitment-arrow">←</span>
              </div>
            </div>
          </div>

          {/* Sales Chart */}
          <div className="nd-sales-chart">
            <div className="nd-card__header">
              <h3 className="nd-card__title">روند فروش شما</h3>
            </div>
            <div className="nd-chart-placeholder">
              <div className="nd-chart-content">
                <div className="nd-chart-lines">
                  <div className="nd-chart-line nd-chart-line--blue"></div>
                  <div className="nd-chart-line nd-chart-line--light-blue"></div>
                </div>
                <div className="nd-chart-legend">
                  <div className="nd-legend-item">
                    <div className="nd-legend-color nd-legend-color--blue"></div>
                    <span>درآمد ناخالص (ریال)</span>
                  </div>
                  <div className="nd-legend-item">
                    <div className="nd-legend-color nd-legend-color--light-blue"></div>
                    <span>تعداد فروش شما</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewDashboard;
