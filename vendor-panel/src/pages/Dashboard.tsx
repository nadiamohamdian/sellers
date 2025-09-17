import React, { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';

export default function Dashboard() {
  const [activePage, setActivePage] = useState('dashboard');

  const handlePageChange = (page: string) => {
    setActivePage(page);
    console.log('Navigating to:', page);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      
      {/* Main Content */}
      <div className="flex-1 mr-80 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">داشبورد</h1>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-gray-800">درآمد نا خالص</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xs flex items-center gap-1 hover:bg-blue-600 transition-colors">
                  جزئیات
                  <span className="text-xs">←</span>
                </button>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">۱۲۰,۵۸۶,۰۰۰ ریال</div>
              <div className="text-sm font-medium text-green-600">+ ۳۰% نسبت به بازه قبل</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-gray-800">فروخته شده</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xs flex items-center gap-1 hover:bg-blue-600 transition-colors">
                  جزئیات
                  <span className="text-xs">←</span>
                </button>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-2">۲۰ کالا</div>
              <div className="text-sm font-medium text-green-600">+ ۳۰% نسبت به بازه قبل</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-gray-800">سفارش و تعهد ارسال</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xs flex items-center gap-1 hover:bg-blue-600 transition-colors">
                  جزئیات
                  <span className="text-xs">←</span>
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm">
                  <span className="text-blue-500 ml-2">←</span>
                  <span>تعهد ارسال گذشته و امروز: 10</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-blue-500 ml-2">←</span>
                  <span>تعهد ارسال فردا به بعد: 7</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-blue-500 ml-2">←</span>
                  <span>سفارش های امروز: 5</span>
                </div>
                <div className="flex items-center text-sm">
                  <span className="text-blue-500 ml-2">←</span>
                  <span>سفارشهای لغو شده: 6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">آخرین سفارشات</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-1 hover:bg-blue-600 transition-colors">
                جزئیات
                <span className="text-xs">←</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 rounded-lg mb-3 font-semibold text-gray-600 text-sm">
                <div>کد سفارش</div>
                <div>مبلغ</div>
                <div>تاریخ</div>
                <div>ساعت</div>
                <div></div>
              </div>
              
              {[
                { id: '25482', amount: '5,198,265 ریال', date: '1403/02/10', time: '21:45' },
                { id: '25481', amount: '6,195,258 ریال', date: '1403/02/10', time: '21:45' },
                { id: '25480', amount: '5,198,365 ریال', date: '1403/02/10', time: '21:45' },
                { id: '25479', amount: '6,195,258 ریال', date: '1403/02/10', time: '21:45' },
                { id: '25478', amount: '5,198,365 ریال', date: '1403/02/10', time: '21:45' },
              ].map((order) => (
                <div 
                  key={order.id}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="text-sm text-gray-800">{order.id}</div>
                  <div className="text-sm text-gray-800">{order.amount}</div>
                  <div className="text-sm text-gray-800">{order.date}</div>
                  <div className="text-sm text-gray-800">{order.time}</div>
                  <div className="text-blue-500 text-xs">←</div>
                </div>
              ))}
            </div>
          </div>

          {/* Sales Chart Placeholder */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-5 pb-4 border-b-2 border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">روند فروش شما</h2>
              <button className="text-blue-500 text-sm flex items-center gap-1 hover:text-blue-700 transition-colors">
                گزارش فروش
                <span className="text-xs">←</span>
              </button>
            </div>
            
            <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">نمودار فروش در اینجا نمایش داده می‌شود</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}