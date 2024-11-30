// PerformanceChart.tsx
import React from 'react';
import { Box } from 'theme-ui';
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const data = [
  { x: new Date(2024, 0), pageViews: 30, clicks: 10 },
  { x: new Date(2024, 1), pageViews: 60, clicks: 20 },
  { x: new Date(2024, 2), pageViews: 40, clicks: 15 },
  { x: new Date(2024, 3), pageViews: 70, clicks: 25 },
  { x: new Date(2024, 4), pageViews: 50, clicks: 20 },
  { x: new Date(2024, 5), pageViews: 60, clicks: 30 },
  { x: new Date(2024, 6), pageViews: 50, clicks: 25 },
  { x: new Date(2024, 7), pageViews: 45, clicks: 20 },
  { x: new Date(2024, 8), pageViews: 70, clicks: 30 },
  { x: new Date(2024, 9), pageViews: 55, clicks: 25 },
  { x: new Date(2024, 10), pageViews: 65, clicks: 35 },
  { x: new Date(2024, 11), pageViews: 60, clicks: 40 },
].map((item) => ({
  ...item,
  x: item.x.toLocaleString('default', { month: 'short' }), // Format date to string
}));

const PerformanceChart: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        padding: '20px',
        margin: '20px 0',
      }}
    >
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" tick={{ fill: '#555' }} />
          <YAxis tick={{ fill: '#555' }} />
          <Tooltip formatter={(value: any) => value} />
          <Legend />
          <Bar
            dataKey="pageViews"
            name="Page Views"
            fill="#FF8C00"
            radius={[10, 10, 0, 0]} // Rounded corners
          />
          <Line
            type="monotone"
            dataKey="clicks"
            name="Clicks"
            stroke="#4CAF50"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PerformanceChart;
