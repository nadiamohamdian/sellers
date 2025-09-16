type Row = { label: string; value: number };
export default function ShippingCard({ rows }: { rows: Row[] }) {
    return (
        <div className="bg-slate50 rounded-card p-6 shadow-sm border border-gray-200">
            <div className="text-right font-bold text-gray-900 mb-4">سفارش و تعهد ارسال</div>
            <ul className="space-y-4">
                {rows.map((r, i) => (
                    <li key={i} className="flex items-center justify-between">
                        <span className="text-gray-600">{r.label}</span>
                        <span className="w-6 h-3 rounded-full shadow-lg bg-blue-400 block"></span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
