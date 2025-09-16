import React from 'react';

export default function SupportLinks() {
  return (
    <div className="flex items-center justify-center gap-4 mt-2">
      <a 
        href="#" 
        className="text-brand-primary text-[12px] font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded"
      >
        راهنمای ثبت‌نام
      </a>
      <div className="w-px h-4 bg-[#ED1C24]"></div>
      <a 
        href="#" 
        className="text-brand-primary text-[12px] font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded"
      >
        تماس با پشتیبانی
      </a>
    </div>
  );
}