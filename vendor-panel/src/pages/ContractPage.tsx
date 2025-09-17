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
      <aside className="contract-sidebar contract-sidebar--blurred">
        <div className="contract-sidebar__header">
          <div className="contract-sidebar__avatar">
            <span className="icon"><User size={18} /></span>
            <div className="contract-sidebar__badge">24</div>
          </div>
          <span className="contract-sidebar__name">نام فروشنده</span>
        </div>
        
        <nav className="contract-sidebar__nav">
          <div className="contract-sidebar__section">
            <h3 className="contract-sidebar__section-title">کالا</h3>
            <ul className="contract-sidebar__list">
              <li className="contract-sidebar__item contract-sidebar__item--active">
                <span className="icon"><Home size={18} /></span>
                <span className="contract-sidebar__text">پیشخوان</span>
              </li>
              <li className="contract-sidebar__item">
                <span className="icon"><Search size={18} /></span>
                <span className="contract-sidebar__text">جستجو و ثبت کالا</span>
              </li>
              <li className="contract-sidebar__item">
                <span className="icon"><Package size={18} /></span>
                <span className="contract-sidebar__text">مدیریت کالا و افزودن تنوع</span>
              </li>
              <li className="contract-sidebar__item">
                <span className="icon"><Tag size={18} /></span>
                <span className="contract-sidebar__text">مدیریت تنوع و قیمت گذاری</span>
              </li>
              <li className="contract-sidebar__item">
                <span className="icon"><BarChart3 size={18} /></span>
                <span className="contract-sidebar__text">گزارش موجودی کالا</span>
              </li>
            </ul>
          </div>

          <div className="contract-sidebar__section">
            <h3 className="contract-sidebar__section-title">سفارش‌ها</h3>
            <ul className="contract-sidebar__list">
              <li className="contract-sidebar__item">
                <span className="icon"><ClipboardList size={18} /></span>
                <span className="contract-sidebar__text">مدیریت سفارشات جاری</span>
              </li>
              <li className="contract-sidebar__item">
                <span className="icon"><Clock size={18} /></span>
                <span className="contract-sidebar__text">تاریخچه سفارشات</span>
              </li>
            </ul>
          </div>

          <div className="contract-sidebar__section">
            <h3 className="contract-sidebar__section-title">مالی</h3>
            <ul className="contract-sidebar__list">
              <li className="contract-sidebar__item">
                <span className="icon"><Receipt size={18} /></span>
                <span className="contract-sidebar__text">صورتحساب ها</span>
              </li>
            </ul>
          </div>

          <div className="contract-sidebar__section">
            <h3 className="contract-sidebar__section-title">تحلیل عملکرد</h3>
            <ul className="contract-sidebar__list">
              <li className="contract-sidebar__item">
                <span className="icon"><TrendingUp size={18} /></span>
                <span className="contract-sidebar__text">فروش و درآمد</span>
              </li>
              <li className="contract-sidebar__item">
                <span className="icon"><RotateCcw size={18} /></span>
                <span className="contract-sidebar__text">مرجوعی</span>
              </li>
            </ul>
          </div>

          <div className="contract-sidebar__section">
            <h3 className="contract-sidebar__section-title">راهنما</h3>
            <ul className="contract-sidebar__list">
              <li className="contract-sidebar__item">
                <span className="icon"><AlertTriangle size={18} /></span>
                <span className="contract-sidebar__text">کالاهای غیر مجاز</span>
              </li>
            </ul>
          </div>

          <div className="contract-sidebar__section">
            <h3 className="contract-sidebar__section-title">پشتیبانی</h3>
            <ul className="contract-sidebar__list">
              <li className="contract-sidebar__item">
                <span className="icon"><Headphones size={18} /></span>
                <span className="contract-sidebar__text">درخواست پشتیبانی</span>
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
                <span className="icon"><User size={18} /></span>
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">پروفایل</span>
            </div>
            <div className="contract-stepper__line contract-stepper__line--green"></div>
            <div className="contract-stepper__item contract-stepper__item--done">
              <div className="contract-stepper__icon">
                <span className="icon"><Mail size={18} /></span>
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">تایید ایمیل</span>
            </div>
            <div className="contract-stepper__line contract-stepper__line--green"></div>
            <div className="contract-stepper__item contract-stepper__item--active">
              <div className="contract-stepper__icon">
                <span className="icon"><FileText size={18} /></span>
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">ارسال قرارداد</span>
            </div>
            <div className="contract-stepper__line"></div>
            <div className="contract-stepper__item contract-stepper__item--future">
              <div className="contract-stepper__icon">
                <span className="icon"><CreditCard size={18} /></span>
              </div>
              <div className="contract-stepper__dot"></div>
              <span className="contract-stepper__label">ثبت شماره حساب</span>
            </div>
            <div className="contract-stepper__line"></div>
            <div className="contract-stepper__item contract-stepper__item--future">
              <div className="contract-stepper__icon">
                <span className="icon"><Upload size={18} /></span>
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
                    <button type="submit" className="contract-btn contract-btn--primary">
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