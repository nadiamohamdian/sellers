import React from "react";

const menu = [
    { group: "کالا", items: ["جستجو و ثبت کالا","مدیریت کالا و افزودن تنوع","مدیریت تنوع و قیمت گذاری","گزارش موجودی کالا"] },
    { group: "سفارش‌ها", items: ["مدیریت سفارشات جاری","تاریخچه سفارشات"] },
    { group: "مالی", items: ["صورتحساب ها"] },
    { group: "تحلیل عملکرد", items: ["فروش و درآمد","مرجوعی"] },
    { group: "راهنما", items: ["مرکز آموزش فروشندگان","کالاهای غیرمجاز","پشتیبانی","درخواست پشتیبانی"] },
];

export default function RightSidebar() {
    return (
        <aside className="rsb">
            <div className="rsb__header">
                <div className="rsb__avatar" />
                <div className="rsb__seller">
                    <div className="rsb__seller-name">نام فروشنده</div>
                    <div className="rsb__seller-sub">Seller Center</div>
                </div>
            </div>

            <button className="rsb__primary">پیشخوان</button>

            {menu.map((g, gi) => (
                <div className="rsb__group" key={gi}>
                    <div className="rsb__group-title">{g.group}</div>
                    <ul className="rsb__list">
                        {g.items.map((t, i) => (
                            <li className="rsb__item" key={i}>
                                <span className="rsb__dot" />
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </aside>
    );
}
