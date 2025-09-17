import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SendContractPage.css';

const SendContractPage: React.FC = () => {
  const navigate = useNavigate();
  const [isContractAccepted, setIsContractAccepted] = useState(false);
  const [signatureFile, setSignatureFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSignatureFile(file);
    }
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

  const handleSubmit = () => {
    if (!signatureFile || !isContractAccepted) {
      alert('لطفاً امضا را آپلود کنید و قرارداد را قبول کنید');
      return;
    }
    
    alert('قرارداد با موفقیت ثبت شد!');
    navigate('/send-documents');
  };

  return (
    <div className="contract-page">
      {/* Top Stepper */}
      <div className="contract-stepper">
        <div className="contract-stepper__item contract-stepper__item--done">
          <div className="contract-stepper__icon">
            <img src="/icons/PROfile.svg" alt="Profile" />
          </div>
          <div className="contract-stepper__dot"></div>
          <span className="contract-stepper__label">پروفایل</span>
        </div>
        
        <div className="contract-stepper__item contract-stepper__item--done">
          <div className="contract-stepper__icon">
            <img src="/icons/Vector (1).svg" alt="Email" />
          </div>
          <div className="contract-stepper__dot"></div>
          <span className="contract-stepper__label">تایید ایمیل</span>
        </div>
        
        <div className="contract-stepper__item contract-stepper__item--active">
          <div className="contract-stepper__icon">
            <img src="/icons/Group.svg" alt="Contract" />
          </div>
          <div className="contract-stepper__dot"></div>
          <span className="contract-stepper__label">ارسال قرارداد</span>
        </div>
        
        <div className="contract-stepper__item">
          <div className="contract-stepper__icon">
            <img src="/icons/Vector (2).svg" alt="Bank" />
          </div>
          <div className="contract-stepper__dot"></div>
          <span className="contract-stepper__label">ثبت شماره حساب</span>
        </div>
        
        <div className="contract-stepper__item">
          <div className="contract-stepper__icon">
            <img src="/icons/Vector (3).svg" alt="Documents" />
          </div>
          <div className="contract-stepper__dot"></div>
          <span className="contract-stepper__label">ارسال مدارک</span>
        </div>
        
        <div className="contract-stepper__item">
          <div className="contract-stepper__icon">
            <img src="/icons/Vector (4).svg" alt="Training" />
          </div>
          <div className="contract-stepper__dot"></div>
          <span className="contract-stepper__label">آموزش</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="contract-content">
        {/* Left Panel - Signature Upload */}
        <div className="contract-signature-panel">
          <h3 className="contract-panel-title">امضای قرارداد شماره یک</h3>
          
          <div className="signature-upload-area">
            <input
              type="file"
              id="signature-upload"
              accept="image/*"
              onChange={handleFileUpload}
              className="signature-upload-input"
            />
            <label htmlFor="signature-upload" className="signature-upload-label">
              <div className="signature-upload-box">
                <span className="signature-upload-text">آپلود امضا</span>
              </div>
            </label>
          </div>
          
          <div className="signature-description">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
            </p>
          </div>
        </div>

        {/* Right Panel - Contract Details */}
        <div className="contract-details-panel">
          <h3 className="contract-panel-title">متن قرارداد شماره یک</h3>
          
          <div className="contract-text-container">
            <div className="contract-text">
              <h4>ماده 1- موضوع ماده</h4>
              <p>
                نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
              </p>
              
              <h4>ماده 2- موضوع ماده</h4>
              <p>
                نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
              </p>
              
              <h4>ماده 3- موضوع ماده</h4>
              <p>
                نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
              </p>
              
              <h4>ماده 4- موضوع ماده</h4>
              <p>
                نمونه لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.
              </p>
            </div>
          </div>
          
          <div className="contract-acceptance">
            <label className="contract-checkbox-label">
              <input
                type="checkbox"
                checked={isContractAccepted}
                onChange={(e) => setIsContractAccepted(e.target.checked)}
                className="contract-checkbox"
              />
              <span className="contract-checkbox-text">
                قرارداد را به صورت کامل خوانده و آن را قبول دارم
              </span>
            </label>
          </div>
          
          <div className="contract-actions">
            <button
              onClick={handleDownloadContract}
              className="contract-btn contract-btn--secondary"
            >
              دانلود قرارداد
            </button>
            <button
              onClick={handleSubmit}
              disabled={!signatureFile || !isContractAccepted}
              className="contract-btn contract-btn--primary"
            >
              <span className="contract-btn__icon">✓</span>
              ثبت اطلاعات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendContractPage;