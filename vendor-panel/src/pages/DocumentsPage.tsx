import React, { useState } from 'react';
import './documents.css';
import Sidebar from '../components/sidebar/Sidebar';

const DocumentsPage: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [isReal, setIsReal] = useState(true);
  const [formData, setFormData] = useState({
    province: '',
    city: '',
    address: '',
    nationalId: '',
    emergencyPhone: '',
    economicCode: '',
    sampleField1: '',
    sampleField2: '',
    sampleField3: ''
  });

  const handlePageChange = (page: string) => {
    setActivePage(page);
    console.log('Navigating to:', page);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Documents and supplementary information submitted:', formData);
    // Navigate to next step or complete registration
  };

  return (
    <div className="documents-page" dir="rtl">
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
          <div className="step completed">
            <div className="step-icon">
              <img src="/icons/Group.svg" alt="تایید ایمیل" />
            </div>
            <div className="step-dot"></div>
            <div className="step-label">تایید ایمیل</div>
            <div className="step-connector"></div>
          </div>
          <div className="step completed">
            <div className="step-icon">
              <img src="/icons/Group 45700.svg" alt="ارسال قرارداد" />
            </div>
            <div className="step-dot"></div>
            <div className="step-label">ارسال قرارداد</div>
            <div className="step-connector"></div>
          </div>
          <div className="step completed">
            <div className="step-icon">
              <img src="/icons/Group 45699.svg" alt="ثبت شماره حساب" />
            </div>
            <div className="step-dot"></div>
            <div className="step-label">ثبت شماره حساب</div>
            <div className="step-connector"></div>
          </div>
          <div className="step active">
            <div className="step-icon">
              <img src="/icons/Group 45698.svg" alt="ارسال مدارک" />
            </div>
            <div className="step-dot"></div>
            <div className="step-label">ارسال مدارک</div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="main-layout">
          {/* Document Upload Section */}
          <div className="upload-section">
            <div className="upload-grid">
              <div className="upload-box">
                <div className="upload-content">
                  <div className="upload-icon">📄</div>
                  <div className="upload-text">آپلود مدرک</div>
                </div>
              </div>
              <div className="upload-box">
                <div className="upload-content">
                  <div className="upload-icon">📄</div>
                  <div className="upload-text">آپلود مدرک</div>
                </div>
              </div>
              <div className="upload-box">
                <div className="upload-content">
                  <div className="upload-icon">📄</div>
                  <div className="upload-text">آپلود مدرک</div>
                </div>
              </div>
              <div className="upload-box">
                <div className="upload-content">
                  <div className="upload-icon">📄</div>
                  <div className="upload-text">آپلود مدرک</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="form-section">
            <div className="form-header">
              <h2 className="form-title">اطلاعات تکمیلی کاربری شما</h2>
              <div className="form-tabs">
                <button 
                  className={`tab ${!isReal ? 'active' : ''}`}
                  onClick={() => setIsReal(false)}
                >
                  <div className="tab-dot"></div>
                  حقوقی
                </button>
                <button 
                  className={`tab ${isReal ? 'active' : ''}`}
                  onClick={() => setIsReal(true)}
                >
                  <div className="tab-dot"></div>
                  حقیقی
                </button>
              </div>
            </div>

            <div className="form-fields">
              {isReal ? (
                <>
                  <div className="field-group">
                    <label className="field-label">استان</label>
                    <select
                      className="field-input"
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="tehran">تهران</option>
                      <option value="isfahan">اصفهان</option>
                      <option value="shiraz">شیراز</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">شهر</label>
                    <select
                      className="field-input"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="tehran">تهران</option>
                      <option value="karaj">کرج</option>
                      <option value="isfahan">اصفهان</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">آدرس محل سکونت</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="آدرس محل سکونت را وارد کنید"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">کد ملی</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.nationalId}
                      onChange={(e) => handleInputChange('nationalId', e.target.value)}
                      placeholder="کد ملی را وارد کنید"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">تلفن ضروری</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                      placeholder="شماره تلفن ضروری را وارد کنید"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">فیلد نمونه</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.sampleField1}
                      onChange={(e) => handleInputChange('sampleField1', e.target.value)}
                      placeholder="فیلد نمونه"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">فیلد نمونه</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.sampleField2}
                      onChange={(e) => handleInputChange('sampleField2', e.target.value)}
                      placeholder="فیلد نمونه"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">فیلد نمونه</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.sampleField3}
                      onChange={(e) => handleInputChange('sampleField3', e.target.value)}
                      placeholder="فیلد نمونه"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="field-group">
                    <label className="field-label">استان</label>
                    <select
                      className="field-input"
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="tehran">تهران</option>
                      <option value="isfahan">اصفهان</option>
                      <option value="shiraz">شیراز</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">شهر</label>
                    <select
                      className="field-input"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="tehran">تهران</option>
                      <option value="karaj">کرج</option>
                      <option value="isfahan">اصفهان</option>
                    </select>
                  </div>
                  <div className="field-group">
                    <label className="field-label">آدرس شرکت</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="آدرس شرکت را وارد کنید"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">کد اقتصادی</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.economicCode}
                      onChange={(e) => handleInputChange('economicCode', e.target.value)}
                      placeholder="کد اقتصادی را وارد کنید"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">فیلد نمونه</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.sampleField1}
                      onChange={(e) => handleInputChange('sampleField1', e.target.value)}
                      placeholder="فیلد نمونه"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">فیلد نمونه</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.sampleField2}
                      onChange={(e) => handleInputChange('sampleField2', e.target.value)}
                      placeholder="فیلد نمونه"
                    />
                  </div>
                  <div className="field-group">
                    <label className="field-label">فیلد نمونه</label>
                    <input
                      type="text"
                      className="field-input"
                      value={formData.sampleField3}
                      onChange={(e) => handleInputChange('sampleField3', e.target.value)}
                      placeholder="فیلد نمونه"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Attention Section */}
          <div className="attention-section">
            <div className="attention-header">
              <img src="/icons/Vector (5).svg" alt="دقت کنید" className="attention-icon" />
              <h3 className="attention-title">دقت کنید</h3>
            </div>
            <div className="attention-content">
              <ul className="attention-list">
                <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</li>
                <li>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</li>
                <li>کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</li>
                <li className="highlighted">در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button className="submit-btn" onClick={handleSubmit}>
              <span className="submit-icon">✓</span>
              ثبت اطلاعات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
