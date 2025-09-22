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
import "./ContractPage.css";

const ContractPage: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [contract1Accepted, setContract1Accepted] = useState(false);
  const [contract2Accepted, setContract2Accepted] = useState(false);
  const [signature1, setSignature1] = useState<File | null>(null);
  const [signature2, setSignature2] = useState<File | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, []);

  const handleSignature1Upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSignature1(file);
    }
  };

  const handleSignature2Upload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSignature2(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to bank account page
    navigate('/bank-account');
  };

  return (
    <div className="contract-layout">
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
      <main className="contract-main">
        {/* Content */}
        <div className="contract-content">
          {/* Stepper */}
          <section className="contract-stepper">
            <div className="contract-stepper__item contract-stepper__item--done">
              <div className="contract-stepper__icon">
                <img src="/icons/PROfile.svg" alt="Profile" />
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">پروفایل</span>
            </div>
            <div className="contract-stepper__line"></div>
            <div className="contract-stepper__item contract-stepper__item--done">
              <div className="contract-stepper__icon">
                <img src="/icons/Vector (1).svg" alt="Email" />
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">تایید ایمیل</span>
            </div>
            <div className="contract-stepper__line"></div>
            <div className="contract-stepper__item contract-stepper__item--active">
              <div className="contract-stepper__icon">
                <img src="/icons/Group.svg" alt="Contract" />
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">ارسال قرارداد</span>
            </div>
            <div className="contract-stepper__line"></div>
            <div className="contract-stepper__item">
              <div className="contract-stepper__icon">
                <img src="/icons/Vector (2).svg" alt="Bank" />
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">ثبت شماره حساب</span>
            </div>
            <div className="contract-stepper__line"></div>
            <div className="contract-stepper__item">
              <div className="contract-stepper__icon">
                <img src="/icons/Vector (3).svg" alt="Docs" />
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">ارسال مدارک</span>
            </div>
          </section>

          {/* Contract Content */}
          <div className="contract-sections">
            {/* Contract 1 */}
            <div className="contract-section">
              {/* Signature Section - Left Side */}
              <div className="contract-signature-section">
                <h3 className="contract-signature-title">امضای قرارداد شماره یک</h3>
                <div className="contract-signature-upload">
                  <input 
                    type="file" 
                    id="signature1" 
                    accept="image/*" 
                    onChange={handleSignature1Upload}
                    className="contract-signature-input"
                  />
                  <label htmlFor="signature1" className="contract-signature-label">
                    {signature1 ? (
                      <img src={URL.createObjectURL(signature1)} alt="Signature" className="contract-signature-preview" />
                    ) : (
                      <span className="contract-signature-placeholder">آپلود امضا</span>
                    )}
                  </label>
                </div>
                <p className="contract-signature-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>

              {/* Contract Text Section - Right Side */}
              <div className="contract-text-section">
                <h2 className="contract-text-title">متن قرارداد شماره یک</h2>
                <div className="contract-text-content">
                  <p>ماده 1- موضوع ماده</p>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  
                  <p>ماده 2 - موضوع ماده</p>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  
                  <p>ماده 3 - موضوع ماده</p>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  
                  <p>ماده 4- موضوع ماده</p>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                
                <div className="contract-actions">
                  <label className="contract-checkbox">
                    <input 
                      type="checkbox" 
                      checked={contract1Accepted}
                      onChange={(e) => setContract1Accepted(e.target.checked)}
                    />
                    <span className="contract-checkbox__text">قرارداد را به صورت کامل خوانده و آن را قبول دارم</span>
                  </label>
                  
                  <div className="contract-buttons">
                    <button type="button" className="contract-btn contract-btn--primary" onClick={handleSubmit}>
                      <span className="contract-btn__icon">✓</span>
                      ثبت اطلاعات
                    </button>
                    <button type="button" className="contract-btn contract-btn--secondary">
                      <span className="contract-btn__icon">⬇</span>
                      دانلود قرارداد
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract 2 */}
            <div className="contract-section">
              {/* Signature Section - Left Side */}
              <div className="contract-signature-section">
                <h3 className="contract-signature-title">امضای قرارداد شماره دو</h3>
                <div className="contract-signature-upload">
                  <input 
                    type="file" 
                    id="signature2" 
                    accept="image/*" 
                    onChange={handleSignature2Upload}
                    className="contract-signature-input"
                  />
                  <label htmlFor="signature2" className="contract-signature-label">
                    {signature2 ? (
                      <img src={URL.createObjectURL(signature2)} alt="Signature" className="contract-signature-preview" />
                    ) : (
                      <span className="contract-signature-placeholder">آپلود امضا</span>
                    )}
                  </label>
                </div>
                <p className="contract-signature-text">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>

              {/* Contract Text Section - Right Side */}
              <div className="contract-text-section">
                <h2 className="contract-text-title">متن قرارداد شماره دو</h2>
                <div className="contract-text-content">
                  <p>مادة 1- موضوع ماده</p>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                  
                  <p>مادة 2 - موضوع ماده</p>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContractPage;