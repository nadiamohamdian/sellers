import React from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            {/* سایدبار تو همین لایه رندر می‌شود */}
            {/* <Sidebar />  -- فرض می‌کنیم خودت قبلا گذاشتی */}

            {/* فاصله از راست برای دسکتاپ تا زیر سایدبار نرود */}
            <main className="container xl:pr-[480px] lg:pr-[480px] md:pr-0 pr-0">
                {children}
            </main>
        </div>
    );
}
