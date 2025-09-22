import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import SellerShell from '../layouts/SellerShell';
import './Dashboard.css';

export default function Dashboard() {

  // Chart data for sales trend - matching reference exactly
  const chartData = [
    { label: '1/15', value: 1.2, count: 0.8 },
    { label: '1/17', value: 1.8, count: 1.2 },
    { label: '1/19', value: 2.1, count: 1.5 },
    { label: '1/21', value: 1.5, count: 1.0 },
    { label: '1/23', value: 2.3, count: 1.7 },
    { label: '1/25', value: 1.9, count: 1.3 },
    { label: '1/27', value: 2.5, count: 1.8 },
    { label: '1/29', value: 2.8, count: 2.0 },
    { label: '1/31', value: 3.1, count: 2.2 },
    { label: '2/2', value: 2.7, count: 1.9 },
    { label: '2/4', value: 3.2, count: 2.3 },
    { label: '2/6', value: 2.9, count: 2.1 },
    { label: '2/8', value: 3.5, count: 2.6 },
    { label: '2/10', value: 3.8, count: 2.8 },
    { label: '2/12', value: 3.6, count: 2.7 },
    { label: '2/14', value: 4.0, count: 3.0 },
    { label: '2/16', value: 3.7, count: 2.8 },
    { label: '2/18', value: 3.9, count: 2.9 },
    { label: '2/20', value: 4.2, count: 3.1 },
    { label: '2/22', value: 3.8, count: 2.9 },
    { label: '2/24', value: 4.1, count: 3.0 },
    { label: '2/26', value: 3.9, count: 2.9 },
    { label: '2/28', value: 4.3, count: 3.2 },
    { label: '3/2', value: 4.0, count: 3.0 },
    { label: '3/4', value: 4.2, count: 3.1 },
    { label: '3/6', value: 3.8, count: 2.9 },
    { label: '3/8', value: 4.1, count: 3.0 },
    { label: '3/10', value: 3.9, count: 2.9 },
    { label: '3/12', value: 4.3, count: 3.2 },
    { label: '3/14', value: 4.0, count: 3.0 },
    { label: '3/16', value: 4.2, count: 3.1 }
  ];

  return (
    <SellerShell title="داشبورد">
          
          {/* Top Row - 2 Summary Cards */}
          <section className="top-row">
            {/* Card 1: فروخته شده */}
            <div className="card" id="sold">
              <button className="pill">جزئیات ←</button>
              <div className="title">فروخته شده</div>
              <div className="value-large">۲۰ کالا</div>
              <div className="delta">+ ۳۰٪ نسبت به بازه قبل</div>
            </div>

            {/* Card 2: درآمد ناخالص */}
            <div className="card" id="gross">
              <button className="pill">جزئیات ←</button>
              <div className="title">درآمد ناخالص</div>
              <div className="value-large">۱۲۰,۵۸۶,۰۰۰</div>
              <div className="currency-inline">ریال</div>
              <div className="delta">+ ۳۰٪ نسبت به بازه قبل</div>
            </div>
          </section>

          {/* Bottom Row - 2 Cards */}
          <section className="bottom-row">
            {/* Card 1: آخرین سفارشات (Table) */}
            <div className="card" id="orders-table">
              <button className="pill">جزئیات ←</button>
              <div className="title">آخرین سفارشات</div>
              
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>تاریخ</th>
                    <th>ساعت</th>
                    <th>کد سفارش</th>
                    <th>مبلغ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="table-arrow">←</span></td>
                    <td>1403/02/10</td>
                    <td>21:45</td>
                    <td>1</td>
                    <td>5,198,265 ریال</td>
                  </tr>
                  <tr>
                    <td><span className="table-arrow">←</span></td>
                    <td>1403/02/10</td>
                    <td>21:45</td>
                    <td>1</td>
                    <td>6,195,258 ریال</td>
                  </tr>
                  <tr>
                    <td><span className="table-arrow">←</span></td>
                    <td>1403/02/10</td>
                    <td>21:45</td>
                    <td>1</td>
                    <td>5,198,365 ریال</td>
                  </tr>
                  <tr>
                    <td><span className="table-arrow">←</span></td>
                    <td>1403/02/10</td>
                    <td>21:45</td>
                    <td>1</td>
                    <td>6,195,258 ریال</td>
                  </tr>
                  <tr>
                    <td><span className="table-arrow">←</span></td>
                    <td>1403/02/10</td>
                    <td>21:45</td>
                    <td>1</td>
                    <td>5,198,365 ریال</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Card 2: سفارش و تعهد ارسال (KPIs) */}
            <div className="card" id="ship-commit-kpis">
              <div className="title">سفارش و تعهد ارسال</div>
              <div className="kpis">
                <div className="kpi">
                  <span className="kpi-label">تعهد ارسال گذشته و امروز</span>
                  <span className="kpi-number">10</span>
                </div>
                <div className="kpi">
                  <span className="kpi-label">تعهد ارسال فردا به بعد</span>
                  <span className="kpi-number">7</span>
                </div>
                <div className="kpi">
                  <span className="kpi-label">سفارش های امروز</span>
                  <span className="kpi-number">5</span>
                </div>
                <div className="kpi">
                  <span className="kpi-label">سفارشهای لغو شده</span>
                  <span className="kpi-number">6</span>
                </div>
              </div>
            </div>
          </section>

          {/* Chart Row - Sales Chart */}
          <section className="chart-section">
            <div className="card chart-card" id="sales-chart">
              <div className="chart-header">
                <div className="title">روند فروش شما</div>
              </div>
              
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData} margin={{ top: 8, right: 16, left: 8, bottom: 8 }}>
                    <CartesianGrid stroke="#EEF1F5" vertical={false} />
                    <XAxis 
                      dataKey="label" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: "#6B7280" }} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: "#6B7280" }}
                      domain={[0, 4]}
                    />
                    <Tooltip wrapperStyle={{ direction: "rtl" }} />
                    <Legend 
                      verticalAlign="bottom" 
                      align="right" 
                      iconType="circle" 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#1677FF" 
                      strokeWidth={2.5} 
                      dot={{ r: 3 }} 
                      activeDot={{ r: 5 }}
                      name="درآمد ناخالص (ریال)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="count" 
                      stroke="#87CEEB" 
                      strokeWidth={2.5} 
                      dot={{ r: 3 }} 
                      activeDot={{ r: 5 }}
                      name="تعداد فروش شما"
                    />
                  </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
          </section>
    </SellerShell>
  );
}