import React, { useState } from 'react';

const FormCard: React.FC = () => {
  const [isReal, setIsReal] = useState(true);

  return (
    <div className="form-card">
      {/* Header */}
      <div className="form-card__header">
        <h1 className="form-card__title">اطلاعات کاربری شما</h1>
        <div className="form-card__tabs">
          <button 
            className={`tab ${isReal ? 'tab--active' : ''}`}
            onClick={() => setIsReal(true)}
          >
            <div className="tab__indicator"></div>
            حقیقی
          </button>
          <button 
            className={`tab ${!isReal ? 'tab--active' : ''}`}
            onClick={() => setIsReal(false)}
          >
            <div className="tab__indicator"></div>
            حقوقی
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <div className="form-card__fields">
        {isReal ? (
          // Real person fields
          <>
            <div className="field-group">
              <label className="field-label">نام کاربری</label>
              <input type="text" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">نام</label>
              <input type="text" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">نام خانوادگی</label>
              <input type="text" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">نام نمایشی</label>
              <input type="text" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">تاریخ تولد</label>
              <input type="date" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">جنسیت</label>
              <select className="field-input">
                <option value="">انتخاب کنید</option>
                <option value="male">مرد</option>
                <option value="female">زن</option>
              </select>
            </div>
          </>
        ) : (
          // Legal entity fields
          <>
            <div className="field-group">
              <label className="field-label">نام شرکت</label>
              <input type="text" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">شناسه ملی شرکت</label>
              <input type="text" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">نام کاربری</label>
              <input type="text" className="field-input" />
            </div>
            <div className="field-group">
              <label className="field-label">نام نمایشی</label>
              <input type="text" className="field-input" />
            </div>
          </>
        )}
      </div>

      {/* Dotted Divider */}
      <div className="form-card__divider"></div>

      {/* Bio Textarea */}
      <div className="field-group field-group--full">
        <label className="field-label">متن بیوگرافی</label>
        <textarea 
          className="field-textarea" 
          placeholder="درباره خودتان بنویسید..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="form-card__actions">
        <button className="btn--primary">
          <div className="icon-placeholder"></div>
          ثبت اطلاعات
        </button>
      </div>
    </div>
  );
};

export default FormCard;
