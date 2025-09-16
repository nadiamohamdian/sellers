// src/layouts/DashboardLayout.tsx
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/Topbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div dir="rtl" className="flex">
            <aside className="w-[460px] shrink-0">
                <Sidebar />
            </aside>
            <main className="flex-1 min-h-screen bg-[#F6F8FB]">
                <Topbar />
                <Outlet />
            </main>
        </div>
    );
}
