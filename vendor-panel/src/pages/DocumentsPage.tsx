// src/pages/DocumentsPage.tsx
import React from "react";
import SellerShell from "../layouts/SellerShell";
import {
    Upload,
    Eye,
    Download,
} from "lucide-react";

type DocumentItem = {
    id: string;
    title: string;
    description: string;
    uploaded: boolean;
    fileName?: string;
};

function DocumentRow({ document }: { document: DocumentItem }) {
    return (
        <div className="doc-row">
            <div className="doc-info">
                <h3 className="doc-title">{document.title}</h3>
                <p className="doc-description">{document.description}</p>
            </div>
            <div className="doc-actions">
                {document.uploaded ? (
                    <div className="doc-uploaded">
                        <span className="doc-file-name">{document.fileName}</span>
                        <div className="doc-action-buttons">
                            <button className="doc-action-btn view-btn" aria-label="مشاهده">
                                <Eye className="size-4" />
                            </button>
                            <button className="doc-action-btn download-btn" aria-label="دانلود">
                                <Download className="size-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button className="doc-upload-btn">
                        <Upload className="size-4" />
                        <span>آپلود</span>
                    </button>
                )}
            </div>
        </div>
    );
}

export default function DocumentsPage() {
    // داده‌های نمونه (بعداً از API میاد)
    const documents: DocumentItem[] = [
        {
            id: "1",
            title: "کارت ملی",
            description: "تصویر کارت ملی صاحب فروشگاه",
            uploaded: true,
            fileName: "national_id.jpg",
        },
        {
            id: "2",
            title: "شناسنامه",
            description: "تصویر شناسنامه صاحب فروشگاه",
            uploaded: true,
            fileName: "birth_certificate.jpg",
        },
        {
            id: "3",
            title: "جواز کسب",
            description: "تصویر جواز کسب یا مجوز فعالیت",
            uploaded: false,
        },
        {
            id: "4",
            title: "سند مالکیت",
            description: "سند مالکیت محل فروشگاه یا اجاره نامه",
            uploaded: false,
        },
        {
            id: "5",
            title: "کد اقتصادی",
            description: "تصویر کد اقتصادی فروشگاه",
            uploaded: true,
            fileName: "economic_code.pdf",
        },
        {
            id: "6",
            title: "حساب بانکی",
            description: "تصویر کارت بانکی یا حساب جاری",
            uploaded: false,
        },
    ];

    return (
        <SellerShell title="مدارک">
            <section className="panel" style={{padding: "24px"}}>
                <div className="documents-header">
                    <div className="documents-title">
                        <h2>مدارک فروشگاه</h2>
                        <p>آپلود و مدیریت مدارک مورد نیاز برای تایید فروشگاه</p>
                    </div>
                </div>
                
                <div className="documents-list">
                    {documents.map((document) => (
                        <DocumentRow key={document.id} document={document} />
                    ))}
                </div>
            </section>
        </SellerShell>
    );
}