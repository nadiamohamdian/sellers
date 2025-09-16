// src/pages/Products.tsx
import AddProductForm from '../components/AddProductForm';

export default function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">محصولات</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">افزودن محصول جدید</h3>
          <AddProductForm />
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-4">لیست محصولات</h3>
          <p className="text-muted">محصولات شما اینجا نمایش داده می‌شوند</p>
        </div>
      </div>
    </div>
  );
}