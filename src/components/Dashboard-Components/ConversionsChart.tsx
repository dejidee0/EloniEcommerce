// components/ConversionsChart/ConversionsChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

const ConversionsChart: React.FC = () => {
  const options = {
    chart: { type: 'bar' },
    // Add other chart options here
  };

  const series = [{ name: 'Conversions', data: [15, 25, 35, 45] }];

  return <Chart options={options} series={series} type="bar" height={350} />;
};

export default ConversionsChart;
