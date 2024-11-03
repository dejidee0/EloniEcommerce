// components/TopPagesTable/TopPagesTable.tsx
import React from 'react';
import { Table } from 'react-bootstrap';

interface Page {
  path: string;
  views: number;
  exitRate: string;
}

const TopPagesTable: React.FC = () => {
  const pages: Page[] = [
    { path: '/home', views: 1000, exitRate: '20%' },
    { path: '/products', views: 750, exitRate: '15%' },
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Page Path</th>
          <th>Views</th>
          <th>Exit Rate</th>
        </tr>
      </thead>
      <tbody>
        {pages.map((page, index) => (
          <tr key={index}>
            <td>{page.path}</td>
            <td>{page.views}</td>
            <td>{page.exitRate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TopPagesTable;
