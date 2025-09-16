import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import OwnerInfoSidebar from "./OwnerInfoSidebar";

export default function OwnerInfoLayout() {
    const navigate = useNavigate();

    return (
        <div dir="rtl" className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-[1400px] px-4 py-6">
                <div className="flex gap-6 flex-row-reverse">
                    {/* محتوای صفحه‌های داخلی */}
                    <div className="flex-1">
                        <Outlet />
                    </div>

                    {/* سایدبار سمت راست */}
                    <div className="sticky top-4 h-[calc(100vh-2rem)] overflow-auto">
                        <OwnerInfoSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
