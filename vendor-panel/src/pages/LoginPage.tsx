import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// اگر این کامپوننت را داری استفاده کن؛ اگر نداری می‌تونی موقتاً از یک <input> ساده استفاده کنی
import OTPInput from "@/components/OTPInput";

export default function LoginPage() {
    const nav = useNavigate();

    // مرحله فعلی: phone → otp
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(0);

    // فقط رقم، حداکثر 11، شروع با 09
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setPhone(onlyDigits);
    };

    const phoneValid = /^09\d{9}$/.test(phone);
    const otpValid = /^\d{6}$/.test(otp);

    // Timer functionality
    useEffect(() => {
        if (step === "otp" && timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [step, timer]);

    const startTimer = () => {
        setTimer(120); // 2 minutes
    };

    const handleEditPhone = () => {
        setStep("phone");
        setOtp("");
        setTimer(0);
    };

    const handlePrimaryClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (step === "phone") {
            if (!phoneValid) return; // نامعتبر → کاری نکن
            // اینجا معمولاً API ارسال کد را می‌زنی
            setStep("otp");
            startTimer();
            return;
        }

        // step === 'otp'
        if (!otpValid) return;

        // اگر گارد احراز هویت داری، یک توکن تست بگذار تا به login برنگردی
        localStorage.setItem("token", "dev-token");
        // برای تست/استفاده بعدی، شماره را هم نگه می‌داریم
        localStorage.setItem("phone", phone);

        // رفتن به صفحه ثبت نام
        nav("/signup", { replace: true });
    };

    return (
        <div
            dir="rtl"
            style={{
                width: "100%",
                minHeight: "100vh",
                background: "#F5F5F5",
                fontFamily: "IRANYekan, Yekan Bakh, system-ui, sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            {/* کانتینر اصلی فرم */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "1000px",
                    height: "600px",
                    background: "white",
                    borderRadius: "24px",
                    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.12)",
                    display: "flex",
                    overflow: "hidden",
                }}
            >
                {/* بخش فرم سمت راست */}
                <div
                    style={{
                        width: "50%",
                        padding: "60px 50px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        background: "#FAFAFA",
                    }}
                >
                    {/* تیتر */}
                    <div
                        style={{
                            color: "#606060",
                            fontSize: "28px",
                            fontWeight: 700,
                            marginBottom: "20px",
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        {step === "phone" ? "ورود یا ثبت نام" : "رمز یک بار مصرف"}
                    </div>

                    {/* متن توضیح */}
                    <div
                        style={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontWeight: "400",
                            lineHeight: "1.6",
                            marginBottom: "40px",
                            textAlign: "center",
                        }}
                    >
                        {step === "phone" ? (
                            <>
                                سلام!<br />
                                برای فروش در استاویتا آماده‌اید؟<br />
                                شماره موبایل با ایمیل خود را وارد کنید.
                            </>
                        ) : (
                            <>
                                رمز را به شماره زیر پیامک کردیم. آن را وارد کنید:
                            </>
                        )}
                    </div>

                    {step === "otp" && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "24px",
                                gap: "12px",
                            }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                    height: "48px",
                                    background: "#E8E8E8",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#2D2D2D",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                }}
                            >
                                {phone}
                            </div>
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    background: "#E3F2FD",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}
                                onClick={handleEditPhone}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#2196F3"/>
                                </svg>
                            </div>
                        </div>
                    )}

                    {/* لیبل فیلد */}
                    <div
                        style={{
                            color: "#6B6B6B",
                            fontSize: "16px",
                            fontWeight: 400,
                            marginBottom: "10px",
                            textAlign: "center",
                        }}
                    >
                        {step === "phone" ? "شماره موبایل با ایمیل" : "کد تأیید ۶ رقمی"}
                    </div>

                    {/* باکس ورودی */}
                    <div
                        style={{
                            width: "100%",
                            marginBottom: "24px",
                        }}
                    >
                        {step === "phone" ? (
                            <div
                                style={{
                                    width: "100%",
                                    height: "56px",
                                    background: "white",
                                    borderRadius: "12px",
                                    border: "1px solid #E0E0E0",
                                    display: "flex",
                                    alignItems: "center",
                                    paddingInline: "16px",
                                }}
                            >
                                <input
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    placeholder="09123456789"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        outline: "none",
                                        border: "none",
                                        background: "transparent",
                                        textAlign: "right",
                                        color: "#2D2D2D",
                                        fontSize: "16px",
                                        direction: "rtl",
                                    }}
                                />
                            </div>
                        ) : (
                            <OTPInput
                                length={6}
                                value={otp}
                                onChange={(v: string) => setOtp(v.replace(/\D/g, "").slice(0, 6))}
                            />
                        )}
                    </div>

                    {step === "otp" && timer > 0 && (
                        <div
                            style={{
                                color: "#8B8B8B",
                                fontSize: "14px",
                                textAlign: "right",
                                marginBottom: "24px",
                            }}
                        >
                            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')} مانده تا دریافت مجدد
                        </div>
                    )}

                    {/* دکمه اصلی */}
                    <button
                        style={{
                            width: "100%",
                            height: "56px",
                            background: "#0560fd",
                            borderRadius: "12px",
                            border: "none",
                            cursor: "pointer",
                            opacity: step === "phone" ? (phoneValid ? 1 : 0.5) : otpValid ? 1 : 0.5,
                            color: "white",
                            fontSize: "16px",
                            fontWeight: "700",
                            marginBottom: "32px",
                            transition: "all 0.2s ease",
                        }}
                        onClick={handlePrimaryClick}
                        disabled={step === "phone" ? !phoneValid : !otpValid}
                    >
                        {step === "phone" ? "تایید" : "ورود به پنل"}
                    </button>

                    {/* لینک‌های پایین */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "16px",
                        }}
                    >
                        <div
                            style={{
                                color: "#2196F3",
                                fontSize: "14px",
                                fontWeight: "500",
                                cursor: "pointer",
                            }}
                            onClick={() => alert("راهنمای ثبت‌نام")}
                        >
                            راهنمای ثبت‌نام
                        </div>
                        <div
                            style={{
                                width: "1px",
                                height: "16px",
                                background: "#FF4444",
                            }}
                        />
                        <div
                            style={{
                                color: "#2196F3",
                                fontSize: "14px",
                                fontWeight: "500",
                                cursor: "pointer",
                            }}
                            onClick={() => alert("تماس با پشتیبانی")}
                        >
                            تماس با پشتیبانی
                        </div>
                    </div>
                </div>

                {/* پنل گرادیانی سمت چپ */}
                <div
                    style={{
                        width: "50%",
                        background: "linear-gradient(180deg, rgba(0, 145, 208, 0.2), rgba(0, 145, 208, 0.8))",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        padding: "60px 40px",
                    }}
                >
                    {/* لوگوی نواری */}
                    <img
                        src="/icons/Group 45650.svg"
                        alt="brand stripe"
                        style={{
                            width: "260px",
                            height: "auto",
                            objectFit: "contain",
                            marginBottom: "20px",
                        }}
                    />

                    {/* تصویر 3D */}
                    <img
                        style={{
                            width: "320px",
                            height: "320px",
                            objectFit: "contain",
                        }}
                        src="/imgs/3d-render-secure-login-password-illustration---Copy 1.png"
                        alt="illustration"
                    />
                </div>
            </div>
        </div>
    );
}
