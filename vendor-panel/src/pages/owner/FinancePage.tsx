import { Pencil, Plus } from "lucide-react";

function ApprovedBadge() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[11px] font-bold text-green-600">
            تایید شده
        </span>
    );
}

function InfoRow({ 
    label, 
    value, 
    isApproved = false, 
    showEdit = false, 
    showAdd = false 
}: { 
    label: string; 
    value: string; 
    isApproved?: boolean; 
    showEdit?: boolean; 
    showAdd?: boolean; 
}) {
    return (
        <div className="py-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    {showEdit && (
                        <button className="text-blue-600 hover:text-blue-700">
                            <Pencil className="size-4" />
                        </button>
                    )}
                    <span className="text-sm text-zinc-700">{label}</span>
                    {isApproved && <ApprovedBadge />}
                </div>
            </div>
            <div className="text-xs text-zinc-500">{value}</div>
            {showAdd && (
                <button className="mt-3 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <Plus className="size-4" />
                </button>
            )}
        </div>
    );
}

export default function FinancePage() {
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 lg:p-6 shadow-sm">
            {/* Header */}
            <div className="relative mb-4">
                <div className="absolute inset-x-0 top-0 border-t border-zinc-200" />
                <div className="mx-auto w-fit -mt-3 rounded bg-white px-3 text-[12px] font-bold text-blue-600">
                    اطلاعات مالی
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
                        <InfoRow 
                            label="اطلاعات نمونه" 
                            value="مقدار اطلاعات نمونه" 
                        />
                        <InfoRow 
                            label="اطلاعات نمونه تایید شده" 
                            value="مقدار اطلاعات نمونه" 
                            isApproved={true}
                            showEdit={true}
                        />
                        <InfoRow 
                            label="اطلاعات نمونه تایید شده" 
                            value="مقدار اطلاعات نمونه" 
                            isApproved={true}
                            showAdd={true}
                        />
                    </div>
                </div>

                {/* Column 2 */}
                <div className="rounded-xl border border-zinc-200">
                    <div className="divide-y divide-zinc-200 px-4">
                        <InfoRow 
                            label="اطلاعات نمونه" 
                            value="مقدار اطلاعات نمونه" 
                        />
                        <InfoRow 
                            label="اطلاعات نمونه تایید شده" 
                            value="مقدار اطلاعات نمونه" 
                            isApproved={true}
                            showEdit={true}
                        />
                        <InfoRow 
                            label="اطلاعات نمونه تایید شده" 
                            value="مقدار اطلاعات نمونه" 
                            isApproved={true}
                            showAdd={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
