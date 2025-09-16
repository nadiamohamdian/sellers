import OrdersTable from '../components/OrdersTable';
export default function Orders() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">سفارشات</h2>
      <OrdersTable />
    </div>
  );
}