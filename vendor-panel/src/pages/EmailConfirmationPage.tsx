import React, { useState } from 'react';
import './emailConfirmation.css';
import Sidebar from '../components/sidebar/Sidebar';
import ContractPage from './ContractPage';

const EmailConfirmationPage: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [email, setEmail] = useState('testtesttest@gmail.com');
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(49);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [currentStep, setCurrentStep] = useState('email'); // New state for navigation

  const handlePageChange = (page: string) => {
    setActivePage(page);
    console.log('Navigating to:', page);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSendCode = () => {
    console.log('Sending verification code to:', email);
  };

  const handleVerifyCode = () => {
    console.log('Verifying code:', verificationCode.join(''));
    setCurrentStep('contract');
  };

  // Timer effect
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Show contract page if current step is contract
  if (currentStep === 'contract') {
    return <ContractPage />;
  }

  return (
    <div className="email-confirmation-page" dir="rtl">
      {/* Blurred Sidebar */}
      <div className="signup-sidebar">
        <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      </div>

      {/* Main Content */}
      <div className="signup-content">
        {/* Step Bar */}
        <div className="step-bar">
                 <div className="step completed">
                   <div className="step-icon">
                     <img src="/icons/Group 45701.svg" alt="پروفایل" />
                   </div>
                   <div className="step-dot"></div>
                   <div className="step-label">پروفایل</div>
                   <div className="step-connector"></div>
                 </div>
                 <div className="step active">
                   <div className="step-icon">
                     <img src="/icons/Group.svg" alt="تایید ایمیل" />
                   </div>
                   <div className="step-dot"></div>
                   <div className="step-label">تایید ایمیل</div>
                   <div className="step-connector"></div>
                 </div>
                 <div className="step">
                   <div className="step-icon">
                     <img src="/icons/Group 45700.svg" alt="ارسال قرارداد" />
                   </div>
                   <div className="step-dot"></div>
                   <div className="step-label">ارسال قرارداد</div>
                   <div className="step-connector"></div>
                 </div>
                 <div className="step">
                   <div className="step-icon">
                     <img src="/icons/Group 45699.svg" alt="ثبت شماره حساب" />
                   </div>
                   <div className="step-dot"></div>
                   <div className="step-label">ثبت شماره حساب</div>
                   <div className="step-connector"></div>
                 </div>
                 <div className="step">
                   <div className="step-icon">
                     <img src="/icons/Group 45698.svg" alt="ارسال مدارک" />
                   </div>
                   <div className="step-dot"></div>
                   <div className="step-label">ارسال مدارک</div>
                 </div>
        </div>

        {/* Main Layout */}
        <div className="main-layout">
          {/* Right Form Section */}
          <div className="form-section">
            {/* Email Section */}
            <div className="email-section">
              <h2 className="section-title">ایمیل</h2>
              <p className="section-description">
                برای استفاده از پنل فروشندگان استاویتا لطفا ایمیل خود را وارد و سپس تایید کنید
              </p>
              <div className="email-input-group">
                <input
                  type="email"
                  className="email-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ایمیل خود را وارد کنید"
                />
                <span className="email-label">ایمیل</span>
                <button className="send-code-btn" onClick={handleSendCode}>
                  <span className="btn-icon">✓</span>
                  ارسال کد
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="section-divider"></div>

            {/* Email Confirmation Section */}
            <div className="confirmation-section">
              <h2 className="section-title">تاییدیه ایمیل</h2>
              <p className="confirmation-text">
                کد تایید به {email} ارسال خواهد شد
              </p>

              <div className="terms-section">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                  />
                  <span className="checkbox-text">قوانین استاویتا را قبول دارم</span>
                </label>
                
                <div className="button-group">
                  <button className="read-rules-btn">خواندن قوانین</button>
                  <button className="send-confirmation-btn" onClick={handleSendCode}>
                    <span className="btn-icon">✓</span>
                    ارسال کد تایید
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="section-divider"></div>

              <p className="code-instruction">
                کد ارسال شده به ایمیل خود را در فیلد زیر وارد نمایید:
              </p>

              <div className="code-inputs">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-${index}`}
                    type="text"
                    className="code-input"
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    maxLength={1}
                  />
                ))}
              </div>

              <div className="timer-section">
                <span className="timer-text">
                  {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')} مانده تا دریافت مجدد
                </span>
              </div>

              <button className="verify-btn" onClick={handleVerifyCode}>
                <span className="btn-icon">✓</span>
                ثبت و بررسی کد
              </button>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="info-box">
            <h3 className="info-title">دقت کنید</h3>
            <ul className="info-list">
              <li>لطفا آدرس ایمیل خود را بدون فاصله و خط تیره وارد نمایید.</li>
              <li>بعد از تایید ایمیل امکان تغییر آن وجود ندارد.</li>
            </ul>
            <p className="warning-text">
              مسئولیت اشتباه بودن اطلاعات بر عهده خود کاربر می باشد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmationPage;