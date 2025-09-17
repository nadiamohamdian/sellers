import React from "react";
import SignupStepper from "../components/SignupStepper/SignupStepper";

const SignupStepperDemo: React.FC = () => {
  const steps = [
    { 
      icon: "/icons/PROfile.svg", 
      label: "پروفایل", 
      status: "next" as const
    },
    { 
      icon: "/icons/Vector (1).svg", 
      label: "تایید ایمیل", 
      status: "current" as const, 
      accent: "brand" 
    },
    { 
      icon: "/icons/Group.svg", 
      label: "ارسال قرارداد", 
      status: "next" as const 
    },
    { 
      icon: "/icons/Vector (2).svg", 
      label: "ثبت شماره حساب", 
      status: "next" as const 
    },
    { 
      icon: "/icons/Vector (3).svg", 
      label: "ارسال مدارک", 
      status: "next" as const 
    }
  ];

  return (
    <div style={{ padding: "40px 0", background: "var(--bg-base)", minHeight: "100vh" }}>
      <SignupStepper 
        steps={steps}
        variant="icon-top"
        separator="line"
      />
    </div>
  );
};

export default SignupStepperDemo;
