import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

type PersonTab = "natural" | "legal";

const SignupPage: React.FC = () => {
  const [tab, setTab] = useState<PersonTab>("natural");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signup/email");
  };

  const naturalForm = useMemo(
    () => (
      <>
        <div className="sp-form-row">
          <div className="sp-field">
            <label htmlFor="n-username" className="sp-field__label">نام کاربری</label>
            <input id="n-username" type="text" className="sp-input" />
          </div>
          <div className="sp-field">
            <label htmlFor="n-firstname" className="sp-field__label">نام</label>
            <input id="n-firstname" type="text" className="sp-input" />
          </div>
        </div>
        <div className="sp-form-row">
          <div className="sp-field">
            <label htmlFor="n-lastname" className="sp-field__label">نام خانوادگی</label>
            <input id="n-lastname" type="text" className="sp-input" />
          </div>
          <div className="sp-field">
            <label htmlFor="n-display" className="sp-field__label">نام نمایشی</label>
            <input id="n-display" type="text" className="sp-input" />
          </div>
        </div>
        <div className="sp-form-row">
          <div className="sp-field">
            <label htmlFor="n-birth" className="sp-field__label">تاریخ تولد</label>
            <input id="n-birth" type="date" className="sp-input" />
          </div>
          <div className="sp-field">
            <label htmlFor="n-gender" className="sp-field__label">جنسیت</label>
            <select id="n-gender" className="sp-input">
              <option value="">انتخاب کنید</option>
              <option value="female">زن</option>
              <option value="male">مرد</option>
            </select>
          </div>
        </div>
        <div className="sp-form-divider" aria-hidden />
        <div className="sp-field">
          <label htmlFor="n-bio" className="sp-field__label">متن بیوگرافی</label>
          <textarea id="n-bio" className="sp-textarea" rows={5} />
        </div>
      </>
    ),
    []
  );

  const legalForm = useMemo(
    () => (
      <>
        <div className="sp-form-row">
          <div className="sp-field">
            <label htmlFor="l-username" className="sp-field__label">نام کاربری</label>
            <input id="l-username" type="text" className="sp-input" />
          </div>
          <div className="sp-field">
            <label htmlFor="l-company" className="sp-field__label">نام شرکت</label>
            <input id="l-company" type="text" className="sp-input" />
          </div>
        </div>
        <div className="sp-form-row">
          <div className="sp-field">
            <label htmlFor="l-nid" className="sp-field__label">شناسه ملی شرکت</label>
            <input id="l-nid" type="text" className="sp-input" />
          </div>
          <div className="sp-field">
            <label htmlFor="l-display" className="sp-field__label">نام نمایشی</label>
            <input id="l-display" type="text" className="sp-input" />
          </div>
        </div>
        <div className="sp-form-row">
          <div className="sp-field">
            <label htmlFor="l-industry" className="sp-field__label">زمینه فعالیت</label>
            <select id="l-industry" className="sp-input">
              <option value="">انتخاب کنید</option>
              <option value="cosmetics">آرایشی و بهداشتی</option>
              <option value="digital">کالای دیجیتال</option>
              <option value="tools">ابزار و یراق</option>
            </select>
          </div>
          <div className="sp-field"></div>
        </div>
        <div className="sp-form-divider" aria-hidden />
        <div className="sp-field">
          <label htmlFor="l-bio" className="sp-field__label">متن بیوگرافی</label>
          <textarea id="l-bio" className="sp-textarea" rows={5} />
        </div>
      </>
    ),
    []
  );

  return (
    <div className="sp-layout">
      {/* Sidebar */}
      <aside className="sp-sidebar sp-sidebar--blurred">
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
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Group 45698.svg" alt="Learn" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">آموزش</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Group 45699.svg" alt="Docs" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">ارسال مدارک</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Group 45700.svg" alt="Bank" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">ثبت شماره حساب</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Group 45701.svg" alt="Contract" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">ارسال قرارداد</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item">
              <div className="sp-stepper__icon">
                <img src="/icons/Group 45702.svg" alt="Email" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">تایید ایمیل</span>
            </div>
            <div className="sp-stepper__line"></div>
            <div className="sp-stepper__item sp-stepper__item--active">
              <div className="sp-stepper__icon">
                <img src="/icons/Group 45650.svg" alt="Profile" />
              </div>
              <div className="sp-stepper__dot"></div>
              <span className="sp-stepper__label">پروفایل</span>
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="sp-grid">
            {/* Left Column - Uploads */}
            <aside className="sp-uploads-card">
              <div className="sp-banner">
                <div className="sp-banner__bg"></div>
                <div className="sp-avatar">
                  <div className="sp-avatar__icon">👤</div>
                </div>
              </div>

              <div className="sp-upload-tiles">
                <div className="sp-upload-tile">
                  <div className="sp-upload-tile__icon">📤</div>
                  <span className="sp-upload-tile__title">آپلود بنر بزرگ</span>
                  <span className="sp-upload-tile__hint">۶۴۰ × ۳۶۰</span>
                </div>
                <div className="sp-upload-tile">
                  <div className="sp-upload-tile__icon">🖼️</div>
                  <span className="sp-upload-tile__title">آپلود لوگو</span>
                  <span className="sp-upload-tile__hint">۱۸۰ × ۱۸۰</span>
                </div>
              </div>

              <div className="sp-upload-actions">
                <button className="sp-btn sp-btn--soft">تغییر رمز عبور</button>
                <button className="sp-btn sp-btn--soft">تغییر شماره موبایل</button>
              </div>
            </aside>

            {/* Right Column - Form */}
            <section className="sp-form-card">
              <div className="sp-form__header">
                <h2 className="sp-form__title">اطلاعات کاربری شما</h2>
                <div className="sp-tabs">
                  <button
                    className={`sp-tab ${tab === "natural" ? "active" : ""}`}
                    onClick={() => setTab("natural")}
                  >
                    حقیقی
                  </button>
                  <button
                    className={`sp-tab ${tab === "legal" ? "active" : ""}`}
                    onClick={() => setTab("legal")}
                  >
                    حقوقی
                  </button>
                </div>
              </div>

              <form className="sp-form" onSubmit={handleSubmit}>
                {tab === "natural" ? naturalForm : legalForm}

                <div className="sp-form__actions">
                  <button type="submit" className="sp-btn sp-btn--primary">
                    <span className="sp-btn__icon">✓</span>
                    ثبت اطلاعات
                  </button>
                </div>
              </form>
            </section>
        </div>
      </div>
      </main>
    </div>
  );
};

export default SignupPage;