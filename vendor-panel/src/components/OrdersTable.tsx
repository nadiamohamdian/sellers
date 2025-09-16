// src/components/OrdersTable.tsx
import { useReactTable, getCoreRowModel, createColumnHelper, flexRender } from '@tanstack/react-table';

const data = [
  { customer: 'Ali', date: '2025-09-03', status: 'Delivered', amount: 150 },
  { customer: 'Sara', date: '2025-09-02', status: 'Pending', amount: 80 },
  { customer: 'Reza', date: '2025-09-01', status: 'Shipped', amount: 120 },
];

type Order = {
  customer: string;
  date: string;
  status: string;
  amount: number;
};

const columnHelper = createColumnHelper<Order>();

const columns = [
  columnHelper.accessor('customer', {
    header: 'Customer',
  }),
  columnHelper.accessor('date', {
    header: 'Date',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
  }),
];

export default function OrdersTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full table-auto">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className="px-6 py-2 text-left border-b">
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className="px-6 py-2 border-b">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}