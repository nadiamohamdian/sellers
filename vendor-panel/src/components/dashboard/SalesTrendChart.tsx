type ChartData = { x: string; orders: number; gross: number };

export default function SalesTrendChart({ data }: { data: ChartData[] }) {
    return (
        <div className="bg-slate50 rounded-card p-6 shadow-sm border border-gray-200">
            <div className="text-right font-bold text-gray-900 mb-4">روند فروش</div>
            
            {/* Simple chart representation */}
            <div className="h-64 flex items-end justify-between gap-2">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                        <div className="w-full bg-blue-200 rounded-t mb-2 relative group">
                            <div 
                                className="bg-blue-600 rounded-t transition-all duration-300 hover:bg-blue-700"
                                style={{ height: `${(item.orders / 4) * 100}%` }}
                            />
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                سفارشات: {item.orders}k
                            </div>
                        </div>
                        <div className="text-xs text-gray-600 mt-2">{item.x}</div>
                    </div>
                ))}
            </div>
            
            {/* Legend */}
            <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded"></div>
                    <span className="text-sm text-gray-600">سفارشات</span>
                </div>
            </div>
        </div>
    );
}