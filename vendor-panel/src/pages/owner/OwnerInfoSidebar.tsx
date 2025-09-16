import React from "react";
import { NavLink } from "react-router-dom";
import {
    User,
    Store,
    MapPin,
    Wallet,
    FileText,
    FileCheck2,
    ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const linkBase =
    "flex items-center justify-between w-full h-12 px-4 rounded-xl border transition";
const active =
    "bg-blue-600 text-white border-blue-600 shadow-[0_0_10px_rgba(0,145,208,1)]";
const inactive =
    "bg-white text-gray-700 border-zinc-200 hover:bg-blue-50";

export default function OwnerInfoSidebar() {
    const navigate = useNavigate();
    const items = [
        { to: "/owner/business", label: "اطلاعات مالک کسب و کار", icon: <User className="size-5" /> },
        { to: "/owner/shop", label: "اطلاعات فروشگاه", icon: <Store className="size-5" /> },
        { to: "/owner/addresses", label: "آدرس‌ها", icon: <MapPin className="size-5" /> },
        { to: "/owner/finance", label: "مالی", icon: <Wallet className="size-5" /> },
        { to: "/owner/documents", label: "مدارک", icon: <FileText className="size-5" /> },
        { to: "/owner/contracts", label: "قراردادها", icon: <FileCheck2 className="size-5" /> },
    ];

    return (
        <aside className="w-[360px] shrink-0">
            {/* کارت هدر + دکمه بازگشت */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={() => navigate("/")}   // ⬅️ اینجا جایگزین history.back() کن
                    className="flex items-center gap-2 h-10 px-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50"
                >
                    <ArrowRight className="size-4" />
                    <span className="text-sm">بازگشت به پیشخوان</span>
                </button>

                <div className="flex items-center gap-2">
                    <div className="size-10 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(0,145,208,1)]" />
                    <div className="text-sm font-bold">نام فروشنده</div>
                </div>
            </div>

            {/* دکمه آبی بالا */}
            <div className={`${active} ${linkBase} !mb-4`}>
                <span className="font-bold">پیشخوان</span>
            </div>

            {/* منو */}
            <div className="space-y-2">
                {items.map((it) => (
                    <NavLink
                        key={it.to}
                        to={it.to}
                        className={({ isActive }) =>
                            `${linkBase} ${isActive ? active : inactive}`
                        }
                    >
            <span className="flex items-center gap-3">
              {it.icon}
                <span className="text-sm font-bold">{it.label}</span>
            </span>
                        <span className="size-2 rounded-full bg-blue-600" />
                    </NavLink>
                ))}
            </div>

            {/* کارت‌های وضعیت پایین سایدبار (ساده‌شده) */}
            <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-zinc-200 bg-white p-4">
                    <div className="text-xs text-zinc-500 mb-1">رضایت از خرید</div>
                    <div className="h-2 rounded bg-zinc-200">
                        <div className="h-2 w-4/5 rounded bg-blue-600" />
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-1">از ۵۶۳۲ رای</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {[
                        { t: "بدون مرجوعی", v: "۹۵٪" },
                        { t: "بدون لغو", v: "۸۰٪" },
                        { t: "ارسال به‌موقع", v: "۷۵٪" },
                    ].map((x, i) => (
                        <div key={i} className="rounded-xl border border-zinc-300 bg-white p-3 text-center">
                            <div className="text-[11px] text-zinc-600">{x.t}</div>
                            <div className="text-2xl font-extrabold text-blue-600">{x.v}</div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}
