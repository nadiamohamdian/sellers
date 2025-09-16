type Order = { id: number; code: string; date: string; price: string };

export default function LastOrdersTable({ data }: { data: Order[] }) {
    return (
        <div className="bg-slate50 rounded-card p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
                <div className="text-right font-bold text-gray-900">آخرین سفارشات</div>
                <button className="h-9 px-4 rounded-[10px] bg-blue-600 text-white text-sm font-bold shadow-lg">جزئیات</button>
            </div>

            <div className="grid grid-cols-12 text-sm font-bold text-gray-500 px-2">
                <div className="col-span-1">#</div>
                <div className="col-span-3 text-right">کد سفارش</div>
                <div className="col-span-3 text-right">تاریخ</div>
                <div className="col-span-3 text-right">مبلغ</div>
                <div className="col-span-2"></div>
            </div>

            <div className="mt-2 divide-y divide-gray-200">
                {data.map((o) => (
                    <div key={o.id} className="grid grid-cols-12 items-center py-3 px-2">
                        <div className="col-span-1 text-gray-600">{o.id}</div>
                        <div className="col-span-3 text-right text-gray-700">{o.code}</div>
                        <div className="col-span-3 text-right text-gray-700">{o.date}</div>
                        <div className="col-span-3 text-right text-gray-700">{o.price} ریال</div>
                        <div className="col-span-2">
                            <span className="w-6 h-3 rounded-full shadow-lg bg-blue-400 block" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
