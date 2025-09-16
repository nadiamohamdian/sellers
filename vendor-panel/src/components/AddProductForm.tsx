// src/components/AddProductForm.tsx
import { useState } from 'react';

export default function AddProductForm() {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('available');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // اینجا می‌تونید داده‌ها رو به API ارسال کنید یا ذخیره کنید
    console.log({ productName, price, description, status });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-fg mb-2">نام محصول</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-3 border border-border rounded-xl bg-card text-fg focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-fg mb-2">قیمت</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-3 border border-border rounded-xl bg-card text-fg focus:outline-none focus:ring-2 focus:ring-brand"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-fg mb-2">توضیحات</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-border rounded-xl bg-card text-fg focus:outline-none focus:ring-2 focus:ring-brand"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-fg mb-2">وضعیت</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 border border-border rounded-xl bg-card text-fg focus:outline-none focus:ring-2 focus:ring-brand"
        >
          <option value="available">موجود</option>
          <option value="out-of-stock">تمام شده</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-brand text-white py-3 rounded-xl hover:opacity-90 transition-opacity font-medium"
      >
        افزودن محصول
      </button>
    </form>
  );
}