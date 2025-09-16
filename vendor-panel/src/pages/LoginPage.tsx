import { useState } from "react";
import { useNavigate } from "react-router-dom";
// اگر این کامپوننت را داری استفاده کن؛ اگر نداری می‌تونی موقتاً از یک <input> ساده استفاده کنی
import OTPInput from "@/components/OTPInput";

export default function LoginPage() {
    const nav = useNavigate();

    // مرحله فعلی: phone → otp
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");

    // فقط رقم، حداکثر 11، شروع با 09
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 11);
        setPhone(onlyDigits);
    };

    const phoneValid = /^09\d{9}$/.test(phone);
    const otpValid = /^\d{6}$/.test(otp);

    const handlePrimaryClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (step === "phone") {
            if (!phoneValid) return; // نامعتبر → کاری نکن
            // اینجا معمولاً API ارسال کد را می‌زنی
            setStep("otp");
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
                    maxWidth: "900px",
                    height: "500px",
                    background: "white",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    overflow: "hidden",
                }}
            >
                {/* بخش فرم سمت راست */}
                <div
                    style={{
                        width: "55%",
                        padding: "60px 50px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    {/* تیتر */}
                    <div
                        style={{
                            color: "#606060",
                            fontSize: "28px",
                            fontWeight: 700,
                            marginBottom: "20px",
                            textAlign: "right",
                        }}
                    >
                        ورود یا ثبت نام
                    </div>

                    {/* متن توضیح */}
                    <div
                        style={{
                            color: "#606060",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "1.6",
                            marginBottom: "40px",
                            textAlign: "right",
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
                                کد ۶ رقمی به شماره {phone} ارسال شد.<br />
                                لطفاً کد را وارد کنید.
                            </>
                        )}
                    </div>

                    {/* لیبل فیلد */}
                    <div
                        style={{
                            color: "#606060",
                            fontSize: "16px",
                            fontWeight: 400,
                            marginBottom: "10px",
                            textAlign: "right",
                        }}
                    >
                        {step === "phone" ? "شماره موبایل با ایمیل" : "کد تأیید ۶ رقمی"}
                    </div>

                    {/* باکس ورودی */}
                    <div
                        style={{
                            width: "100%",
                            height: "55px",
                            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.10)",
                            borderRadius: "10px",
                            border: "1px solid #707175",
                            background: "#fff",
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingInline: "15px",
                            marginBottom: "20px",
                        }}
                    >
                        {step === "phone" ? (
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
                                    color: "#707175",
                                    fontSize: "18px",
                                    direction: "rtl",
                                }}
                            />
                        ) : (
                            <OTPInput
                                length={6}
                                value={otp}
                                onChange={(v: string) => setOtp(v.replace(/\D/g, "").slice(0, 6))}
                            />
                        )}
                    </div>

                    {/* دکمه اصلی */}
                    <button
                        style={{
                            width: "100%",
                            height: "55px",
                            background: "#0560FD",
                            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.10)",
                            borderRadius: "10px",
                            border: "none",
                            cursor: "pointer",
                            opacity: step === "phone" ? (phoneValid ? 1 : 0.5) : otpValid ? 1 : 0.5,
                            color: "white",
                            fontSize: "18px",
                            fontWeight: 700,
                            marginBottom: "30px",
                        }}
                        onClick={handlePrimaryClick}
                        disabled={step === "phone" ? !phoneValid : !otpValid}
                    >
                        {step === "phone" ? "تایید" : "تأیید"}
                    </button>

                    {/* لینک‌های پایین */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "15px",
                        }}
                    >
                        <div
                            style={{
                                color: "#0560FD",
                                fontSize: "14px",
                                fontWeight: 700,
                                cursor: "pointer",
                            }}
                            onClick={() => alert("راهنمای ثبت‌نام")}
                        >
                            راهنمای ثبت‌نام
                        </div>
                        <div
                            style={{
                                width: "1px",
                                height: "20px",
                                background: "#ED1C24",
                            }}
                        />
                        <div
                            style={{
                                color: "#0560FD",
                                fontSize: "14px",
                                fontWeight: 700,
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
                        width: "45%",
                        background: "linear-gradient(180deg, rgba(0, 145, 208, 0.20) 0%, rgba(0, 145, 208, 0.80) 100%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        padding: "40px 20px",
                    }}
                >
                    {/* لوگوی نواری */}
                    <img
                        src="/icons/Group 45650.svg"
                        alt="brand stripe"
                        style={{
                            width: "180px",
                            height: "40px",
                            objectFit: "contain",
                            marginBottom: "20px",
                        }}
                    />

                    {/* متن SELLER CENTER */}
                    <div
                        style={{
                            color: "white",
                            fontSize: "20px",
                            fontWeight: 700,
                            marginBottom: "30px",
                        }}
                    >
                        SELLER CENTER
                    </div>

                    {/* تصویر 3D */}
                    <img
                        style={{
                            width: "280px",
                            height: "280px",
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
