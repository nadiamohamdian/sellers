import React, { useEffect } from "react";
import { 
  User, 
  ArrowLeft, 
  Bell, 
  Home, 
  Search, 
  Package, 
  Tag, 
  BarChart3, 
  ClipboardList, 
  Clock, 
  Receipt, 
  TrendingUp, 
  RotateCcw, 
  BookOpen, 
  AlertTriangle, 
  Headphones, 
  ChevronLeft,
  TrendingUp as TrendUp,
  FileText,
  Download
} from "lucide-react";
import "./DashboardPage.css";

const DashboardPage: React.FC = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "rtl");
    }
  }, []);

  return (
    <div className="main-page-10">
      {/* Sidebar */}
      <div className="rectangle-parent">
        <div className="group-child"></div>
        <div className="group-item"></div>
        
        {/* Header Section */}
        <div className="ellipse-parent">
          <div className="group-inner"></div>
          <span className="icon"><User size={18} /></span>
        </div>
        <b className="b" id="text">نام فروشنده</b>
        
        {/* Back and Notification Icons */}
        <span className="icon"><ArrowLeft size={18} /></span>
        <div className="vector-parent" id="groupContainer20">
          <span className="icon"><Bell size={18} /></span>
          <div className="backgroundborder">
            <b className="b14">۱</b>
          </div>
        </div>
        
        {/* Dashboard Button */}
        <div className="rectangle-div"></div>
        <div className="parent">
          <b className="main-page-10-b">پیشخوان</b>
          <span className="icon"><Home size={18} /></span>
        </div>
        
        {/* Section Headers and Items */}
        <div className="parent10">
          <div className="div">کالا</div>
          <div className="ellipse-div"></div>
        </div>
        <div className="group">
          <b className="main-page-10-b">جستجو و ثبت کالا</b>
          <span className="icon"><Search size={18} /></span>
        </div>
        <div className="container">
          <b className="main-page-10-b">مدیریت کالا و افزودن تنوع</b>
          <span className="icon"><Package size={18} /></span>
        </div>
        <div className="group-div">
          <b className="main-page-10-b">مدیریت تنوع و قیمت گذاری</b>
          <span className="icon"><Tag size={18} /></span>
        </div>
        <div className="main-page-10-parent">
          <b className="main-page-10-b">گزارش موجودی کالا</b>
          <span className="icon"><BarChart3 size={18} /></span>
        </div>
        
        <div className="parent11">
          <div className="div">سفارش‌‌ها</div>
          <div className="group-child14"></div>
        </div>
        <div className="parent2">
          <b className="main-page-10-b">مدیریت سفارشات جاری</b>
          <span className="icon"><ClipboardList size={18} /></span>
        </div>
        <div className="parent3">
          <b className="main-page-10-b">تاریخچه سفارشات</b>
          <span className="icon"><Clock size={18} /></span>
        </div>
        
        <div className="parent12">
          <div className="div">مالی</div>
          <div className="group-child15"></div>
        </div>
        <div className="parent4">
          <b className="main-page-10-b">صورتحساب ها</b>
          <span className="icon"><Receipt size={18} /></span>
        </div>
        
        <div className="parent13">
          <div className="div">تحلیل عملکرد</div>
          <div className="group-child16"></div>
        </div>
        <div className="parent5">
          <b className="main-page-10-b">فروش و درآمد</b>
          <span className="icon"><TrendingUp size={18} /></span>
        </div>
        <div className="parent6">
          <b className="main-page-10-b">مرجوعی</b>
          <span className="icon"><RotateCcw size={18} /></span>
        </div>
        
        <div className="parent14">
          <div className="div">راهنما</div>
          <div className="group-child17"></div>
        </div>
        <div className="parent7">
          <b className="main-page-10-b">مرکز آموزش فروشندگان</b>
          <span className="icon"><BookOpen size={18} /></span>
        </div>
        <div className="parent8">
          <b className="b12">کالاهای غیرمجاز</b>
          <span className="icon"><AlertTriangle size={18} /></span>
        </div>
        
        <div className="parent15">
          <div className="div">پشتیبانی</div>
          <div className="group-child18"></div>
        </div>
        <div className="parent9">
          <b className="b13">درخواست پشتیبانی</b>
          <span className="icon"><Headphones size={18} /></span>
        </div>
        
        <div className="vertical-divider"></div>
      </div>

      {/* Main Content Area */}
      <div className="main-page-10-child"></div>
      <div className="main-page-10-item"></div>
      <div className="main-page-10-inner"></div>
      
      {/* Sales Chart */}
      <div className="rectangle-group">
        <div className="group-child19"></div>
        <span className="icon"><BarChart3 size={18} /></span>
        <b className="b15">گزارش فروش</b>
        <b className="b16">روند فروش شما</b>
        
        <div className="text"></div>
        <div className="main-page-10-text"></div>
        <div className="text2"></div>
        
        {/* Chart X-axis labels */}
        <div className="main-page-10-group">
          <div className="div6">۱/۱۵</div>
          <div className="div7">۱/۱۷</div>
          <div className="div8">۱/۱۹</div>
          <div className="div9">۱/۲۱</div>
          <div className="div10">۱/۲۳</div>
          <div className="div11">۱/۲۵</div>
          <div className="div12">۱/۲۷</div>
          <div className="div13">۱/۲۹</div>
          <div className="div14">۱/۳۱</div>
          <div className="div15">۲/۰۲</div>
          <div className="div16">۲/۰۴</div>
          <div className="div17">۲/۰۶</div>
          <div className="div18">۲/۰۸</div>
          <div className="div19">۲/۱۰</div>
          <div className="div20">۲/۱۲</div>
        </div>
        
        {/* Chart Y-axis labels */}
        <div className="group2">
          <div className="div21">۰</div>
          <div className="div22">۱</div>
          <div className="div23">۲</div>
          <div className="div24">۳</div>
          <div className="div25">۴</div>
        </div>
        <div className="group3">
          <div className="div26">۰</div>
          <div className="div27">۱</div>
          <div className="div28">۲</div>
          <div className="div24">۳</div>
          <div className="div30">۴</div>
        </div>
        
        {/* Chart Legend */}
        <div className="background-parent">
          <div className="background"></div>
          <div className="div31">تعداد فروش شما</div>
          <div className="main-page-10-background"></div>
          <div className="div32">درآمد ناخالص (ریال)</div>
        </div>
      </div>

      {/* Sold Items Card */}
      <div className="parent16">
        <b className="b17">فروخته‌شده</b>
        <div className="parent17">
          <b className="b18">۲۰</b>
          <b className="b19">کالا</b>
        </div>
        <div className="svg-parent">
          <span className="icon"><TrendUp size={18} /></span>
          <b className="b20">۳۰٪</b>
          <b className="b21">نسبت به بازه قبل</b>
        </div>
      </div>
      <div className="rectangle-container" id="groupContainer3">
        <div className="group-child21"></div>
        <div className="svg-group">
          <span className="icon"><FileText size={18} /></span>
          <b className="b22">جزئیات</b>
        </div>
      </div>

      {/* Gross Income Card */}
      <div className="parent18">
        <b className="b17">درآمد نا خالص</b>
        <div className="parent19">
          <b className="b18">۱۲.۵۸۶.۰۰۰</b>
          <b className="b25">ریال</b>
        </div>
        <div className="svg-parent">
          <span className="icon"><TrendUp size={18} /></span>
          <b className="b20">۳۰٪</b>
          <b className="b21">نسبت به بازه قبل</b>
        </div>
      </div>
      <div className="main-page-10-rectangle-parent" id="groupContainer5">
        <div className="group-child21"></div>
        <div className="svg-group">
          <span className="icon"><FileText size={18} /></span>
          <b className="b22">جزئیات</b>
        </div>
      </div>

      {/* Order & Shipping Card */}
      <div className="main-page-10-main-page-10-child"></div>
      <div className="rectangle-parent2" id="groupContainer6">
        <div className="group-child21"></div>
        <div className="svg-group">
          <span className="icon"><FileText size={18} /></span>
          <b className="b22">جزئیات</b>
                </div>
                </div>
      <span className="icon"><ChevronLeft size={18} /></span>
      <span className="icon"><ChevronLeft size={18} /></span>

      {/* Latest Orders Table */}
      <div className="parent20">
        <b className="b30">۱۴۰۳/۰۲/۱۰</b>
        <b className="b31">۱۴۰۳/۰۲/۱۰</b>
        <b className="b32">۱۴۰۳/۰۲/۱۰</b>
        <b className="b33">۱۴۰۳/۰۲/۱۰</b>
        <b className="b34">۱۴۰۳/۰۲/۱۰</b>
      </div>
      <div className="parent21">
        <b className="b30">۲۱:۴۵</b>
        <b className="b31">۲۱:۴۵</b>
        <b className="b32">۲۱:۴۵</b>
        <b className="b33">۲۱:۴۵</b>
        <b className="b34">۲۱:۴۵</b>
      </div>
      <span className="icon"><ChevronLeft size={18} /></span>
      <div className="parent22">
        <b className="b40">کد سفارش : ۲۵۴۸۲</b>
        <b className="b41">کد سفارش : ۲۵۴۸۱</b>
        <b className="b42">کد سفارش : ۲۵۴۸۰</b>
        <b className="b43">کد سفارش : ۲۵۴۷۹</b>
        <b className="b34">کد سفارش : ۲۵۴۷۸</b>
      </div>
      <div className="parent23">
        <b className="b45">۵٬۱۹۸٬۲۶۵  ریال</b>
        <b className="b46">۶٬۱۹۵٬۲۵۸  ریال</b>
        <b className="b47">۵٬۱۹۸٬۲۶۵  ریال</b>
        <b className="b48">۶٬۱۹۵٬۲۵۸  ریال</b>
        <b className="b49">۵٬۱۹۸٬۲۶۵  ریال</b>
                </div>
      <div className="parent24">
        <b className="b50">۱</b>
        <b className="b51">-</b>
        <b className="b52">۲</b>
        <b className="b53">-</b>
        <b className="b32">۳</b>
        <b className="b43">۴</b>
        <b className="b56">-</b>
        <b className="b34">۵</b>
        <b className="b58">-</b>
        <b className="b59">-</b>
                </div>
      <span className="icon"><ChevronLeft size={18} /></span>
      <span className="icon"><ChevronLeft size={18} /></span>

      {/* Order & Shipping Details */}
      <b className="b60">تعهد ارسال گذشته و امروز</b>
      <b className="b61">آخرین سفارشات</b>
      <b className="b62">۱۰</b>
      <b className="b63">تعهد ارسال فردا به بعد</b>
      <span className="icon"><ChevronLeft size={18} /></span>
      <b className="b64">سفارش‌های امروز</b>
      <b className="b65">۷</b>
      <span className="icon"><ChevronLeft size={18} /></span>
      <b className="b66">سفارش‌های لغوشده</b>
      <span className="icon"><ChevronLeft size={18} /></span>
      <b className="b67">۵</b>
      <span className="icon"><ChevronLeft size={18} /></span>
      <b className="b68">۶</b>
      <b className="b69">سفارش و تعهد ارسال</b>
        </div>
    );
};

export default DashboardPage;