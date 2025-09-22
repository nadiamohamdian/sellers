import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

type PersonTab = "natural" | "legal";

const SignupPage: React.FC = () => {
  const [tab, setTab] = useState<PersonTab>("natural");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signup/email");
  };

  const naturalForm = useMemo(
    () => (
      <>
        <div className="sp-field">
          <label htmlFor="n-username" className="sp-field__label">نام کاربری</label>
          <input id="n-username" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="n-firstname" className="sp-field__label">نام</label>
          <input id="n-firstname" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="n-lastname" className="sp-field__label">نام خانوادگی</label>
          <input id="n-lastname" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="n-display" className="sp-field__label">نام نمایشی</label>
          <input id="n-display" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="n-birth" className="sp-field__label">تاریخ تولد</label>
          <input id="n-birth" type="text" className="sp-input" placeholder="mm/dd/yyyy" />
        </div>
        <div className="sp-field">
          <label htmlFor="n-gender" className="sp-field__label">جنسیت</label>
          <select id="n-gender" className="sp-input">
            <option value="">انتخاب کنید</option>
            <option value="female">زن</option>
            <option value="male">مرد</option>
          </select>
        </div>
      </>
    ),
    []
  );

  const legalForm = useMemo(
    () => (
      <>
        <div className="sp-field">
          <label htmlFor="l-username" className="sp-field__label">نام کاربری</label>
          <input id="l-username" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="l-company" className="sp-field__label">نام شرکت</label>
          <input id="l-company" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="l-lastname" className="sp-field__label">نام خانوادگی</label>
          <input id="l-lastname" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="l-nid" className="sp-field__label">شناسه ملی شرکت</label>
          <input id="l-nid" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="l-display" className="sp-field__label">نام نمایشی</label>
          <input id="l-display" type="text" className="sp-input" />
        </div>
        <div className="sp-field">
          <label htmlFor="l-birth" className="sp-field__label">تاریخ تولد</label>
          <input id="l-birth" type="text" className="sp-input" placeholder="mm/dd/yyyy" />
        </div>
        <div className="sp-field">
          <label htmlFor="l-gender" className="sp-field__label">جنسیت</label>
          <select id="l-gender" className="sp-input">
            <option value="">انتخاب کنید</option>
            <option value="female">زن</option>
            <option value="male">مرد</option>
          </select>
        </div>
      </>
    ),
    []
  );

  return (
    <div className="sp-layout">
      {/* Mobile Menu Button */}
      <button 
        className="sp-mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside className={`sp-sidebar sp-sidebar--blurred ${sidebarOpen ? 'sp-sidebar--open' : ''}`}>
        <button 
          className="sp-sidebar__close-btn"
          onClick={() => setSidebarOpen(false)}
        >
          ×
        </button>
        <div className="sp-sidebar__header">
          <div className="sp-sidebar__avatar">
            <img src="/icons/Group 45650.svg" alt="User" className="sp-sidebar__avatar-icon" />
            <div className="sp-sidebar__badge">24</div>
          </div>
          <span className="sp-sidebar__name">نام فروشنده</span>
        </div>
        
        <nav className="sp-sidebar__nav">
          <div className="sp-sidebar__section">
            <h3 className="sp-sidebar__section-title">کالا</h3>
            <ul className="sp-sidebar__list">
              <li className="sp-sidebar__item sp-sidebar__item--active">
                <img src="/icons/Group 45698.svg" alt="Dashboard" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">پیشخوان</span>
              </li>
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45699.svg" alt="Search" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">جستجو و ثبت کالا</span>
              </li>
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45700.svg" alt="Manage" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">مدیریت کالا و افزودن تنوع</span>
              </li>
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45701.svg" alt="Pricing" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">مدیریت تنوع و قیمت گذاری</span>
              </li>
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45702.svg" alt="Inventory" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">گزارش موجودی کالا</span>
              </li>
            </ul>
          </div>

          <div className="sp-sidebar__section">
            <h3 className="sp-sidebar__section-title">سفارش‌ها</h3>
            <ul className="sp-sidebar__list">
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45703.svg" alt="Orders" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">مدیریت سفارشات جاری</span>
              </li>
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45704.svg" alt="History" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">تاریخچه سفارشات</span>
              </li>
            </ul>
          </div>

          <div className="sp-sidebar__section">
            <h3 className="sp-sidebar__section-title">مالی</h3>
            <ul className="sp-sidebar__list">
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45705.svg" alt="Invoices" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">صورتحساب ها</span>
              </li>
            </ul>
          </div>

          <div className="sp-sidebar__section">
            <h3 className="sp-sidebar__section-title">تحلیل عملکرد</h3>
            <ul className="sp-sidebar__list">
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45707.svg" alt="Sales" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">فروش و درآمد</span>
              </li>
              <li className="sp-sidebar__item">
                <img src="/icons/Group 45708.svg" alt="Returns" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">مرجوعی</span>
              </li>
            </ul>
          </div>

          <div className="sp-sidebar__section">
            <h3 className="sp-sidebar__section-title">راهنما</h3>
            <ul className="sp-sidebar__list">
              <li className="sp-sidebar__item">
                <img src="/icons/Vector.svg" alt="Warning" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">کالاهای غیر مجاز</span>
              </li>
            </ul>
          </div>

          <div className="sp-sidebar__section">
            <h3 className="sp-sidebar__section-title">پشتیبانی</h3>
            <ul className="sp-sidebar__list">
              <li className="sp-sidebar__item">
                <img src="/icons/Layer_1.svg" alt="Support" className="sp-sidebar__icon" />
                <span className="sp-sidebar__text">درخواست پشتیبانی</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="sp-main">

        {/* Content */}
        <div className="sp-content">
          {/* Stepper */}
          <section className="sp-stepper">
            <div className="sp-stepper__item sp-stepper__item--active">
              <div className="sp-stepper__icon">
                <img src="/icons/PROfile.svg" alt="Profile" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">پروفایل</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Vector (1).svg" alt="Email" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">تایید ایمیل</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Group.svg" alt="Contract" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">ارسال قرارداد</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Vector (2).svg" alt="Bank" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">ثبت شماره حساب</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Vector (3).svg" alt="Docs" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">ارسال مدارک</span>
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="sp-grid">
            {/* Left Column - Form */}
            <section className="sp-form">
              <h2 className="sp-form__title">اطلاعات کاربری شما</h2>
              <div className="sp-tabs">
                <button
                  className={`sp-tab-haghighi ${tab === "natural" ? "active" : ""}`}
                  onClick={() => setTab("natural")}
                >
                  حقیقی
                </button>
                <button
                  className={`sp-tab-hoghooghi ${tab === "legal" ? "active" : ""}`}
                  onClick={() => setTab("legal")}
                >
                  حقوقی
                </button>
              </div>

              <form className="sp-form-fields" onSubmit={handleSubmit}>
                <div className="sp-fields-grid">
                  {tab === "natural" ? naturalForm : legalForm}
                </div>

                <div className="sp-divider"></div>
                <div className="sp-field">
                  <label htmlFor="bio" className="sp-field__label">متن بیوگرافی</label>
                  <textarea id="bio" className="sp-textarea" rows={5} />
                </div>

                <button type="submit" className="sp-btn-primary">
                  <span className="sp-btn__icon">✓</span>
                  ثبت اطلاعات
                </button>
              </form>
            </section>

            {/* Right Column - Uploads */}
            <aside className="sp-uploads">
              <div className="sp-banner">
                <div className="sp-avatar"></div>
              </div>

              <div className="sp-upload-tiles">
                <div className="sp-upload-tile">
                  <span className="sp-upload-tile__title">آپلود لوگو</span>
                  <span className="sp-upload-tile__hint">180 × 180</span>
                </div>
                <div className="sp-upload-tile">
                  <span className="sp-upload-tile__title">آپلود بنر بزرگ</span>
                  <span className="sp-upload-tile__hint">1280 × 380</span>
                </div>
              </div>

              <div className="sp-upload-actions">
                <button className="sp-soft-btn">تغییر رمز عبور</button>
                <button className="sp-soft-btn">تغییر شماره موبایل</button>
              </div>
            </aside>
        </div>
      </div>
      </main>
    </div>
  );
};

export default SignupPage;