import React from 'react';

const StepBar: React.FC = () => {
  const steps = [
    { id: 'profile', label: 'پروفایل', isActive: true },
    { id: 'email', label: 'تایید ایمیل', isActive: false },
    { id: 'contract', label: 'ارسال قرارداد', isActive: false },
    { id: 'account', label: 'ثبت شماره حساب', isActive: false },
    { id: 'documents', label: 'ارسال مدارک', isActive: false },
  ];

  return (
    <div className="signup__stepbar">
      {steps.map((step, index) => (
        <div key={step.id} className={`step ${step.isActive ? 'step--active' : ''}`}>
          <div className={`step__icon ${step.isActive ? 'step__icon--active' : 'step__icon--idle'}`}>
            <div className="icon-placeholder"></div>
          </div>
          <div className="step__caption">{step.label}</div>
          {index < steps.length - 1 && <div className="step__connector"></div>}
        </div>
      ))}
    </div>
  );
};

export default StepBar;
