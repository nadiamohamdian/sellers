// src/pages/OtpPage.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function OtpPage() {
    const navigate = useNavigate();
    const [code, setCode] = useState("");

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();                  // جلوی رفرش فرم را بگیر

        // اینجا API واقعی‌ات را صدا بزن:
        // const { token } = await api.verifyOtp({ phone, code })
        const token = "dummy-token";         // از پاسخ واقعی بگیر

        // قبل از navigate حتما ذخیره کن
        localStorage.setItem("token", token);

        // برای تست ببین واقعا ست شده
        console.log("TOKEN SET:", localStorage.getItem("token"));

        navigate("/signup", { replace: true });
    };

    return (
        <form onSubmit={handleVerify} dir="rtl">
            <input
                inputMode="numeric"
                pattern="[0-9]*"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="کد ۶ رقمی"
            />
            <button type="submit">تایید</button>
        </form>
    );
}
