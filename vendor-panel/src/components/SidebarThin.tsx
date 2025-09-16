import React from "react";
import { Link, useLocation } from "react-router-dom";

type Item = { label: string; href: string; section?: "goods"|"orders"|"finance"|"analytics"|"help"|"support" };

const items: Item[] = [
    { label: "پیشخوان", href: "/dashboard" },
    // کالا
    { label: "جستجو و ثبت کالا", href: "#", section:"goods" },
    { label: "مدیریت کالا و افزودن تنوع", href: "#", section:"goods" },
    { label: "مدیریت تنوع و قیمت گذاری", href: "#", section:"goods" },
    { label: "گزارش موجودی کالا", href: "#", section:"goods" },
    // سفارش‌ها
    { label: "مدیریت سفارشات جاری", href: "#", section:"orders" },
    { label: "تاریخچه سفارشات", href: "#", section:"orders" },
    // مالی
    { label: "صورتحساب ها", href: "#", section:"finance" },
    // تحلیل عملکرد
    { label: "فروش و درآمد", href: "#", section:"analytics" },
    { label: "مرجوعی", href: "#", section:"analytics" },
    // راهنما
    { label: "مرکز آموزش فروشندگان", href: "#", section:"help" },
    { label: "کالاهای غیرمجاز", href: "#", section:"help" },
    // پشتیبانی
    { label: "درخواست پشتیبانی", href: "#", section:"support" },
];

export default function SidebarThin() {
    const { pathname } = useLocation();

    return (
        <aside className="w-[320px] shrink-0 h-screen sticky top-0 bg-[#ECF0FF] border-l border-[#dfe6ff] px-4 pt-6 overflow-y-auto">
            {/* کارت پروفایل بالای سایدبار */}
            <div className="bg-white/60 rounded-xl border border-white shadow-sm p-4 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0560FD]/90 shadow-[0_0_10px_#0091D0]" />
                <div className="text-end">
                    <div className="text-[#0F1723] font-bold">نام فروشنده</div>
                    <div className="text-xs text-[#606060]">Seller Center</div>
                </div>
            </div>

            {/* دکمه پیشخوان (آبی) */}
            <Link
                to="/dashboard"
                className="block bg-[#0560FD] text-white rounded-xl shadow-[0_0_10px_#0091D0] h-16 grid place-items-center mb-4 font-bold"
            >
                پیشخوان
            </Link>

            {/* لیست‌ها با نقطه آبی بخش‌ها مثل فیگما */}
            <nav className="space-y-6 text-[15px]">
                <Section title="کالا" dot />
                {items.filter(i=>i.section==="goods"||i.href==="/dashboard").map((it,idx)=>(
                    <Row key={idx} active={pathname===it.href} label={it.label} href={it.href}/>
                ))}

                <Section title="سفارش‌ها" dot />
                {items.filter(i=>i.section==="orders").map((it,idx)=>(
                    <Row key={idx} active={pathname===it.href} label={it.label} href={it.href}/>
                ))}

                <Section title="مالی" dot />
                {items.filter(i=>i.section==="finance").map((it,idx)=>(
                    <Row key={idx} active={pathname===it.href} label={it.label} href={it.href}/>
                ))}

                <Section title="تحلیل عملکرد" dot />
                {items.filter(i=>i.section==="analytics").map((it,idx)=>(
                    <Row key={idx} active={pathname===it.href} label={it.label} href={it.href}/>
                ))}

                <Section title="راهنما" dot />
                {items.filter(i=>i.section==="help").map((it,idx)=>(
                    <Row key={idx} active={pathname===it.href} label={it.label} href={it.href}/>
                ))}

                <Section title="پشتیبانی" dot />
                {items.filter(i=>i.section==="support").map((it,idx)=>(
                    <Row key={idx} active={pathname===it.href} label={it.label} href={it.href}/>
                ))}
            </nav>
        </aside>
    );
}

function Section({title, dot}:{title:string; dot?:boolean}) {
    return (
        <div className="flex items-center gap-2 text-[#606060] font-medium">
            {dot && <span className="w-2.5 h-2.5 rounded-full bg-[#0560FD]" />}
            <span>{title}</span>
        </div>
    );
}

function Row({label, href, active}:{label:string; href:string; active?:boolean}) {
    return (
        <Link
            to={href || "#"}
            className={[
                "block rounded-lg px-3 py-2 transition",
                active ? "bg-white text-[#0560FD] font-bold shadow-sm" : "hover:bg-white/60 text-[#606060]"
            ].join(" ")}
        >
            {label}
        </Link>
    );
}
