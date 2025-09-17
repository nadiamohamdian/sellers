import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  User, 
  Home, 
  Search, 
  Package, 
  Tag, 
  BarChart3, 
  ClipboardList, 
  Clock, 
  Receipt, 
  TrendingUp, 
  RotateCcw, 
  BookOpen, 
  AlertTriangle, 
  Headphones, 
  Mail, 
  FileText, 
  CreditCard, 
  Upload,
  Star,
  Building2,
  User2,
  CreditCard as Card,
  Banknote
} from "lucide-react";
import "./BankAccountPage.css";

const BankAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    bankName: "",
    accountHolder: "",
    accountNumber: "",
    cardNumber: "",
    iban: "IR"
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Bank account submitted:", formData);
    // Navigate to bank account page
    navigate('/bank-account');
  };

  return (
    <div className="ba-layout">
      {/* Sidebar */}
      <aside className="ba-sidebar ba-sidebar--blurred">
        <div className="ba-sidebar__header">
          <div className="ba-sidebar__avatar">
            <span className="icon"><User size={18} /></span>
            <div className="ba-sidebar__badge">24</div>
          </div>
          <span className="ba-sidebar__name">نام فروشنده</span>
        </div>
        
        <nav className="ba-sidebar__nav">
          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">کالا</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item ba-sidebar__item--active">
                <span className="icon"><Home size={18} /></span>
                <span className="ba-sidebar__text">پیشخوان</span>
              </li>
              <li className="ba-sidebar__item">
                <span className="icon"><Search size={18} /></span>
                <span className="ba-sidebar__text">جستجو و ثبت کالا</span>
              </li>
              <li className="ba-sidebar__item">
                <span className="icon"><Package size={18} /></span>
                <span className="ba-sidebar__text">مدیریت کالا و افزودن تنوع</span>
              </li>
              <li className="ba-sidebar__item">
                <span className="icon"><Tag size={18} /></span>
                <span className="ba-sidebar__text">مدیریت تنوع و قیمت گذاری</span>
              </li>
              <li className="ba-sidebar__item">
                <span className="icon"><BarChart3 size={18} /></span>
                <span className="ba-sidebar__text">گزارش موجودی کالا</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">سفارش‌ها</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <span className="icon"><ClipboardList size={18} /></span>
                <span className="ba-sidebar__text">مدیریت سفارشات جاری</span>
              </li>
              <li className="ba-sidebar__item">
                <span className="icon"><Clock size={18} /></span>
                <span className="ba-sidebar__text">تاریخچه سفارشات</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">مالی</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <span className="icon"><Receipt size={18} /></span>
                <span className="ba-sidebar__text">صورتحساب ها</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">تحلیل عملکرد</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <span className="icon"><TrendingUp size={18} /></span>
                <span className="ba-sidebar__text">فروش و درآمد</span>
              </li>
              <li className="ba-sidebar__item">
                <span className="icon"><RotateCcw size={18} /></span>
                <span className="ba-sidebar__text">مرجوعی</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">راهنما</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <span className="icon"><AlertTriangle size={18} /></span>
                <span className="ba-sidebar__text">کالاهای غیر مجاز</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">پشتیبانی</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <span className="icon"><Headphones size={18} /></span>
                <span className="ba-sidebar__text">درخواست پشتیبانی</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ba-main">
        {/* Content */}
        <div className="ba-content">
          {/* Stepper */}
          <section className="ba-stepper">
            <div className="ba-stepper__item ba-stepper__item--done">
              <div className="ba-stepper__icon">
                <span className="icon"><User size={18} /></span>
              </div>
              <div className="ba-stepper__dot"></div>
              <span className="ba-stepper__label">پروفایل</span>
            </div>
            <div className="ba-stepper__line ba-stepper__line--green"></div>
            <div className="ba-stepper__item ba-stepper__item--done">
              <div className="ba-stepper__icon">
                <span className="icon"><Mail size={18} /></span>
              </div>
              <div className="ba-stepper__dot"></div>
              <span className="ba-stepper__label">تایید ایمیل</span>
            </div>
            <div className="ba-stepper__line ba-stepper__line--green"></div>
            <div className="ba-stepper__item ba-stepper__item--done">
              <div className="ba-stepper__icon">
                <span className="icon"><FileText size={18} /></span>
              </div>
              <div className="ba-stepper__dot"></div>
              <span className="ba-stepper__label">ارسال قرارداد</span>
            </div>
            <div className="ba-stepper__line ba-stepper__line--green"></div>
            <div className="ba-stepper__item ba-stepper__item--active">
              <div className="ba-stepper__icon">
                <span className="icon"><CreditCard size={18} /></span>
              </div>
              <div className="ba-stepper__dot"></div>
              <span className="ba-stepper__label">ثبت شماره حساب</span>
            </div>
            <div className="ba-stepper__line"></div>
            <div className="ba-stepper__item ba-stepper__item--future">
              <div className="ba-stepper__icon">
                <span className="icon"><Upload size={18} /></span>
              </div>
              <div className="ba-stepper__dot"></div>
              <span className="ba-stepper__label">ارسال مدارک</span>
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="ba-grid">
            {/* Left Column - Notice Card */}
            <aside className="ba-notice-card">
              <h3 className="ba-notice-title">دقت کنید</h3>
              <ul className="ba-notice-list">
                <li>لطفا شماره شبای حساب خود را بدون فاصله و خط تیره وارد نمایید</li>
                <li>برای دریافت شماره شبای حساب خود می توانید به سایت بانک خود مراجعه کنید</li>
              </ul>
              <div className="ba-alert">
                <p>مسئولیت اشتباه بودن اطلاعات بر عهده خود کاربر می باشد و مبلغ واریزی قابل بازگشت نمیباشد.</p>
              </div>
            </aside>

            {/* Right Column - Form Card */}
            <section className="ba-form-card">
              <h2 className="ba-form-title">اطلاعات حساب بانکی</h2>
              
              <form className="ba-form" onSubmit={handleSubmit}>
                <div className="ba-field">
                  <label htmlFor="title" className="ba-field-label">عنوان</label>
                  <div className="ba-field-input">
                    <span className="icon"><Star size={18} /></span>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="ba-input"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="عنوان حساب"
                    />
                  </div>
                </div>

                <div className="ba-field">
                  <label htmlFor="bankName" className="ba-field-label">نام بانک</label>
                  <div className="ba-field-input">
                    <span className="icon"><Building2 size={18} /></span>
                    <select
                      id="bankName"
                      name="bankName"
                      className="ba-select"
                      value={formData.bankName}
                      onChange={handleInputChange}
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="melli">بانک ملی</option>
                      <option value="mellat">بانک ملت</option>
                      <option value="saderat">بانک صادرات</option>
                      <option value="tejarat">بانک تجارت</option>
                    </select>
                  </div>
                </div>

                <div className="ba-field">
                  <label htmlFor="accountHolder" className="ba-field-label">نام صاحب حساب</label>
                  <div className="ba-field-input">
                    <span className="icon"><User2 size={18} /></span>
                    <input
                      id="accountHolder"
                      name="accountHolder"
                      type="text"
                      className="ba-input"
                      value={formData.accountHolder}
                      onChange={handleInputChange}
                      placeholder="نام صاحب حساب"
                    />
                  </div>
                </div>

                <div className="ba-field">
                  <label htmlFor="accountNumber" className="ba-field-label">شماره حساب</label>
                  <div className="ba-field-input">
                    <span className="icon"><Card size={18} /></span>
                    <input
                      id="accountNumber"
                      name="accountNumber"
                      type="text"
                      className="ba-input"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      placeholder="شماره حساب"
                    />
                  </div>
                </div>

                <div className="ba-field">
                  <label htmlFor="cardNumber" className="ba-field-label">شماره کارت</label>
                  <div className="ba-field-input">
                    <span className="icon"><Card size={18} /></span>
                    <input
                      id="cardNumber"
                      name="cardNumber"
                      type="text"
                      className="ba-input"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="شماره کارت"
                    />
                  </div>
                </div>

                <div className="ba-field">
                  <label htmlFor="iban" className="ba-field-label">شماره شبا</label>
                  <div className="ba-field-input">
                    <span className="icon"><Banknote size={18} /></span>
                    <input
                      id="iban"
                      name="iban"
                      type="text"
                      className="ba-input"
                      value={formData.iban}
                      onChange={handleInputChange}
                      placeholder="IR"
                    />
                  </div>
                </div>

                <button type="submit" className="ba-btn ba-btn-primary">
                  <span className="ba-btn-icon">✓</span>
                  ثبت اطلاعات
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BankAccountPage;