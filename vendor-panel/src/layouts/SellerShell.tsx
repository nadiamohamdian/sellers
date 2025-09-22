import React from "react";
import "./seller-shell.css";
import RightSidebar from "../components/RightSidebar";

type Props = {
  title?: string;
  children: React.ReactNode;
  headerExtra?: React.ReactNode; // optional back / actions row
};

export default function SellerShell({ title, children, headerExtra }: Props) {
  return (
    <div className="container">
      <div className="shell">
        <main className="shell-main">
          {headerExtra ? (
            <div className="shell-header">{headerExtra}</div>
          ) : null}
          {title ? <h1 className="h-page">{title}</h1> : null}
          {children}
        </main>

        <aside className="shell-aside">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
}
