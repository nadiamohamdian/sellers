import React from 'react';
import loginIllustration from '../../assets/react.svg';

export default function BrandPanel() {
  return (
    <div className="lg:order-1 hidden lg:grid">
      <div className="h-full rounded-lg overflow-hidden grid place-items-center py-8 px-6 bg-gradient-to-b from-[rgba(0,145,208,0.20)] to-[rgba(0,145,208,0.80)]">
        <div className="text-center">
          {/* Product Illustration */}
          <div className="mb-6">
            <img 
              src={loginIllustration} 
              alt="تصویر موبایل با دست‌های نگهدارنده"
              className="w-[316px] h-[316px] object-contain max-w-full mx-auto"
            />
          </div>
          
          {/* Brand Caption */}
          <h1 className="text-white text-[18px] font-bold tracking-wide">
            SELLER CENTER
          </h1>
        </div>
      </div>
    </div>
  );
}