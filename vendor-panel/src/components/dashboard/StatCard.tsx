import DetailButton from '@/components/ui/DetailButton';

type StatCardProps = {
    title: string;              // مثلا "فروخته‌شده"
    value: string;              // مثلا "۲۰"
    subLabel: string;           // مثلا "کالا" یا "ریال"
    delta: string;              // مثلا "۳۰٪+ نسبت به بازه قبل"
    className?: string;
};

export default function StatCard({ title, value, subLabel, delta, className }: StatCardProps) {
    return (
        <div className={`bg-slate50 rounded-card p-6 shadow-sm border border-gray-200 ${className ?? ''}`}>
            <div className="flex items-start justify-between">
                <DetailButton />
                <div className="text-right">
                    <div className="text-gray-900 font-bold">{title}</div>
                    <div className="mt-2">
                        <span className="text-blue-600 font-extrabold text-lg">{value}</span>
                        <span className="mr-1 text-gray-600 font-bold">{subLabel}</span>
                    </div>
                    <div className="mt-1 text-blue-600 font-bold text-sm">{delta}</div>
                </div>
            </div>
        </div>
    );
}
