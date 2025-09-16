import React, { useState } from 'react';

const SendContractPage: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isContractAccepted, setIsContractAccepted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
  };

  const handleDownloadContract = () => {
    const contractText = `
متن قرارداد شماره یک

ماده 1- موضوع ماده
نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

ماده 2- موضوع ماده
نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

ماده 3- موضوع ماده
نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.

ماده 4- موضوع ماده
نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
    `;
    
    const blob = new Blob([contractText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'قرارداد-شماره-یک.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSave = () => {
    if (!uploadedFile || !isContractAccepted) return;
    
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('قرارداد با موفقیت ثبت شد!');
    }, 2000);
  };

  const clauses = [
    {
      id: 1,
      title: 'ماده 1- موضوع ماده',
      content: 'نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.'
    },
    {
      id: 2,
      title: 'ماده 2- موضوع ماده',
      content: 'نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.'
    },
    {
      id: 3,
      title: 'ماده 3- موضوع ماده',
      content: 'نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.'
    },
    {
      id: 4,
      title: 'ماده 4- موضوع ماده',
      content: 'نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fb] font-['Vazirmatn',_'IRANSansX',_sans-serif]" dir="rtl">
      <div className="px-6 lg:px-10 py-6">
        {/* Top Stepper */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center justify-between relative">
            {[
              { name: 'آموزش', icon: '▶', completed: false },
              { name: 'ارسال مدارک', icon: '📄', completed: true },
              { name: 'ثبت شماره حساب', icon: '💳', completed: true },
              { name: 'ارسال قرارداد', icon: '📋', active: true },
              { name: 'تایید ایمیل', icon: '✉️', completed: true },
              { name: 'پروفایل', icon: '👤', completed: true }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm mb-2 ${
                  step.active 
                    ? 'bg-blue-600 text-white border-2 border-blue-600' 
                    : step.completed
                      ? 'bg-green-500 text-white border-2 border-green-500' 
                      : 'bg-gray-200 text-gray-500 border-2 border-gray-200'
                }`}>
                  {step.active || step.completed ? '✓' : step.icon}
                </div>
                <span className={`text-xs text-center ${
                  step.active ? 'text-blue-600 font-bold' : step.completed ? 'text-green-600' : 'text-gray-500'
                }`}>
                  {step.name}
                </span>
                {step.completed && (
                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
            ))}
            
            {/* Progress Line */}
            <div className="absolute top-4 right-4 w-[calc(100%-2rem)] h-0.5 bg-gray-200">
              <div className="h-full bg-green-500 w-3/4"></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-green-500 rounded-full transform -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <div className="flex gap-6 lg:gap-8">
          {/* Left Column - Signature Upload */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)] mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">امضای قرارداد شماره یک</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl h-40 flex flex-col items-center justify-center mb-4 relative">
                {uploadedFile ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{uploadedFile.name}</p>
                    <button
                      onClick={handleRemoveFile}
                      className="text-red-500 text-xs hover:underline"
                    >
                      حذف فایل
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm text-gray-600 mb-2">آپلود امضا</p>
                    <p className="text-xs text-gray-400">PNG, JPG, SVG</p>
                  </div>
                )}
                
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.svg"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>

            {/* Second Signature Upload Card */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
              <h3 className="text-lg font-bold text-gray-800 mb-6">امضای قرارداد شماره یک</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-xl h-40 flex flex-col items-center justify-center mb-4 relative">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="text-sm text-gray-600 mb-2">آپلود امضا</p>
                  <p className="text-xs text-gray-400">PNG, JPG, SVG</p>
                </div>
                
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.svg"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>

          {/* Main Column - Contract Content */}
          <div className="flex-1 max-w-[860px]">
            <h1 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8">متن قرارداد شماره یک</h1>
            
            <div className="bg-blue-50 rounded-2xl p-6 shadow-sm mb-8">
              <div className="space-y-4">
                {clauses.map((clause) => (
                  <div key={clause.id} className="bg-white rounded-xl border border-gray-200 px-6 py-4 shadow-[0_1px_6px_rgba(13,110,253,0.05)]">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 text-right">{clause.title}</h3>
                    <p className="text-sm text-gray-500 text-justify leading-relaxed">{clause.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="contract-acceptance"
                  checked={isContractAccepted}
                  onChange={(e) => setIsContractAccepted(e.target.checked)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="contract-acceptance" className="text-sm text-gray-700 cursor-pointer">
                  قرارداد را به صورت کامل خوانده‌ام و آن را قبول دارم
                </label>
              </div>

              <div className="flex gap-4 justify-end">
                <button
                  onClick={handleDownloadContract}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  دانلود قرارداد
                </button>
                <button
                  onClick={handleSave}
                  disabled={!uploadedFile || !isContractAccepted || isSaving}
                  className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
                    !uploadedFile || !isContractAccepted || isSaving
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {isSaving ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      در حال ذخیره...
                    </>
                  ) : (
                    <>
                      <span>ثبت اطلاعات</span>
                      <span>✓</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Second Contract Text Section */}
            <div className="mt-8">
              <h1 className="text-xl lg:text-2xl font-bold text-center text-gray-800 mb-8">متن قرارداد شماره یک</h1>
              
              <div className="bg-blue-50 rounded-2xl p-6 shadow-sm mb-8">
                <div className="space-y-4">
                  {clauses.map((clause) => (
                    <div key={`second-${clause.id}`} className="bg-white rounded-xl border border-gray-200 px-6 py-4 shadow-[0_1px_6px_rgba(13,110,253,0.05)]">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3 text-right">{clause.title}</h3>
                      <p className="text-sm text-gray-500 text-justify leading-relaxed">{clause.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions for second contract */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="contract-acceptance-2"
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="contract-acceptance-2" className="text-sm text-gray-700 cursor-pointer">
                    قرارداد را به صورت کامل خوانده‌ام و آن را قبول دارم
                  </label>
                </div>

                <div className="flex gap-4 justify-end">
                  <button
                    onClick={handleDownloadContract}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    دانلود قرارداد
                  </button>
                  <button
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700"
                  >
                    <span>ثبت اطلاعات</span>
                    <span>✓</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-[0_1px_10px_rgba(0,0,0,0.05)]">
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
                      <span>مدیریت کالا و افزودن تنوع</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>مدیریت تنوع و قیمت گذاری</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>گزارش موجودی کالا</span>
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
                      <span>مدیریت سفارشات جاری</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>تاریخچه سفارشات</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">مالی</h3>
                  </div>
                  <div className="space-y-3 pr-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>صورت حساب‌ها</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">تحلیل عملکرد</h3>
                  </div>
                  <div className="space-y-3 pr-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>فروش و درآمد</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>مرجوعی</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">راهنما</h3>
                  </div>
                  <div className="space-y-3 pr-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      </svg>
                      <span>مرکز آموزش فروشندگان</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <span>کالاهای غیر مجاز</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <h3 className="font-semibold text-gray-800">پشتیبانی</h3>
                  </div>
                  <div className="space-y-3 pr-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>درخواست پشتیبانی</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendContractPage;