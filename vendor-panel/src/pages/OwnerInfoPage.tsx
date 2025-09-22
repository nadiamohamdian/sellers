// src/pages/OwnerInfoPage.tsx
import React from "react";
import SellerShell from "../layouts/SellerShell";
import { PenSquare } from "lucide-react";

type FieldItem = {
    title: string;
    value: string;
    verified?: boolean;
};

function BadgeVerified() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-[11px] font-bold">
      <span className="size-3 rounded-full bg-green-500" />
      تایید شده
    </span>
    );
}

function FieldRow({ item }: { item: FieldItem }) {
    return (
        <div className="flex items-start justify-between py-4">
            {/* متن‌ها از راست */}
            <div className="pr-2">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-700">{item.title}</span>
                    {item.verified && <BadgeVerified />}
                </div>
                <div className="text-xs text-slate-500 mt-1">{item.value}</div>
            </div>

            {/* آیکن ادیت سمت چپ */}
            <button
                className="shrink-0 rounded-md p-1.5 text-blue-600 hover:bg-blue-50 transition"
                aria-label="ویرایش"
            >
                <PenSquare className="size-4" />
            </button>
        </div>
    );
}

export default function OwnerInfoPage() {
    // داده‌های نمونه (بعداً از API میاد)
    const leftCol: FieldItem[] = [
        { title: "نام و نام خانوادگی", value: "محمدحسین احمدی", verified: true },
        { title: "کد ملی", value: "۰۴۵۱۲۳۴۵۶۷", verified: true },
        { title: "تاریخ تولد", value: "۱۳۷۰/۰۵/۱۵", verified: true },
        { title: "شماره موبایل", value: "۰۹۱۲۳۴۵۶۷۸۹", verified: true },
    ];
    const rightCol: FieldItem[] = [
        { title: "ایمیل", value: "example@mail.com", verified: true },
        { title: "تلفن ثابت", value: "۰۲۱-۱۲۳۴۵۶۷۸", verified: true },
        { title: "آدرس", value: "تهران، خیابان ولیعصر", verified: true },
        { title: "کد پستی", value: "۱۴۵۸۷۹۶۳۲۱", verified: true },
    ];

    return (
        <SellerShell title="اطلاعات مالک کسب و کار">
            <section className="panel" style={{padding: "24px"}}>
                <div className="oi-header">
                    <p className="oi-description">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div className="oi-content">
                    <div className="oi-row">
                        <div className="oi-column">
                            <div className="oi-field-list">
                                {leftCol.map((item, idx) => (
                                    <FieldRow key={idx} item={item} />
                                ))}
                            </div>
                        </div>
                        <div className="oi-column">
                            <div className="oi-field-list">
                                {rightCol.map((item, idx) => (
                                    <FieldRow key={idx} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </SellerShell>
    );
}