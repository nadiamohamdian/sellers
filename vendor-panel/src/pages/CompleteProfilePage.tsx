import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes';

export default function CompleteProfilePage() {
  const navigate = useNavigate();

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // مانع رفرش صفحه
    // TODO: اگر ولیدیشن/ارسال API داری، قبل از navigate انجام بده و در صورت موفقیت برو
    navigate(ROUTES.sendDocuments);
  };

  return (
    <div className="complete-profile-page">
      <h1>تکمیل پروفایل</h1>
      
      {/* محتوای صفحه تکمیل پروفایل */}
      <div className="profile-form">
        {/* فرم اطلاعات کاربر */}
        <form onSubmit={handleSubmit}>
          {/* فیلدهای فرم */}
        </form>
        
        {/* دکمه ثبت اطلاعات */}
        <button
          type="button" /* مهم: دکمه را باتن بگذار تا فرم submit نشود */
          onClick={() => handleSubmit()}
          className="btn btn-primary"
        >
          ثبت اطلاعات
        </button>
      </div>
    </div>
  );
}
