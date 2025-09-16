// src/pages/OwnerInfoPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ChevronLeft,
    PenSquare,
    CheckCircle2,
    Store,
    MapPin,
    Wallet,
    FileText,
    FileSignature,
    User,
    Star,
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

function RightTab({
                      icon,
                      label,
                      active,
                  }: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}) {
    return active ? (
        <button className="w-full rounded-lg bg-blue-600 text-white py-3 px-3 flex items-center justify-between">
      <span className="flex items-center gap-2">
        {icon}
          <span className="text-sm font-bold">{label}</span>
      </span>
            <span className="size-2 rounded-full bg-white/90" />
        </button>
    ) : (
        <button className="w-full rounded-lg bg-white py-3 px-3 flex items-center justify-between shadow-sm hover:bg-slate-50 transition">
      <span className="flex items-center gap-2 text-slate-700">
        {icon}
          <span className="text-sm font-bold">{label}</span>
      </span>
        </button>
    );
}

function ScoreBox({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-lg border border-slate-300 p-3 text-center">
            <div className="text-xs text-slate-600 mb-2">{label}</div>
            <div className="text-4xl font-extrabold text-blue-600 leading-none">{value}</div>
        </div>
    );
}

export default function OwnerInfoPage() {
    const navigate = useNavigate();

    // داده‌های نمونه (بعداً از API میاد)
    const leftCol: FieldItem[] = [
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
    ];
    const rightCol: FieldItem[] = [
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
        { title: "اطلاعات نمونه", value: "مقدار اطلاعات نمونه", verified: true },
    ];

    const satisfaction = 79.6;

    return (
        <main dir="rtl" className="min-h-screen bg-slate-50 p-6">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-12 gap-6">
                    {/* سایدبار راست */}
                    <aside className="order-1 col-span-12 lg:order-2 lg:col-span-3">
                        {/* دکمه بازگشت */}
                        <div className="mb-4">
                            <button
                                onClick={() => navigate("/")}
                                className="w-full rounded-xl bg-white py-3 px-4 border border-slate-200 flex items-center justify-between shadow-sm hover:bg-slate-50"
                            >
                                <span className="text-sm text-slate-700 font-bold">بازگشت به پیشخوان</span>
                                <ChevronLeft className="size-4 text-slate-600" />
                            </button>
                        </div>

                        {/* کارت پروفایل/منو */}
                        <div className="rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden">
                            <div className="px-4 py-3 flex items-center gap-2 border-b">
                                <div className="size-8 rounded-full bg-blue-100 text-blue-600 grid place-items-center">
                                    <User className="size-4" />
                                </div>
                                <div className="text-slate-800 font-bold">نام فروشنده</div>
                            </div>

                            <div className="p-3 space-y-2">
                                <RightTab
                                    icon={<CheckCircle2 className="size-4 text-white" />}
                                    label="اطلاعات مالک کسب و کار"
                                    active
                                />
                                <RightTab icon={<Store className="size-4" />} label="اطلاعات فروشگاه" />
                                <RightTab icon={<MapPin className="size-4" />} label="آدرس‌ها" />
                                <RightTab icon={<Wallet className="size-4" />} label="مالی" />
                                <RightTab icon={<FileText className="size-4" />} label="مدارک" />
                                <RightTab icon={<FileSignature className="size-4" />} label="قراردادها" />
                            </div>

                            <div className="p-4 border-t space-y-4">
                                <div className="text-slate-700 font-bold">امتیاز شما</div>
                                <div className="flex items-center gap-1 text-amber-500">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="size-4 fill-amber-400 stroke-amber-400" />
                                    ))}
                                    <span className="mr-auto text-xs text-slate-500">۳ از ۵</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs text-slate-600">رضایت از خرید</div>
                                    <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                                        <div
                                            className="h-full bg-blue-600 rounded-full"
                                            style={{ width: `${satisfaction}%` }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                                        <span>{satisfaction.toFixed(1)}%</span>
                                        <span>از ۵۶۳۲ رای</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <ScoreBox label="بدون مرجوعی" value="۹۵٪" />
                                    <ScoreBox label="بدون لغو" value="۸۰٪" />
                                    <ScoreBox label="ارسال به‌موقع" value="۷۵٪" />
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* محتوای اصلی */}
                    <section className="order-2 col-span-12 lg:order-1 lg:col-span-9">
                        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm">
                            <div className="px-6 pt-6">
                                <div className="flex items-center justify-center">
                                    <div className="border-t w-full border-slate-200" />
                                    <div className="px-3 text-xs text-blue-600 font-bold">
                                        اطلاعات مالک کسب و کار
                                    </div>
                                    <div className="border-t w-full border-slate-200" />
                                </div>
                                <p className="text-center text-xs text-slate-500 mt-3">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است.
                                </p>
                            </div>
                            <div className="px-6 pb-6 mt-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="md:border-l md:pl-8 border-slate-200">
                                        <div className="divide-y divide-slate-200">
                                            {leftCol.map((it, idx) => (
                                                <FieldRow key={idx} item={it} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="md:pr-8">
                                        <div className="divide-y divide-slate-200">
                                            {rightCol.map((it, idx) => (
                                                <FieldRow key={idx} item={it} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
