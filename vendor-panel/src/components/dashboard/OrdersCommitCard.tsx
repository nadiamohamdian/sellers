import React from "react";

type Row = {
    label: string;
    value: number | string;
};

type OrdersCommitCardProps = {
    title?: string;
    rows: Row[]; // مثلا: [{label:'تعهد ارسال گذشته و امروز', value: 10}, ...]
};

export default function OrdersCommitCard({ title = "سفارش و تعهد ارسال", rows }: OrdersCommitCardProps) {
    return (
        <div className="bg-slate-50 rounded-[20px] p-6 shadow-sm border border-transparent" dir="rtl">
            <div className="text-right text-gray-900 font-bold text-lg mb-4">{title}</div>

            <div className="space-y-4">
                {rows.map((r, i) => (
                    <div key={i} className="flex items-center justify-between">
                        {/* آیکون فلش آبی سمت چپ مثل فیگما (صرفاً یک مربع با گرادیان/سایه کوچک) */}
                        <span className="w-6 h-6 flex-shrink-0 rounded-md bg-blue-600/95 shadow-[0_0_10px_rgba(0,145,208,1)] mr-2" />

                        <div className="flex-1 text-right text-zinc-600 font-bold">{r.label}</div>

                        <div className="w-10 text-right text-zinc-600 font-bold">{r.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
