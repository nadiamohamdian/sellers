// src/pages/ContractsPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/routes";
import SellerShell from "../layouts/SellerShell";
import "./ContractsPage.css";

// Contract Modal Component
function ContractModal({ open, onClose, contractNumber }: { 
    open: boolean; 
    onClose: () => void; 
    contractNumber: string;
}) {
    if (!open) return null;

    const contractContent = `
این قرارداد بین فروشنده و پلتفرم فروش آنلاین منعقد شده است.

ماده ۱ - موضوع قرارداد
فروشنده متعهد است که کالاهای خود را از طریق پلتفرم ارائه دهد و خدمات فروش را به مشتریان ارائه کند.

ماده ۲ - تعهدات فروشنده
- ارائه اطلاعات صحیح و کامل در مورد کالاها
- ارسال به موقع سفارشات
- پاسخگویی مناسب به مشتریان
- رعایت قوانین و مقررات پلتفرم

ماده ۳ - تعهدات پلتفرم
- ارائه بستر مناسب برای فروش
- پرداخت به موقع درآمد فروشنده
- پشتیبانی فنی و مشاوره

ماده ۴ - مدت قرارداد
این قرارداد به مدت یک سال از تاریخ امضا معتبر است و در صورت توافق طرفین قابل تمدید می‌باشد.

ماده ۵ - فسخ قرارداد
هر یک از طرفین می‌تواند با اعلام یک ماهه قرارداد را فسخ نماید.

تاریخ: ${new Date().toLocaleDateString('fa-IR')}
`;

    return (
        <div className="contract-modal-overlay" dir="rtl">
            <div className="contract-modal">
                <h4 className="contract-modal-title">قرارداد شماره {contractNumber}</h4>
                <div className="contract-modal-content">
                    <p>{contractContent}</p>
                </div>
                <div className="contract-modal-actions">
                    <button onClick={onClose} className="contract-modal-close-btn">
                        بستن
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function ContractsPage() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedContract, setSelectedContract] = useState("");

    const handleViewContract = (contractNumber: string) => {
        setSelectedContract(contractNumber);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedContract("");
    };

    return (
        <SellerShell title="قراردادها">
            <section className="panel" style={{padding: "24px"}}>
                <div className="contracts-header">
                    <div className="contracts-title">
                        <h2>قراردادهای فروشگاه</h2>
                        <p>مشاهده و مدیریت قراردادهای موجود</p>
                    </div>
                </div>
                
                <div className="contracts-grid">
                    {["یک","دو","سه","چهار"].map((no) => (
                        <article key={no} className="contract-card">
                            <div className="contract-preview" />
                            <h3 className="contract-card-title">قرارداد شماره {no}</h3>
                            <div className="contract-actions">
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => handleViewContract(no)}
                                >
                                    مشاهده قرارداد
                                </button>
                                <button 
                                    className="btn btn-outline"
                                    onClick={() => {
                                        // Download contract file (placeholder)
                                        console.log(`Download contract ${no}`);
                                    }}
                                >
                                    دانلود قرارداد
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            
            {/* Contract Modal */}
            <ContractModal 
                open={modalOpen} 
                onClose={handleCloseModal} 
                contractNumber={selectedContract}
            />
        </SellerShell>
    );
}
