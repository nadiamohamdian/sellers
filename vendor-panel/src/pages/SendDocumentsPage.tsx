import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SellerShell from "../layouts/SellerShell";
import { 
  User, 
  Cloud, 
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
import "./SendDocumentsPage.css";

const SendDocumentsPage: React.FC = () => {
  const navigate = useNavigate();
  const [personType, setPersonType] = useState<'real' | 'legal'>('real');
  const [submitting, setSubmitting] = useState(false);
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

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "rtl");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    
    setSubmitting(true);
    
    try {
      // TODO: Add your validations and upload logic here
      // await api.saveDocuments(formData);
      console.log('Send documents submitted', formData);
      
      // Set onboarded flag and navigate to dashboard
      localStorage.setItem("onboarded", "1");
      navigate('/dashboard');
    } catch (error) {
      console.error('Error submitting documents:', error);
      // Handle error (show toast, etc.)
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SellerShell title="ارسال مدارک">
      {/* Sidebar */}
      <aside className="ba-sidebar ba-sidebar--blurred">
        <div className="ba-sidebar__header">
          <div className="ba-sidebar__avatar">
            <img src="/icons/Group 45650.svg" alt="User" className="ba-sidebar__avatar-icon" />
            <div className="ba-sidebar__badge">24</div>
          </div>
          <span className="ba-sidebar__name">نام فروشنده</span>
        </div>
        
        <nav className="ba-sidebar__nav">
          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">کالا</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item ba-sidebar__item--active">
                <img src="/icons/Group 45698.svg" alt="Dashboard" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">پیشخوان</span>
              </li>
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45699.svg" alt="Search" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">جستجو و ثبت کالا</span>
              </li>
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45700.svg" alt="Manage" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">مدیریت کالا و افزودن تنوع</span>
              </li>
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45701.svg" alt="Pricing" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">مدیریت تنوع و قیمت گذاری</span>
              </li>
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45702.svg" alt="Inventory" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">گزارش موجودی کالا</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">سفارش‌ها</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45703.svg" alt="Orders" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">مدیریت سفارشات جاری</span>
              </li>
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45704.svg" alt="History" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">تاریخچه سفارشات</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">مالی</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45705.svg" alt="Invoices" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">صورتحساب ها</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">تحلیل عملکرد</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45707.svg" alt="Sales" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">فروش و درآمد</span>
              </li>
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45708.svg" alt="Returns" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">مرجوعی</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">راهنما</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45709.svg" alt="Training" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">مرکز آموزش فروشندگان</span>
              </li>
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45710.svg" alt="Prohibited" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">کالاهای غیر مجاز</span>
              </li>
            </ul>
          </div>

          <div className="ba-sidebar__section">
            <h3 className="ba-sidebar__section-title">پشتیبانی</h3>
            <ul className="ba-sidebar__list">
              <li className="ba-sidebar__item">
                <img src="/icons/Group 45711.svg" alt="Support" className="ba-sidebar__icon" />
                <span className="ba-sidebar__text">درخواست پشتیبانی</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="sd-main" style={{background: "transparent", border: "none", borderRadius: "0", padding: "0"}}>
        {/* Content */}
        <div className="sd-content">
          {/* Stepper */}
          <section className="sd-stepper">
            <div className="sd-stepper__item sd-stepper__item--done">
              <div className="sd-stepper__icon">
                <img src="/icons/PROfile.svg" alt="Profile" />
              </div>
              <div className="sd-stepper__dot"></div>
              <span className="sd-stepper__label">پروفایل</span>
            </div>
            <div className="sd-stepper__line"></div>
            <div className="sd-stepper__item sd-stepper__item--done">
              <div className="sd-stepper__icon">
                <img src="/icons/Vector (1).svg" alt="Email" />
              </div>
              <div className="sd-stepper__dot"></div>
              <span className="sd-stepper__label">تایید ایمیل</span>
            </div>
            <div className="sd-stepper__line"></div>
            <div className="sd-stepper__item sd-stepper__item--done">
              <div className="sd-stepper__icon">
                <img src="/icons/Group.svg" alt="Contract" />
              </div>
              <div className="sd-stepper__dot"></div>
              <span className="sd-stepper__label">ارسال قرارداد</span>
            </div>
            <div className="sd-stepper__line"></div>
            <div className="sd-stepper__item sd-stepper__item--done">
              <div className="sd-stepper__icon">
                <img src="/icons/Vector (2).svg" alt="Bank" />
              </div>
              <div className="sd-stepper__dot"></div>
              <span className="sd-stepper__label">ثبت شماره حساب</span>
            </div>
            <div className="sd-stepper__line"></div>
            <div className="sd-stepper__item sd-stepper__item--active">
              <div className="sd-stepper__icon">
                <img src="/icons/Vector (3).svg" alt="Docs" />
              </div>
              <div className="sd-stepper__dot"></div>
              <span className="sd-stepper__label">ارسال مدارک</span>
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="sd-grid">
              {/* Right Column - Form Card */}
              <section className="sd-form-card">
                <h3 className="sd-form-title">اطلاعات تکمیلی کاربری شما</h3>

                <form className="sd-form" onSubmit={handleSubmit}>
                  {/* Person Type Toggle */}
                  <div className="sd-toggle-group">
                    <button
                      type="button"
                      className={`sd-toggle ${personType === 'real' ? 'sd-toggle--active' : ''}`}
                      onClick={() => setPersonType('real')}
                    >
                      حقیقی
                    </button>
                    <button
                      type="button"
                      className={`sd-toggle ${personType === 'legal' ? 'sd-toggle--active' : ''}`}
                      onClick={() => setPersonType('legal')}
                    >
                      حقوقی
                    </button>
                  </div>

                  {/* Form Fields */}
                  <div className="sd-form-fields">
                    <div className="sd-field">
                      <label htmlFor="province" className="sd-field-label">استان</label>
                      <select
                        id="province"
                        name="province"
                        className="sd-select"
                        value={formData.province}
                        onChange={handleInputChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="tehran">تهران</option>
                        <option value="isfahan">اصفهان</option>
                        <option value="shiraz">شیراز</option>
                      </select>
                    </div>

                    <div className="sd-field">
                      <label htmlFor="city" className="sd-field-label">شهر</label>
                      <select
                        id="city"
                        name="city"
                        className="sd-select"
                        value={formData.city}
                        onChange={handleInputChange}
                      >
                        <option value="">انتخاب کنید</option>
                        <option value="tehran">تهران</option>
                        <option value="karaj">کرج</option>
                        <option value="isfahan">اصفهان</option>
                      </select>
                    </div>

                    <div className="sd-field sd-field--full">
                      <label htmlFor="address" className="sd-field-label">
                        {personType === 'real' ? 'آدرس محل سکونت' : 'آدرس شرکت'}
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        className="sd-input"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder={personType === 'real' ? 'آدرس محل سکونت' : 'آدرس شرکت'}
                      />
                    </div>

                    <div className="sd-field">
                      <label htmlFor="nationalId" className="sd-field-label">
                        {personType === 'real' ? 'کد ملی' : 'کد اقتصادی'}
                      </label>
                      <input
                        id="nationalId"
                        name="nationalId"
                        type="text"
                        className="sd-input"
                        value={formData.nationalId}
                        onChange={handleInputChange}
                        placeholder={personType === 'real' ? 'کد ملی' : 'کد اقتصادی'}
                      />
                    </div>

                    <div className="sd-field">
                      <label htmlFor="emergencyPhone" className="sd-field-label">تلفن ضروری</label>
                      <input
                        id="emergencyPhone"
                        name="emergencyPhone"
                        type="text"
                        className="sd-input"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        placeholder="تلفن ضروری"
                      />
                    </div>

                    <div className="sd-field">
                      <label htmlFor="sampleField1" className="sd-field-label">فیلد نمونه</label>
                      <input
                        id="sampleField1"
                        name="sampleField1"
                        type="text"
                        className="sd-input"
                        value={formData.sampleField1}
                        onChange={handleInputChange}
                        placeholder="فیلد نمونه"
                      />
                    </div>

                    <div className="sd-field">
                      <label htmlFor="sampleField2" className="sd-field-label">فیلد نمونه</label>
                      <input
                        id="sampleField2"
                        name="sampleField2"
                        type="text"
                        className="sd-input"
                        value={formData.sampleField2}
                        onChange={handleInputChange}
                        placeholder="فیلد نمونه"
                      />
                    </div>

                    <div className="sd-field">
                      <label htmlFor="sampleField3" className="sd-field-label">فیلد نمونه</label>
                      <input
                        id="sampleField3"
                        name="sampleField3"
                        type="text"
                        className="sd-input"
                        value={formData.sampleField3}
                        onChange={handleInputChange}
                        placeholder="فیلد نمونه"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="sd-btn sd-btn-primary"
                    disabled={submitting}
                  >
                    <span className="sd-btn-icon">✓</span>
                    {submitting ? 'در حال ارسال...' : 'ثبت اطلاعات'}
                  </button>
                </form>
              </section>

              {/* Left Column - Uploads Card */}
              <aside className="sd-uploads-card">
                <h4 className="sd-uploads-title">آپلود مدرک</h4>
                <div className="sd-uploads-grid">
                  <div className="sd-upload-area">
                    <span className="sd-upload-text">آپلود مدرک</span>
                  </div>
                  <div className="sd-upload-area">
                    <span className="sd-upload-text">آپلود مدرک</span>
                  </div>
                  <div className="sd-upload-area">
                    <span className="sd-upload-text">آپلود مدرک</span>
                  </div>
                  <div className="sd-upload-area">
                    <span className="sd-upload-text">آپلود مدرک</span>
                  </div>
                </div>

                {/* Note Section */}
                <div className="sd-note-section">
                  <h4 className="sd-note-title">دقت کنید</h4>
                  <ul className="sd-note-list">
                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</li>
                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</li>
                    <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</li>
                    <li className="sd-note-item--warning">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</li>
                  </ul>
                </div>
              </aside>
          </div>
        </div>
      </main>
    </SellerShell>
  );
};

export default SendDocumentsPage;
