import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes';
import { Home, Wallet, FileText, Package, MapPin, Receipt, FileCheck, FileWarning, Headphones } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './SellerPanel.css';

const sales = [
  { d: '17/5', v: 1 }, { d: '17/6', v: 2 }, { d: '17/7', v: 1.5 }, { d: '17/8', v: 3 }, { d: '17/9', v: 2.2 }, { d: '17/10', v: 3.4 }
];

export default function SellerPanel(){
  const navigate = useNavigate();
  return (
    <div className="seller-shell" dir="rtl">
      <main className="seller-main">
        <section className="cards-two">
          <div className="panel-card">
            <div className="card-head">
              <span className="badge-icon"><Wallet size={18} /></span>
              <span className="card-title">برآیند تا حالا</span>
            </div>
            <div className="card-body">
              <div className="stat-big">۱۲,۸۵۰,۰۰۰ <span className="unit">ریال</span></div>
              <div className="stat-sub">نسبت به روز قبل: ۳٪+</div>
            </div>
          </div>
          <div className="panel-card">
            <div className="card-head">
              <span className="badge-icon"><Wallet size={18} /></span>
              <span className="card-title">فروش‌رفته</span>
            </div>
            <div className="card-body">
              <div className="stat-big">۹۷۰ <span className="unit">-</span></div>
              <div className="stat-sub">نسبت به روز قبل: ۲٪+</div>
            </div>
          </div>
        </section>

        <section className="cards-two">
          <div className="panel-card list-card">
            <div className="list-title">آخرین سفارش‌ها</div>
            <ul className="list">
              {['۵۶۳۲', '۳۵۲۱', '۳۵۲۰', '۳۴۷۸', '۲۳۴۷۸'].map((id,i)=> (
                <li key={i} className="list-row">
                  <span className="list-dot"></span>
                  <span>کد سفارش: {id}</span>
                  <span className="spacer" />
                  <span className="list-muted">۱۴۰۳/۰۳/{10+i}</span>
                  <span className="list-price">۲۱,۰۴۵</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-card list-card">
            <div className="list-title">سفارش و تعهد ارسال</div>
            <ul className="bullets">
              {['تعهد ارسال گذشته و امروز','تعهد ارسال فردا به بعد','سفارش‌های امروز','سفارش‌های لغو‌شده'].map((t,i)=> (
                <li key={i} className="bullet-row"><span className="bullet"/> {t} <span className="spacer"/> {10+i}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="panel-card chart-card">
          <div className="list-title">گزارش فروش/نمودار</div>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={sales} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="d" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="v" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>

      <aside className="seller-sidebar">
        <div className="sidebar-top">
          <button className="back-btn" onClick={()=>navigate(ROUTES.dashboard)}>
            <Home size={18} />
            <span>بازگشت به پیشخوان</span>
          </button>
          <div className="seller-id">
            <div className="avatar"/><div className="seller-name">نام فروشنده</div>
            <div className="live-dot"/>
          </div>
        </div>

        <nav className="menu">
          <button className="menu-item active"><Wallet size={18}/> پیشخوان</button>
          <button className="menu-item"><FileText size={18}/> گزارش‌ها</button>
          <button className="menu-item"><Package size={18}/> سفارش‌ها</button>
          <button className="menu-item"><MapPin size={18}/> مدیریت سفارشات جاری</button>
          <button className="menu-item"><Receipt size={18}/> تراکنش‌ها</button>
          <button className="menu-item" onClick={()=>navigate(ROUTES.sendDocuments)}><FileCheck size={18}/> مدارک</button>
          <button className="menu-item"><FileWarning size={18}/> تحلیل عملکرد</button>
        </nav>

        <div className="support">
          <button className="menu-item"><Headphones size={18}/> مرکز آموزش فروشندگان</button>
        </div>
      </aside>
    </div>
  );
}