import React from "react";
import Sidebar from "./sidebar/Sidebar.tsx";
import Topbar from "./Topbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto p-6 bg-card">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;