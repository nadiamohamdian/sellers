import React from "react";
import { Pencil } from "lucide-react";

function InfoRow() {
    return (
        <div className="h-16 flex items-center justify-between border-b last:border-b-0 border-zinc-200">
            <div className="flex items-center gap-3 text-sm text-zinc-600">
                <Pencil className="size-4 text-blue-600" />
                <div className="text-blue-600 text-xs font-bold rounded-full px-2 py-0.5 bg-blue-50 border border-blue-200">
                    تایید شده
                </div>
                <div className="text-zinc-700 font-bold">اطلاعات نمونه</div>
            </div>
            <div className="text-xs text-zinc-500">مقدار اطلاعات نمونه</div>
        </div>
    );
}

export default function BusinessOwnerInfoPage() {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 lg:p-6 shadow-sm">
            <div className="relative mb-4">
                <div className="absolute inset-x-0 top-0 border-t border-zinc-200" />
                <div className="w-fit mx-auto -mt-3 px-3 bg-white text-[11px] text-blue-600 font-bold">
                    اطلاعات مالک کسب و کار
                </div>
            </div>

            <p className="text-[11px] text-center text-zinc-500 mb-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>

            {/* دو ستون مثل طرح */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-xl border border-zinc-200 bg-slate-50 p-2">
                    <InfoRow />
                    <InfoRow />
                    <InfoRow />
                    <InfoRow />
                </div>
                <div className="rounded-xl border border-zinc-200 bg-slate-50 p-2">
                    <InfoRow />
                    <InfoRow />
                    <InfoRow />
                    <InfoRow />
                </div>
            </div>
        </div>
    );
}
