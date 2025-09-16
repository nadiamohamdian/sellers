import StatCard from '@/components/dashboard/StatCard';
import ShippingCard from '@/components/dashboard/ShippingCard';
import LastOrdersTable from '@/components/dashboard/LastOrdersTable';
import SalesTrendChart from '@/components/dashboard/SalesTrendChart';

const orders = [
    { id: 1, code: 'کد سفارش: 25482', date: '۱۴۰۳/۰۲/۱۰', price: '5,198,265' },
    { id: 2, code: 'کد سفارش: 25481', date: '۱۴۰۳/۰۲/۱۰', price: '6,195,258' },
    { id: 3, code: 'کد سفارش: 25480', date: '۱۴۰۳/۰۲/۱۰', price: '5,198,265' },
    { id: 4, code: 'کد سفارش: 25479', date: '۱۴۰۳/۰۲/۱۰', price: '6,195,258' },
    { id: 5, code: 'کد سفارش: 25478', date: '۱۴۰۳/۰۲/۱۰', price: '5,198,265' },
];

const shipRows = [
    { label: 'تعهد ارسال گذشته و امروز', value: 10 },
    { label: 'تعهد ارسال فردا به بعد', value: 7 },
    { label: 'سفارش‌های امروز', value: 5 },
    { label: 'سفارش‌های لغوشده', value: 6 },
];

const chartData = [
    { x: '۱/۱۵', orders: 1.2, gross: 2.0 },
    { x: '۱/۱۷', orders: 2.6, gross: 2.2 },
    { x: '۱/۱۹', orders: 1.1, gross: 1.6 },
    { x: '۱/۲۱', orders: 3.4, gross: 2.9 },
    { x: '۱/۲۳', orders: 2.2, gross: 2.1 },
    { x: '۱/۲۵', orders: 1.9, gross: 2.0 },
    { x: '۱/۲۷', orders: 2.8, gross: 3.1 },
    { x: '۱/۲۹', orders: 2.4, gross: 3.0 },
];

export default function DashboardPage() {
    return (
        <div className="min-h-screen">
            {/* ردیف اول: دو کارت آماری */}
            <section className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-12 md:col-span-6">
                    <StatCard
                        title="فروخته‌شده"
                        value="۲۰"
                        subLabel="کالا"
                        delta="۳۰٪+ نسبت به بازه قبل"
                    />
                </div>
                <div className="col-span-12 md:col-span-6">
                    <StatCard
                        title="درآمد ناخالص"
                        value="۱۲,۵۸۶,۰۰۰"
                        subLabel="ریال"
                        delta="۳۰٪+ نسبت به بازه قبل"
                    />
                </div>
            </section>

            {/* ردیف دوم: سفارش/تعهد + آخرین سفارشات */}
            <section className="grid grid-cols-12 gap-6 mt-6">
                <div className="col-span-12 lg:col-span-6">
                    <ShippingCard rows={shipRows} />
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <LastOrdersTable data={orders} />
                </div>
            </section>

            {/* ردیف سوم: چارت */}
            <section className="mt-6">
                <SalesTrendChart data={chartData} />
            </section>
        </div>
    );
}
