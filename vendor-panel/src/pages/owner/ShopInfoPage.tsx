import { Pencil, Plus } from "lucide-react";

function ApprovedBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-600">
            تایید شده
        </span>
    );
}

function RowApproved({ label }: { label: string }) {
    return (
        <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
                <button className="text-blue-600 hover:text-blue-700">
                    <Pencil className="size-4" />
                </button>
                <div className="text-sm text-zinc-700">{label}</div>
            </div>
            <ApprovedBadge />
        </div>
    );
}

function RowAdd({ label = "اطلاعات نمونه" }: { label?: string }) {
    return (
        <button className="group flex w-full items-center justify-between py-6 border-t border-zinc-200">
            <div className="flex items-center gap-4 text-zinc-500">
                <Plus className="size-4" />
                <span className="text-sm">{label}</span>
            </div>
            <span className="text-[11px] text-zinc-400">وارد کنید</span>
        </button>
    );
}

export default function ShopInfoPage() {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 lg:p-6 shadow-sm">
            {/* Header */}
            <div className="relative mb-4">
                <div className="absolute inset-x-0 top-0 border-t border-zinc-200" />
                <div className="mx-auto w-fit -mt-3 rounded bg-white px-3 text-[12px] font-bold text-blue-600">
                    اطلاعات فروشگاه
                </div>
            </div>

            <p className="mb-6 text-center text-[12px] text-zinc-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Column 1 */}
                <div className="rounded-xl border border-zinc-200">
                    <div className="divide-y divide-zinc-200 px-4">
                        <RowApproved label="مقدار اطلاعات نمونه" />
                        <RowApproved label="مقدار اطلاعات نمونه" />
                        <RowApproved label="مقدار اطلاعات نمونه" />
                        <RowAdd />
                        <RowAdd />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="rounded-xl border border-zinc-200">
                    <div className="divide-y divide-zinc-200 px-4">
                        <RowApproved label="مقدار اطلاعات نمونه" />
                        <RowApproved label="مقدار اطلاعات نمونه" />
                        <RowApproved label="مقدار اطلاعات نمونه" />
                        <RowAdd />
                    </div>
                </div>
            </div>
        </div>
    );
}
