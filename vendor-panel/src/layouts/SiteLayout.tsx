import React from 'react';
import Sidebar from '../components/sections/Sidebar';
import Topbar from '../components/sections/Topbar';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div dir="rtl" className="min-h-screen bg-surface-soft">
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Topbar */}
          <Topbar />

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto p-6 space-y-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
