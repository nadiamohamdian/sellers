import React from "react";
import { SignupStepper } from "../components/SignupStepper";

const SignupStepperDemo: React.FC = () => {
  const steps = [
    { 
      icon: "/img/placeholder-user.svg", 
      label: "پروفایل", 
      status: "next" as const
    },
    { 
      icon: "/img/placeholder-mail.svg", 
      label: "تایید ایمیل", 
      status: "current" as const, 
      accent: "brand" 
    },
    { 
      icon: "/img/placeholder-contract.svg", 
      label: "ارسال قرارداد", 
      status: "next" as const 
    },
    { 
      icon: "/img/placeholder-bank.svg", 
      label: "ثبت شماره حساب", 
      status: "next" as const 
    },
    { 
      icon: "/img/placeholder-docs.svg", 
      label: "ارسال مدارک", 
      status: "next" as const 
    },
    { 
      icon: "/img/placeholder-play.svg", 
      label: "آموزش", 
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
