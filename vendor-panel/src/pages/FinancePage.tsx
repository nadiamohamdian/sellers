// src/pages/FinancePage.tsx
import React from "react";
import SellerShell from "../layouts/SellerShell";
import {
    Edit,
} from "lucide-react";

type FinanceItem = {
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

function FinanceCard({ item }: { item: FinanceItem }) {
    return (
        <div className="finance-card">
            <div className="finance-header">
                <div className="finance-info">
                    <div className="finance-title-row">
                        <h3 className="finance-title">{item.title}</h3>
                        {item.verified && <BadgeVerified />}
                    </div>
                    <p className="finance-value">{item.value}</p>
                </div>
                <button className="finance-edit-btn" aria-label="ویرایش">
                    <Edit className="size-4" />
                </button>
            </div>
        </div>
    );
}

export default function FinancePage() {
    // داده‌های نمونه (بعداً از API میاد)
    const financeItems: FinanceItem[] = [
        {
            title: "شماره حساب بانکی",
            value: "۶۲۳۳-۰۵۶۱-۲۳۴۵-۶۷۸۹",
            verified: true,
        },
        {
            title: "شماره شبا",
            value: "IR۰۶۰۱۷۰۰۰۰۰۰۱۰۰۴۳۲۴۰۰۱",
            verified: true,
        },
        {
            title: "نام بانک",
            value: "بانک ملی ایران",
            verified: true,
        },
        {
            title: "نام صاحب حساب",
            value: "محمدحسین احمدی",
            verified: true,
        },
        {
            title: "شماره کارت",
            value: "۶۲۳۳-۰۵۶۱-۲۳۴۵-۶۷۸۹",
            verified: true,
        },
        {
            title: "تاریخ انقضا",
            value: "۱۴۰۵/۰۸",
            verified: true,
        },
    ];

    return (
        <SellerShell title="مالی">
            <section className="panel" style={{padding: "24px"}}>
                <div className="finance-header">
                    <div className="finance-title">
                        <h2>اطلاعات مالی</h2>
                        <p>مدیریت اطلاعات بانکی و مالی فروشگاه</p>
                    </div>
                </div>
                
                <div className="finance-grid">
                    {financeItems.map((item, idx) => (
                        <FinanceCard key={idx} item={item} />
                    ))}
                </div>
            </section>
        </SellerShell>
    );
}