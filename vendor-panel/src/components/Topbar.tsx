// src/components/Topbar.tsx
import React from 'react';

interface StepProps {
  icon: string;
  label: string;
  isActive: boolean;
  isCompleted?: boolean;
}

function Step({ icon, label, isActive, isCompleted = false }: StepProps) {
  return (
    <div className="flex flex-col items-center relative min-w-[200px]">
      {/* آیکون */}
      <div 
        className={`w-16 h-16 rounded-[10px] flex items-center justify-center mb-3 ${
          isActive 
            ? 'bg-blue-600' 
            : isCompleted 
            ? 'bg-green-600' 
            : 'bg-gray-200'
        }`}
      >
        <img 
          src={icon} 
          alt={label} 
          className={`w-8 h-8 ${isActive ? 'brightness-0 invert' : 'opacity-60'}`}
        />
      </div>
      
      {/* نقطه */}
      <div 
        className={`w-4 h-4 rounded-full mb-2 ${
          isActive || isCompleted ? 'bg-blue-600' : 'bg-green-600'
        }`}
      />
      
      {/* برچسب */}
      <span 
        className={`text-base font-medium text-center ${
          isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
        }`}
      >
        {label}
      </span>
      
      {/* خط اتصال */}
      <div 
        className={`absolute top-8 left-1/2 w-full h-0.5 ${
          isActive || isCompleted ? 'bg-blue-600' : 'bg-gray-300'
        }`}
        style={{ transform: 'translateX(50%)' }}
      />
    </div>
  );
}

export default function Topbar() {
  const steps = [
    { key: "profile", label: "پروفایل", icon: "vendor-panel/public/icons/Vector.svg", isActive: true },
    { key: "verify-email", label: "تایید ایمیل", icon: "/icons/Vector (1).svg", isActive: false },
    { key: "send-contract", label: "ارسال قرارداد", icon: "/icons/Vector (2).svg", isActive: false },
    { key: "bank", label: "ثبت شماره حساب", icon: "/icons/Vector (3).svg", isActive: false },
    { key: "docs", label: "ارسال مدارک", icon: "/icons/Vector (4).svg", isActive: false },
    { key: "edu", label: "آموزش", icon: "/icons/Vector.svg", isActive: false },
  ];

  return (
    <div 
      className="shadow-sm"
      dir="rtl"
      style={{ 
        width: '1360px',
        height: '216px',
        top: '50px',
        left: '50px',
        position: 'absolute',
        background: '#F6F7FB',
        borderRadius: '20px',
        opacity: 1,
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className="flex items-center justify-between relative w-full">
        {steps.map((step, index) => (
          <React.Fragment key={step.key}>
            <Step
              icon={step.icon}
              label={step.label}
              isActive={step.isActive}
              isCompleted={index < steps.findIndex(s => s.isActive)}
            />
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-300 mx-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}