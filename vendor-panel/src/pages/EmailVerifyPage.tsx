import React, { useState, useEffect } from 'react';

const EmailVerifyPage: React.FC = () => {
  const [email, setEmail] = useState('teststestest@gmail.com');
  const [isAgreed, setIsAgreed] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [secondsLeft, setSecondsLeft] = useState(43);
  const [phase, setPhase] = useState<'idle' | 'sending' | 'sent' | 'verifying'>('idle');
  const [emailError, setEmailError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Timer effect
  useEffect(() => {
    if (secondsLeft > 0 && phase === 'sent') {
      const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [secondsLeft, phase]);

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError('لطفاً آدرس ایمیل معتبر وارد کنید');
    } else {
      setEmailError('');
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    if (/^\d{4}$/.test(pastedData)) {
      const digits = pastedData.split('');
      setOtp(digits);
      // Focus last input
      const lastInput = document.getElementById('otp-3');
      lastInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const sendCode = () => {
    if (!isAgreed) return;
    setPhase('sending');
    setTimeout(() => {
      setPhase('sent');
      setSecondsLeft(43);
    }, 1000);
  };

  const verifyCode = () => {
    if (otp.every(digit => digit !== '')) {
      setPhase('verifying');
      setTimeout(() => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }, 1000);
    }
  };

  const resendCode = () => {
    setPhase('sending');
    setTimeout(() => {
      setPhase('sent');
      setSecondsLeft(43);
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-['Vazirmatn',_'IRANSansX',_sans-serif]" dir="rtl">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg">
          کد با موفقیت تایید شد!
        </div>
      )}

      <div className="flex min-h-screen">
        {/* Left Notice Column */}
        <div className="w-80 bg-white p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
          <h3 className="text-lg font-bold text-gray-800 mb-6">دقت کنید</h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">
                لطفاً آدرس ایمیل خود را بدون فاصله و خط تیره وارد نمایید.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">
                بعد از تایید ایمیل، امکان تغییر آن وجود ندارد.
              </span>
            </li>
          </ul>
          <div className="bg-[#fde7ea] text-[#c41a43] px-4 py-3 rounded-lg text-sm">
            مسئولیت اشتباه بودن اطلاعات بر عهده کاربر می‌باشد
          </div>
        </div>

        {/* Main Content Column */}
        <div className="flex-1 max-w-[820px] px-8 py-8">
          {/* Top Stepper */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between relative">
              {[
                { name: 'آموزش', icon: '📚' },
                { name: 'ارسال مدارک', icon: '📄' },
                { name: 'ثبت شماره حساب', icon: '💳' },
                { name: 'ارسال قرارداد', icon: '📋' },
                { name: 'تایید ایمیل', icon: '✉️', active: true },
                { name: 'پروفایل', icon: '👤' }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mb-2 ${
                    step.active 
                      ? 'bg-blue-600 text-white border-2 border-blue-600' 
                      : index < 4 
                        ? 'bg-green-500 text-white border-2 border-green-500' 
                        : 'bg-gray-200 text-gray-500 border-2 border-gray-200'
                  }`}>
                    {step.active || index < 4 ? '✓' : step.icon}
                  </div>
                  <span className={`text-xs text-center ${
                    step.active ? 'text-blue-600 font-bold' : 'text-gray-500'
                  }`}>
                    {step.name}
                  </span>
                  {index < 4 && (
                    <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full"></div>
                  )}
                </div>
              ))}
              
              {/* Progress Line */}
              <div className="absolute top-4 right-4 w-[calc(100%-2rem)] h-0.5 bg-gray-200">
                <div className="h-full bg-green-500 w-4/5"></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-green-500 rounded-full transform -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">ایمیل</h1>
            
            <p className="text-gray-600 text-center mb-8">
              برای استفاده از پنل فروشندگان استاویتا، لطفاً ایمیل خود را وارد و سپس تایید کنید
            </p>

            {/* Email Input */}
            <div className="mb-8">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="ایمیل"
                className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-inner"
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
            </div>

            {/* Email Confirmation Section */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-lg font-bold text-gray-800 mb-6">تاییدیه ایمیل</h2>
              
              <p className="text-gray-600 mb-6">
                کد تایید به <span className="font-semibold">{email}</span> ارسال خواهد شد
              </p>

              <div className="flex items-center gap-4 mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">قوانین استاویتا را قبول دارم</span>
                </label>
                <button className="text-blue-600 text-sm hover:underline">
                  خواندن قوانین
                </button>
              </div>

              <button
                onClick={sendCode}
                disabled={!isAgreed || phase === 'sending' || phase === 'sent'}
                className={`w-full h-12 rounded-xl font-semibold mb-6 ${
                  !isAgreed || phase === 'sending' || phase === 'sent'
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {phase === 'sending' ? 'در حال ارسال...' : 'ارسال کد تایید'}
              </button>

              {phase === 'sent' && (
                <>
                  <p className="text-gray-600 text-center mb-6">
                    کد ارسال شده به ایمیل خود را در فیلد زیر وارد نمایید:
                  </p>

                  {/* OTP Input */}
                  <div className="flex justify-center gap-3 mb-6">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handleOtpPaste}
                        className="w-12 h-12 text-center text-lg font-bold border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      />
                    ))}
                  </div>

                  <div className="text-center mb-6">
                    {secondsLeft > 0 ? (
                      <span className="text-gray-500 text-sm">
                        {formatTime(secondsLeft)} مانده تا دریافت مجدد
                      </span>
                    ) : (
                      <button
                        onClick={resendCode}
                        className="text-blue-600 text-sm hover:underline"
                      >
                        ارسال مجدد کد
                      </button>
                    )}
                  </div>

                  <button
                    onClick={verifyCode}
                    disabled={otp.some(digit => digit === '') || phase === 'verifying'}
                    className={`w-full h-12 rounded-xl font-semibold ${
                      otp.some(digit => digit === '') || phase === 'verifying'
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {phase === 'verifying' ? 'در حال تایید...' : 'ثبت و بررسی کد'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              ن
            </div>
            <span className="font-semibold text-gray-800">نام فروشنده</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold mb-8 hover:bg-blue-700">
            پیشخوان
          </button>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">کالا</h3>
              </div>
              <div className="space-y-3 pr-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span>جستجو و ثبت کالا</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-auto"></div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>مدیریت کالا</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">سفارش‌ها</h3>
              </div>
              <div className="space-y-3 pr-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>مدیریت سفارشات</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">حساب‌ها</h3>
              </div>
              <div className="space-y-3 pr-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>صورتحساب‌ها</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">تحلیل عملکرد</h3>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">راهنما</h3>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <h3 className="font-semibold text-gray-800">درخواست پشتیبانی</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerifyPage;
