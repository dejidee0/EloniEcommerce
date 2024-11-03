// components/RecentTransactions/RecentTransactions.tsx
import React from 'react';
import { Table } from 'react-bootstrap';

interface Transaction {
  date: string;
  amount: string;
  status: string;
}

const RecentTransactions: React.FC = () => {
  const transactions: Transaction[] = [
    { date: '2024-04-25', amount: '$120.55', status: 'Completed' },
    { date: '2024-04-26', amount: '$45.00', status: 'Pending' },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default RecentTransactions;
