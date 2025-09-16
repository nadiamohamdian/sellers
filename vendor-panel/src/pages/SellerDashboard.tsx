import React from 'react';
import KPIStats from '../components/sections/KPIStats';
import OrdersTable from '../components/sections/OrdersTable';
import SalesChart from '../components/sections/SalesChart';
import Card from '../components/ui/Card';

export default function SellerDashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Stats */}
      <KPIStats />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders Table */}
        <OrdersTable />

        {/* Empty Card Placeholder */}
        <Card className="h-96 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-sm">محتوای اضافی</p>
          </div>
        </Card>
      </div>

      {/* Sales Chart */}
      <SalesChart />
    </div>
  );
}
