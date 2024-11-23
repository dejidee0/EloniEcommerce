// components/RecentOrders/RecentOrders.tsx
import React from 'react';
import { Table } from 'react-bootstrap';

interface Order {
  id: string;
  date: string;
  product: string;
  customer: string;
  status: string;
}

const RecentOrders: React.FC = () => {
  const orders: Order[] = [
    { id: '#123', date: '2024-04-25', product: 'Product A', customer: 'John Doe', status: 'Shipped' },
    { id: '#124', date: '2024-04-26', product: 'Product B', customer: 'Jane Smith', status: 'Processing' },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={index}>
            <td>{order.id}</td>
            <td>{order.date}</td>
            <td>{order.product}</td>
            <td>{order.customer}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RecentOrders;
