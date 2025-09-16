import React from 'react';
import KPIStats from '../components/sections/KPIStats';
import LastOrders from '../components/sections/LastOrders';
import ShippingCommitments from '../components/sections/ShippingCommitments';
import SalesChart from '../components/sections/SalesChart';

export default function SellerDashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Stats */}
      <KPIStats />

      {/* Orders and Shipping Area */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Last Orders */}
        <LastOrders />
        
        {/* Shipping Commitments */}
        <ShippingCommitments />
      </div>

      {/* Sales Chart */}
      <SalesChart />
    </div>
  );
}
