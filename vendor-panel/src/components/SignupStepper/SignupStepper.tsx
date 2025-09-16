import React from "react";
import "./SignupStepper.css";

interface Step {
  icon: string;
  label: string;
  status: "current" | "next" | "completed" | "disabled";
  accent?: string;
}

interface SignupStepperProps {
  steps: Step[];
  variant?: "icon-top" | "icon-left" | "icon-right";
  separator?: "line" | "arrow" | "dot" | "none";
  className?: string;
}

const SignupStepper: React.FC<SignupStepperProps> = ({
  steps,
  variant = "icon-top",
  separator = "line",
  className = ""
}) => {
  const getStepClasses = (step: Step, index: number) => {
    const baseClasses = ["ss-step"];
    const statusClasses = [`ss-step--${step.status}`];
    const variantClasses = [`ss-step--${variant}`];
    const accentClasses = step.accent ? [`ss-step--accent-${step.accent}`] : [];
    
    return [...baseClasses, ...statusClasses, ...variantClasses, ...accentClasses].join(" ");
  };

  const getSeparatorClasses = () => {
    const baseClasses = ["ss-separator"];
    const separatorClasses = [`ss-separator--${separator}`];
    
    return [...baseClasses, ...separatorClasses].join(" ");
  };

  return (
    <div className={`ss-container ${className}`}>
      <div className="ss-card">
        <div className="ss-steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={getStepClasses(step, index)}>
                <div className="ss-step__icon">
                  <img src={step.icon} alt={step.label} className="ss-step__icon-img" />
                </div>
                <div className="ss-step__content">
                  <span className="ss-step__label">{step.label}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={getSeparatorClasses()} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignupStepper;
