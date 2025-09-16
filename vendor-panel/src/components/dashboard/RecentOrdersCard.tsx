import React from "react";

type OrderRow = {
    amount: string;   // "ریال 5,198,265"
    code: string;     // "کد سفارش: 25482"
    date: string;     // "۱۴۰۳/۰۲/۱۰"
    index: string;    // "۱" ... "۵"
};

type RecentOrdersCardProps = {
    title?: string;
    rows: OrderRow[];
};

export default function RecentOrdersCard({ title = "آخرین سفارشات", rows }: RecentOrdersCardProps) {
    return (
        <div className="bg-slate-50 rounded-[20px] p-6 shadow-sm border border-transparent" dir="rtl">
            <div className="text-right text-gray-900 font-bold text-lg mb-3">{title}</div>

            <div className="divide-y divide-neutral-100">
                {rows.map((r, i) => (
                    <div key={i} className="py-3 grid grid-cols-12 items-center">
                        {/* فلش آبی کوچک سمت راست هر ردیف */}
                        <div className="col-span-1 flex justify-center">
                            <span className="w-6 h-6 rounded-md bg-blue-600/95 shadow-[0_0_10px_rgba(0,145,208,1)]" />
                        </div>

                        <div className="col-span-3 text-zinc-600 font-bold text-sm text-right">{r.amount}</div>
                        <div className="col-span-3 text-zinc-600 font-bold text-sm text-right">{r.code}</div>
                        <div className="col-span-3 text-zinc-600 font-bold text-sm text-right">{r.date}</div>

                        <div className="col-span-2 flex items-center gap-2 justify-end">
                            <span className="text-gray-900 font-bold">{r.index}</span>
                            <span className="text-gray-900 font-bold">-</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
