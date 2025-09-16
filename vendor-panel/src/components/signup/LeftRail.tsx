import React from 'react';

const LeftRail: React.FC = () => {
  return (
    <div className="left-rail">
      {/* Blue Profile Banner */}
      <div className="left-rail__banner">
        <div className="icon-placeholder"></div>
        <div className="left-rail__banner-knob"></div>
      </div>

      {/* Upload Tiles */}
      <div className="left-rail__uploads">
        <div className="upload-tile">
          <div className="upload-tile__text">آپلود لوگو</div>
          <div className="upload-tile__dimensions">180 × 180</div>
        </div>
        <div className="upload-tile">
          <div className="upload-tile__text">آپلود بنر بزرگ</div>
          <div className="upload-tile__dimensions">380 × 1280</div>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="left-rail__buttons">
        <button className="btn--ghost">تغییر رمز عبور</button>
        <button className="btn--ghost">تغییر شماره موبایل</button>
      </div>
    </div>
  );
};

export default LeftRail;
