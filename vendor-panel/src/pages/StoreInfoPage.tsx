// src/pages/StoreInfoPage.tsx
import React from "react";
import SellerShell from "../layouts/SellerShell";
import {
    PenSquare,
    Plus,
    Upload,
} from "lucide-react";

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

function InputField({ 
    label, 
    placeholder, 
    icon: Icon, 
    showAddButton = false 
}: { 
    label: string; 
    placeholder: string; 
    icon: any; 
    showAddButton?: boolean;
}) {
    return (
        <div className="flex items-center justify-between py-4">
            <div className="flex-1">
                <label className="block text-sm font-bold text-slate-700 mb-2">{label}</label>
                <div className="relative">
                    <input
                        type="text"
                        placeholder={placeholder}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                    />
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-blue-600" />
                </div>
            </div>
            {showAddButton && (
                <button className="ml-4 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition">
                    <Plus className="size-4" />
                </button>
            )}
        </div>
    );
}

export default function StoreInfoPage() {
    // داده‌های نمونه (بعداً از API میاد)
    const leftCol: FieldItem[] = [
        { title: "نام فروشگاه", value: "فروشگاه لوازم خانگی احمدی", verified: true },
        { title: "کد پستی", value: "۱۴۵۸۷۹۶۳۲۱", verified: true },
    ];
    const rightCol: FieldItem[] = [
        { title: "شماره تلفن ثابت", value: "۰۲۱-۱۲۳۴۵۶۷۸", verified: true },
        { title: "ایمیل فروشگاه", value: "shop@example.com", verified: true },
    ];

    return (
        <SellerShell title="اطلاعات فروشگاه">
            <section className="panel" style={{padding: "24px"}}>
                <div className="si-header">
                    <p className="si-description">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </p>
                </div>
                <div className="si-content">
                    <div className="si-row">
                        <div className="si-column">
                            <div className="si-field-list">
                                {leftCol.map((item, idx) => (
                                    <FieldRow key={idx} item={item} />
                                ))}
                            </div>
                        </div>
                        <div className="si-column">
                            <div className="si-field-list">
                                {rightCol.map((item, idx) => (
                                    <FieldRow key={idx} item={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="panel" style={{padding: "24px"}}>
                <div className="si-input-section">
                    <div className="si-input-row">
                        <InputField 
                            label="ساعات کاری - از" 
                            placeholder="09:00" 
                            icon={PenSquare}
                        />
                        <InputField 
                            label="ساعات کاری - تا" 
                            placeholder="18:00" 
                            icon={PenSquare}
                        />
                    </div>
                </div>
            </section>

            <section className="panel" style={{padding: "24px"}}>
                <div className="si-upload-section">
                    <InputField 
                        label="لوگوی فروشگاه" 
                        placeholder="فایل خود را اینجا رها کنید یا برای آپلود کلیک کنید" 
                        icon={Upload}
                        showAddButton={true}
                    />
                </div>
            </section>
        </SellerShell>
    );
}