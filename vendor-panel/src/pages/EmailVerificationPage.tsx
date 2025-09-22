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
  Upload
} from "lucide-react";
import "./EmailVerificationPage.css";

const EmailVerificationPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("testtesttest@gmail.com");
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [countdown, setCountdown] = useState(101); // 1:41 in seconds

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newCode = pastedData.split('').concat(Array(6 - pastedData.length).fill(''));
    setVerificationCode(newCode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to contract submission page
    navigate('/contract');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="ev-layout">
      {/* Sidebar */}
      <aside className="ev-sidebar ev-sidebar--blurred">
        <div className="ev-sidebar__header">
          <div className="ev-sidebar__avatar">
            <img src="/icons/Group 45650.svg" alt="User" className="ev-sidebar__avatar-icon" />
            <div className="ev-sidebar__badge">24</div>
          </div>
          <span className="ev-sidebar__name">نام فروشنده</span>
        </div>
        
        <nav className="ev-sidebar__nav">
          <div className="ev-sidebar__section">
            <h3 className="ev-sidebar__section-title">کالا</h3>
            <ul className="ev-sidebar__list">
              <li className="ev-sidebar__item ev-sidebar__item--active">
                <img src="/icons/Group 45698.svg" alt="Dashboard" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">پیشخوان</span>
              </li>
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45699.svg" alt="Search" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">جستجو و ثبت کالا</span>
              </li>
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45700.svg" alt="Manage" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">مدیریت کالا و افزودن تنوع</span>
              </li>
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45701.svg" alt="Pricing" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">مدیریت تنوع و قیمت گذاری</span>
              </li>
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45702.svg" alt="Inventory" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">گزارش موجودی کالا</span>
              </li>
            </ul>
          </div>

          <div className="ev-sidebar__section">
            <h3 className="ev-sidebar__section-title">سفارش‌ها</h3>
            <ul className="ev-sidebar__list">
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45703.svg" alt="Orders" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">مدیریت سفارشات جاری</span>
              </li>
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45704.svg" alt="History" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">تاریخچه سفارشات</span>
              </li>
            </ul>
          </div>

          <div className="ev-sidebar__section">
            <h3 className="ev-sidebar__section-title">مالی</h3>
            <ul className="ev-sidebar__list">
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45705.svg" alt="Invoices" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">صورتحساب ها</span>
              </li>
            </ul>
          </div>

          <div className="ev-sidebar__section">
            <h3 className="ev-sidebar__section-title">تحلیل عملکرد</h3>
            <ul className="ev-sidebar__list">
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45707.svg" alt="Sales" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">فروش و درآمد</span>
              </li>
              <li className="ev-sidebar__item">
                <img src="/icons/Group 45708.svg" alt="Returns" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">مرجوعی</span>
              </li>
            </ul>
          </div>

          <div className="ev-sidebar__section">
            <h3 className="ev-sidebar__section-title">راهنما</h3>
            <ul className="ev-sidebar__list">
              <li className="ev-sidebar__item">
                <img src="/icons/Vector.svg" alt="Warning" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">کالاهای غیر مجاز</span>
              </li>
            </ul>
          </div>

          <div className="ev-sidebar__section">
            <h3 className="ev-sidebar__section-title">پشتیبانی</h3>
            <ul className="ev-sidebar__list">
              <li className="ev-sidebar__item">
                <img src="/icons/Layer_1.svg" alt="Support" className="ev-sidebar__icon" />
                <span className="ev-sidebar__text">درخواست پشتیبانی</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ev-main">

        {/* Content */}
        <div className="ev-content">
          {/* Stepper */}
          <section className="ev-stepper">
            <div className="ev-stepper__item ev-stepper__item--done">
              <div className="ev-stepper__icon">
                <img src="/icons/PROfile.svg" alt="Profile" />
              </div>
              <div className="ev-stepper__dot"></div>
              <span className="ev-stepper__label">پروفایل</span>
            </div>
            <div className="ev-stepper__line"></div>
            <div className="ev-stepper__item ev-stepper__item--active">
              <div className="ev-stepper__icon">
                <img src="/icons/Vector (1).svg" alt="Email" />
              </div>
              <div className="ev-stepper__dot"></div>
              <span className="ev-stepper__label">تایید ایمیل</span>
            </div>
            <div className="ev-stepper__line"></div>
            <div className="ev-stepper__item">
              <div className="ev-stepper__icon">
                <img src="/icons/Group.svg" alt="Contract" />
              </div>
              <div className="ev-stepper__dot"></div>
              <span className="ev-stepper__label">ارسال قرارداد</span>
            </div>
            <div className="ev-stepper__line"></div>
            <div className="ev-stepper__item">
              <div className="ev-stepper__icon">
                <img src="/icons/Vector (2).svg" alt="Bank" />
              </div>
              <div className="ev-stepper__dot"></div>
              <span className="ev-stepper__label">ثبت شماره حساب</span>
            </div>
            <div className="ev-stepper__line"></div>
            <div className="ev-stepper__item">
              <div className="ev-stepper__icon">
                <img src="/icons/Vector (3).svg" alt="Docs" />
              </div>
              <div className="ev-stepper__dot"></div>
              <span className="ev-stepper__label">ارسال مدارک</span>
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="ev-grid">
            {/* Left Column - Notice Card */}
            <aside className="ev-notice-card">
              <h3 className="ev-notice-title">دقت کنید</h3>
              <ul className="ev-notice-list">
                <li>لطفاً آدرس ایمیل خود را بدون فاصله و خط تیره وارد نمایید</li>
                <li>بعد از تأیید ایمیل، امکان تغییر آن وجود ندارد</li>
              </ul>
              <div className="ev-alert">
                <p>مسئولیت اشتباه بودن اطلاعات بر عهده خود کاربر می‌باشد</p>
              </div>
            </aside>

            {/* Right Column - Form Card */}
            <section className="ev-form-card">
              <form onSubmit={handleSubmit}>
                <div className="ev-form-section">
                  <h3 className="ev-section-title">ایمیل</h3>
                  <p className="ev-helper-text">
                    برای استفاده از پنل فروشندگان استاویتا لطفاً ایمیل خود را وارد و سپس تأیید کنید
                  </p>
                  <div className="ev-field">
                    <label htmlFor="email" className="ev-field-label">ایمیل</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="ev-input"
                    />
                  </div>
                </div>

                <div className="ev-divider" />

                <div className="ev-form-section">
                  <h4 className="ev-section-title">تاییدیه ایمیل</h4>
                  <div className="ev-confirmation-text">
                    <span>کد تایید به</span>
                    <span className="ev-email-highlight">testtesttest@gmail.com</span>
                    <span>ارسال خواهد شد</span>
                  </div>
                  
                  <div className="ev-checkbox-field">
                    <input
                      type="checkbox"
                      id="accept-terms"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="ev-checkbox"
                    />
                    <label htmlFor="accept-terms" className="ev-checkbox-label">
                      قوانین استاویتا را قبول دارم
                    </label>
                  </div>

                  <div className="ev-button-group">
                    <button type="button" className="ev-btn ev-btn-primary">
                      <span className="ev-btn-icon">✓</span>
                      ارسال کد تایید
                    </button>
                    <button type="button" className="ev-btn ev-btn-outline">
                      خواندن قوانین
                    </button>
                  </div>
                </div>

                <div className="ev-divider" />

                <div className="ev-otp-section">
                  <p className="ev-otp-help">کد ارسال شده به ایمیل خود را در فیلد زیر وارد نمایید</p>
                  <div className="ev-otp-inputs" onPaste={handlePaste}>
                    {verificationCode.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        className="ev-otp-input"
                      />
                    ))}
                  </div>
                  <div className="ev-countdown">
                    <span>مانده دریافت مجدد</span>
                    <span className="ev-timer">{formatTime(countdown)}</span>
                  </div>
                  <button type="submit" className="ev-btn ev-btn-primary ev-btn-submit">
                    <span className="ev-btn-icon">✓</span>
                    ثبت و بررسی کد
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

export default EmailVerificationPage;