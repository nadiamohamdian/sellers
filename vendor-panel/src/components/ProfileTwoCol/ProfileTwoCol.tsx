import React, { useState } from "react";
import "./ProfileTwoCol.css";

interface UploadItem {
  id: string;
  label: string;
  accept: string;
  radius: string;
  dashed: boolean;
  height: number;
}

interface ButtonItem {
  label: string;
  variant: "soft" | "brand";
  radius: string;
  shadow?: string;
  icon?: string;
}

interface InputItem {
  name: string;
  label: string;
  type?: "input" | "date" | "select" | "textarea";
  options?: string[];
  rows?: number;
  radius?: string;
}

interface ProfileTwoColProps {
  className?: string;
}

const ProfileTwoCol: React.FC<ProfileTwoColProps> = ({ className = "" }) => {
  const [personType, setPersonType] = useState<"real" | "legal">("real");
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    display_name: "",
    birthdate: "",
    gender: "",
    company_name: "",
    company_username: "",
    company_national_id: "",
    company_rep: "",
    bio: ""
  });
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (id: string, file: File) => {
    setUploadedFiles(prev => ({ ...prev, [id]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { personType, formData, uploadedFiles });
  };

  const uploadItems: UploadItem[] = [
    {
      id: "upload-logo",
      label: "آپلود لوگو\n180×180",
      accept: ".png,.jpg,.svg",
      radius: "md",
      dashed: true,
      height: 120
    },
    {
      id: "upload-banner",
      label: "آپلود بنر بزرگ\n1280×380",
      accept: ".png,.jpg,.svg",
      radius: "md",
      dashed: true,
      height: 120
    }
  ];

  const actionButtons: ButtonItem[] = [
    {
      label: "تغییر شماره موبایل",
      variant: "soft",
      radius: "md"
    },
    {
      label: "تغییر رمز عبور",
      variant: "soft",
      radius: "md"
    }
  ];

  const submitButton: ButtonItem = {
    label: "ثبت اطلاعات",
    variant: "brand",
    radius: "md",
    shadow: "glowBrand",
    icon: "/img/placeholder-check.svg"
  };

  const realPersonInputs: InputItem[] = [
    { name: "username", label: "نام کاربری" },
    { name: "first_name", label: "نام" },
    { name: "last_name", label: "نام خانوادگی" },
    { name: "display_name", label: "نام نمایشی" },
    { name: "name": "birthdate", label: "تاریخ تولد", type: "date" },
    { name: "gender", label: "جنسیت", type: "select", options: ["نامشخص", "زن", "مرد"] }
  ];

  const legalPersonInputs: InputItem[] = [
    { name: "company_name", label: "نام شرکت" },
    { name: "company_username", label: "نام کاربری" },
    { name: "company_national_id", label: "شناسه ملی شرکت" },
    { name: "company_rep", label: "نام نمایشی" }
  ];

  return (
    <div className={`ptc-container ${className}`}>
      <div className="ptc-grid">
        {/* Left Column - Uploads Card */}
        <div className="ptc-column">
          <div className="ptc-card">
            {/* Banner */}
            <div className="ptc-banner">
              <div className="ptc-banner__overlap-avatar" />
            </div>

            {/* Upload Grid */}
            <div className="ptc-upload-grid">
              {uploadItems.map((item) => (
                <div key={item.id} className="ptc-upload-item">
                  <input
                    type="file"
                    id={item.id}
                    accept={item.accept}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileUpload(item.id, file);
                    }}
                    className="ptc-upload-input"
                  />
                  <label
                    htmlFor={item.id}
                    className={`ptc-upload-label ptc-upload-label--${item.radius} ${item.dashed ? 'ptc-upload-label--dashed' : ''}`}
                    style={{ height: item.height }}
                  >
                    <div className="ptc-upload-content">
                      <div className="ptc-upload-icon">📁</div>
                      <div className="ptc-upload-text">
                        {item.label.split('\n').map((line, index) => (
                          <div key={index}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="ptc-actions">
              {actionButtons.map((button, index) => (
                <button
                  key={index}
                  className={`ptc-btn ptc-btn--${button.variant} ptc-btn--${button.radius}`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Profile Form Card */}
        <div className="ptc-column">
          <div className="ptc-card">
            <form onSubmit={handleSubmit}>
              {/* Header with Segmented Control */}
              <div className="ptc-form-header">
                <h4 className="ptc-form-title">اطلاعات کاربری شما</h4>
                <div className="ptc-segmented">
                  <button
                    type="button"
                    className={`ptc-segmented__option ${personType === "real" ? "ptc-segmented__option--active" : ""}`}
                    onClick={() => setPersonType("real")}
                  >
                    حقیقی
                  </button>
                  <button
                    type="button"
                    className={`ptc-segmented__option ${personType === "legal" ? "ptc-segmented__option--active" : ""}`}
                    onClick={() => setPersonType("legal")}
                  >
                    حقوقی
                  </button>
                </div>
              </div>

              {/* Form Grid */}
              <div className="ptc-form-grid">
                {realPersonInputs.map((input) => (
                  <div key={input.name} className="ptc-form-field">
                    <label className="ptc-form-label">{input.label}</label>
                    {input.type === "select" ? (
                      <select
                        name={input.name}
                        value={formData[input.name as keyof typeof formData]}
                        onChange={(e) => handleInputChange(input.name, e.target.value)}
                        className="ptc-form-select"
                      >
                        {input.options?.map((option, index) => (
                          <option key={index} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : input.type === "date" ? (
                      <input
                        type="date"
                        name={input.name}
                        value={formData[input.name as keyof typeof formData]}
                        onChange={(e) => handleInputChange(input.name, e.target.value)}
                        className="ptc-form-input"
                      />
                    ) : (
                      <input
                        type="text"
                        name={input.name}
                        value={formData[input.name as keyof typeof formData]}
                        onChange={(e) => handleInputChange(input.name, e.target.value)}
                        className="ptc-form-input"
                      />
                    )}
                  </div>
                ))}

                {/* Legal Person Fields */}
                {personType === "legal" && legalPersonInputs.map((input) => (
                  <div key={input.name} className="ptc-form-field">
                    <label className="ptc-form-label">{input.label}</label>
                    <input
                      type="text"
                      name={input.name}
                      value={formData[input.name as keyof typeof formData]}
                      onChange={(e) => handleInputChange(input.name, e.target.value)}
                      className="ptc-form-input"
                    />
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="ptc-divider" />

              {/* Bio Textarea */}
              <div className="ptc-form-field ptc-form-field--full">
                <label className="ptc-form-label">متن بیوگرافی</label>
                <textarea
                  name="bio"
                  rows={5}
                  value={formData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  className="ptc-form-textarea"
                />
              </div>

              {/* Submit Button */}
              <div className="ptc-form-actions">
                <button
                  type="submit"
                  className={`ptc-btn ptc-btn--${submitButton.variant} ptc-btn--${submitButton.radius}`}
                  style={{
                    boxShadow: submitButton.shadow === "glowBrand" ? "var(--shadow-glow-brand)" : undefined
                  }}
                >
                  {submitButton.icon && (
                    <img src={submitButton.icon} alt="" className="ptc-btn__icon" />
                  )}
                  {submitButton.label}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTwoCol;
