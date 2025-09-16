import React, { useState, useEffect } from "react";
import "./EmailVerifyTwoCol.css";

interface EmailVerifyTwoColProps {
  className?: string;
}

const EmailVerifyTwoCol: React.FC<EmailVerifyTwoColProps> = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [acceptRules, setAcceptRules] = useState(false);
  const [countdown, setCountdown] = useState("01:41");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode initialization
  useEffect(() => {
    if (typeof document !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }
  }, []);

  // Countdown timer effect
  useEffect(() => {
    if (isOtpSent) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          const [minutes, seconds] = prev.split(':').map(Number);
          if (minutes === 0 && seconds === 0) {
            return "00:00";
          }
          if (seconds === 0) {
            return `${minutes - 1}:59`;
          }
          return `${minutes}:${seconds - 1}`;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOtpSent]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setOtp(value);
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && otp.length === 0) {
      const prevInput = e.currentTarget.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    setOtp(pastedData);
    
    // Focus the last filled input
    const inputs = document.querySelectorAll('.evtc-otp-input');
    const lastInput = inputs[Math.min(pastedData.length - 1, 5)] as HTMLInputElement;
    if (lastInput) {
      lastInput.focus();
    }
  };

  const handleSendCode = () => {
    if (email && acceptRules) {
      setIsOtpSent(true);
      setCountdown("01:41");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, otp, acceptRules });
  };

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

  return (
    <div className={`evtc-container ${className}`}>
      {/* Dark Mode Toggle */}
      <div className="evtc-mode-toggle">
        <button 
          className="evtc-mode-toggle__btn"
          data-mode-toggle
          onClick={toggleDarkMode}
          aria-label={darkMode ? "روشن کردن تم روشن" : "روشن کردن تم تاریک"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      
      <div className="evtc-grid">
        {/* Left Column - Notice Card */}
        <div className="evtc-column">
          <div className="evtc-card">
            <h3 className="evtc-heading evtc-heading--level-3">دقت کنید</h3>
            
            <ul className="evtc-list evtc-list--dot">
              <li className="evtc-list__item">لطفاً آدرس ایمیل خود را بدون فاصله و خط تیره وارد نمایید</li>
              <li className="evtc-list__item">بعد از تأیید ایمیل، امکان تغییر آن وجود ندارد</li>
            </ul>

            <div className="evtc-alert evtc-alert--soft">
              <p className="evtc-alert__text evtc-alert__text--danger">مسئولیت اشتباه بودن اطلاعات بر عهده خود کاربر می‌باشد</p>
            </div>
          </div>
        </div>

        {/* Right Column - Main Form Card */}
        <div className="evtc-column">
          <div className="evtc-card">
            <form onSubmit={handleSubmit}>
              <h3 className="evtc-heading evtc-heading--level-3 evtc-heading--center">ایمیل</h3>
              <p className="evtc-text evtc-text--muted evtc-text--center">
                برای استفاده از پنل فروشندگان استاویتا لطفاً ایمیل خود را وارد و سپس تأیید کنید
              </p>

              <div className="evtc-form-field">
                <label className="evtc-form-label">ایمیل</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="example@mail.com"
                  className="evtc-form-input"
                />
              </div>

              <div className="evtc-divider" />

              <h4 className="evtc-heading evtc-heading--level-4 evtc-heading--center">تاییدیه ایمیل</h4>
              
              <div className="evtc-inline evtc-inline--center">
                <span className="evtc-keytext">
                  <span className="evtc-keytext__key">کد تایید به</span>
                  <span className="evtc-keytext__value">testtesttest@gmail.com</span>
                </span>
              </div>

              <div className="evtc-checkbox-field">
                <input
                  type="checkbox"
                  id="accept_rules"
                  name="accept_rules"
                  checked={acceptRules}
                  onChange={(e) => setAcceptRules(e.target.checked)}
                  className="evtc-checkbox"
                />
                <label htmlFor="accept_rules" className="evtc-checkbox-label">
                  قوانین استاویتا را قبول دارم
                </label>
              </div>

              <div className="evtc-actions evtc-actions--center">
                <button
                  type="button"
                  onClick={handleSendCode}
                  className="evtc-btn evtc-btn--brand"
                  style={{ width: 165, height: 40, fontSize: 14 }}
                >
                  ارسال کد تایید
                </button>
                <button
                  type="button"
                  className="evtc-btn evtc-btn--outline"
                  style={{ width: 149, height: 40, fontSize: 14 }}
                >
                  خواندن قوانین
                </button>
              </div>

              <div className="evtc-divider" />

              <div className="evtc-otp">
                <div className="evtc-otp__inputs">
                  {Array.from({ length: 6 }, (_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={otp[index] || ''}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value) {
                          setOtp(prev => {
                            const newOtp = prev.split('');
                            newOtp[index] = value;
                            return newOtp.join('').slice(0, 6);
                          });
                          // Focus next input
                          const nextInput = e.target.nextElementSibling as HTMLInputElement;
                          if (nextInput) {
                            nextInput.focus();
                          }
                        }
                      }}
                      onKeyDown={handleOtpKeyDown}
                      onPaste={handleOtpPaste}
                      className="evtc-otp-input"
                    />
                  ))}
                </div>
              </div>

              <div className="evtc-inline evtc-inline--center">
                <span className="evtc-text evtc-text--muted">مانده تا دریافت مجدد</span>
                <span className="evtc-countdown">{countdown}</span>
              </div>

              <div className="evtc-actions evtc-actions--center">
                <button
                  type="submit"
                  className="evtc-btn evtc-btn--brand"
                  style={{ width: 165, height: 40, fontSize: 14 }}
                >
                  ثبت و بررسی کد
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyTwoCol;
