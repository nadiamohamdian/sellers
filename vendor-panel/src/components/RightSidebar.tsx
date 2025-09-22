import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import {
    ChevronLeft,
    User,
    CheckCircle2,
    Store,
    MapPin,
    Wallet,
    FileText,
    FileSignature,
    Star,
} from "lucide-react";

export default function RightSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const satisfaction = 79.5;

    return (
        <div className="sidebar-stack" style={{display: "grid", gap: "16px"}}>
            <section className="panel" style={{padding: "16px"}}>
                {/* Back button */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="btn btn-outline"
                    style={{marginBottom: "16px"}}
                >
                    <ChevronLeft className="size-4" />
                    <span>بازگشت به پیشخوان</span>
                </button>

                {/* Seller header card */}
                <div className="sidebar-header">
                    <div className="sb-avatar">
                        <User className="size-4" />
                    </div>
                    <div className="sb-seller-name">نام فروشنده</div>
                </div>
                <div className="sb-header-cta">پیشخوان</div>
            </section>

            <section className="panel" style={{padding: "0"}}>
                <div className="sb-section-title" style={{padding: "16px 16px 8px"}}>اطلاعات</div>
                <ul className="sidebar-nav">
                    <li 
                        className={`sidebar-nav-item ${location.pathname === ROUTES.ownerInfo ? "active" : ""}`} 
                        onClick={() => navigate(ROUTES.ownerInfo)}
                    >
                        <span className="icon">
                            <CheckCircle2 className="size-4" />
                        </span>
                        <span className="label">اطلاعات مالک کسب و کار</span>
                    </li>
                    <li 
                        className={`sidebar-nav-item ${location.pathname === ROUTES.storeInfo ? "active" : ""}`} 
                        onClick={() => navigate(ROUTES.storeInfo)}
                    >
                        <span className="icon">
                            <Store className="size-4" />
                        </span>
                        <span className="label">اطلاعات فروشگاه</span>
                    </li>
                    <li 
                        className={`sidebar-nav-item ${location.pathname === ROUTES.addresses ? "active" : ""}`} 
                        onClick={() => navigate(ROUTES.addresses)}
                    >
                        <span className="icon">
                            <MapPin className="size-4" />
                        </span>
                        <span className="label">آدرس‌ها</span>
                    </li>
                    <li 
                        className={`sidebar-nav-item ${location.pathname === ROUTES.finance ? "active" : ""}`} 
                        onClick={() => navigate(ROUTES.finance)}
                    >
                        <span className="icon">
                            <Wallet className="size-4" />
                        </span>
                        <span className="label">مالی</span>
                    </li>
                    <li 
                        className={`sidebar-nav-item ${location.pathname === ROUTES.documents ? "active" : ""}`} 
                        onClick={() => navigate(ROUTES.documents)}
                    >
                        <span className="icon">
                            <FileText className="size-4" />
                        </span>
                        <span className="label">مدارک</span>
                    </li>
                    <li 
                        className={`sidebar-nav-item ${location.pathname === ROUTES.contracts ? "active" : ""}`} 
                        onClick={() => navigate(ROUTES.contracts)}
                    >
                        <span className="icon">
                            <FileSignature className="size-4" />
                        </span>
                        <span className="label">قراردادها</span>
                    </li>
                </ul>
            </section>

            <section className="panel" style={{padding: "16px"}}>
                <div className="sb-rating-title">امتیاز شما</div>
                <div className="sb-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                            key={i} 
                            className={`size-4 ${i < 3 ? 'fill-amber-400 stroke-amber-400' : 'stroke-amber-400'}`} 
                        />
                    ))}
                    <span className="sb-star-count">۳ از ۵</span>
                </div>
                <div className="sb-satisfaction">
                    <div className="sb-satisfaction-label">رضایت از خرید</div>
                    <div className="sb-progress-bar">
                        <div 
                            className="sb-progress-fill"
                            style={{ width: `${satisfaction}%` }}
                        />
                    </div>
                    <div className="sb-satisfaction-stats">
                        <span>{satisfaction.toFixed(1)}%</span>
                        <span>از ۵۶۳۲ رای</span>
                    </div>
                </div>
                <div className="sb-metrics">
                    <div className="sb-metric">
                        <div className="sb-metric-value">۷۵٪</div>
                        <div className="sb-metric-label">ارسال به موقع</div>
                    </div>
                    <div className="sb-metric">
                        <div className="sb-metric-value">۸۰٪</div>
                        <div className="sb-metric-label">بدون لغو</div>
                    </div>
                    <div className="sb-metric">
                        <div className="sb-metric-value">۹۵٪</div>
                        <div className="sb-metric-label">بدون مرجوعی</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
