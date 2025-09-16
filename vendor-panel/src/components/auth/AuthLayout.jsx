import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <main dir="rtl" className="min-h-dvh grid place-items-center bg-surface-soft px-4">
      <div className="rounded-2xl shadow-card bg-white p-4 sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-2 items-center max-w-4xl w-full">
          {children}
        </div>
      </div>
    </main>
  );
}