// src/pages/AddressesPage.tsx
import React from "react";
import SellerShell from "../layouts/SellerShell";
import {
    Plus,
    Edit,
    Trash2,
} from "lucide-react";

type AddressItem = {
    id: string;
    title: string;
    address: string;
    mapThumbnail: string;
    isDefault?: boolean;
};

function BadgeDefault() {
    return (
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-[11px] font-bold">
            <span className="size-3 rounded-full bg-blue-500" />
            آدرس پیش‌فرض
        </span>
    );
}

function AddressCard({ address }: { address: AddressItem }) {
    return (
        <div className="address-card">
            <div className="address-header">
                <div className="address-info">
                    <div className="address-title-row">
                        <h3 className="address-title">{address.title}</h3>
                        {address.isDefault && <BadgeDefault />}
                    </div>
                    <p className="address-text">{address.address}</p>
                </div>
                <div className="address-actions">
                    <button className="action-btn edit-btn" aria-label="ویرایش">
                        <Edit className="size-4" />
                    </button>
                    <button className="action-btn delete-btn" aria-label="حذف">
                        <Trash2 className="size-4" />
                    </button>
                </div>
            </div>
            <div className="address-map">
                <div className="map-thumbnail">
                    <div className="map-placeholder">
                        <div className="map-icon">📍</div>
                        <div className="map-text">نمایش نقشه</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AddressesPage() {
    // داده‌های نمونه (بعداً از API میاد)
    const addresses: AddressItem[] = [
        {
            id: "1",
            title: "آدرس اصلی",
            address: "تهران، خیابان ولیعصر، پلاک ۱۲۳، واحد ۴",
            mapThumbnail: "/map-placeholder.jpg",
            isDefault: true,
        },
        {
            id: "2",
            title: "آدرس انبار",
            address: "تهران، خیابان آزادی، پلاک ۴۵۶، واحد ۸",
            mapThumbnail: "/map-placeholder.jpg",
        },
        {
            id: "3",
            title: "آدرس فروشگاه",
            address: "تهران، خیابان کریمخان، پلاک ۷۸۹، واحد ۲",
            mapThumbnail: "/map-placeholder.jpg",
        },
    ];

    return (
        <SellerShell title="آدرس‌ها">
            <section className="panel" style={{padding: "24px"}}>
                <div className="addresses-header">
                    <div className="addresses-title">
                        <h2>آدرس‌های ثبت شده</h2>
                        <p>مدیریت و ویرایش آدرس‌های فروشگاه و انبار</p>
                    </div>
                    <button className="btn btn-primary">
                        <Plus className="size-4" />
                        افزودن آدرس جدید
                    </button>
                </div>
                
                <div className="addresses-grid">
                    {addresses.map((address) => (
                        <AddressCard key={address.id} address={address} />
                    ))}
                </div>
            </section>
        </SellerShell>
    );
}