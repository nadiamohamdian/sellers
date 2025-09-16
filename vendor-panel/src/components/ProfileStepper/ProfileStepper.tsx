import React from "react";
import "./ProfileStepper.css";

interface Step {
  icon: string;
  label: string;
  status: "current" | "next" | "completed" | "disabled";
  accent?: string;
}

interface ProfileStepperProps {
  steps: Step[];
  variant?: "icon-top" | "icon-left" | "icon-right";
  separator?: "line" | "arrow" | "dot" | "none";
  className?: string;
}

const ProfileStepper: React.FC<ProfileStepperProps> = ({
  steps,
  variant = "icon-top",
  separator = "line",
  className = ""
}) => {
  const getStepClasses = (step: Step, index: number) => {
    const baseClasses = ["ps-step"];
    const statusClasses = [`ps-step--${step.status}`];
    const variantClasses = [`ps-step--${variant}`];
    const accentClasses = step.accent ? [`ps-step--accent-${step.accent}`] : [];
    
    return [...baseClasses, ...statusClasses, ...variantClasses, ...accentClasses].join(" ");
  };

  const getSeparatorClasses = () => {
    const baseClasses = ["ps-separator"];
    const separatorClasses = [`ps-separator--${separator}`];
    
    return [...baseClasses, ...separatorClasses].join(" ");
  };

  return (
    <div className={`ps-container ${className}`}>
      <div className="ps-card">
        <div className="ps-steps">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={getStepClasses(step, index)}>
                <div className="ps-step__icon">
                  <img src={step.icon} alt={step.label} className="ps-step__icon-img" />
                </div>
                <div className="ps-step__content">
                  <span className="ps-step__label">{step.label}</span>
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

export default ProfileStepper;
