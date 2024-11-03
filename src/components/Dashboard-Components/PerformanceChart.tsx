// PerformanceChart.tsx
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { Box } from 'theme-ui';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface DataPoint {
  x: Date;
  y: number;
}

interface ChartOptions {
  animationEnabled: boolean;
  title: { text: string };
  axisX: { valueFormatString: string };
  axisY: { title: string; interval: number };
  toolTip: { shared: boolean };
  legend: {
    cursor: string;
    itemclick: (e: any) => void;
    horizontalAlign: string;
    verticalAlign: string;
  };
  data: {
    type: string;
    name: string;
    showInLegend: boolean;
    color: string;
    dataPoints: DataPoint[];
  }[];
}

const PerformanceChart: React.FC = () => {
  const toggleDataSeries = (e: any) => {
    if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart?.render();
  };

  const options: ChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Performance',
    
    },
    axisX: {
      valueFormatString: 'MMM',
    },
    axisY: {
      title: 'Count',
      interval: 10,
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
      horizontalAlign: 'right',
      verticalAlign: 'top',
    },
    data: [
      {
        type: 'column',
        name: 'Page Views',
        showInLegend: true,
        color: '#FF8C00',
        dataPoints: [
          { x: new Date(2024, 0), y: 30 },
          { x: new Date(2024, 1), y: 60 },
          { x: new Date(2024, 2), y: 40 },
          { x: new Date(2024, 3), y: 70 },
          { x: new Date(2024, 4), y: 50 },
          { x: new Date(2024, 5), y: 60 },
          { x: new Date(2024, 6), y: 50 },
          { x: new Date(2024, 7), y: 45 },
          { x: new Date(2024, 8), y: 70 },
          { x: new Date(2024, 9), y: 55 },
          { x: new Date(2024, 10), y: 65 },
          { x: new Date(2024, 11), y: 60 },
        ],
      },
      {
        type: 'line',
        name: 'Clicks',
        showInLegend: true,
        color: '#4CAF50',
        dataPoints: [
          { x: new Date(2024, 0), y: 10 },
          { x: new Date(2024, 1), y: 20 },
          { x: new Date(2024, 2), y: 15 },
          { x: new Date(2024, 3), y: 25 },
          { x: new Date(2024, 4), y: 20 },
          { x: new Date(2024, 5), y: 30 },
          { x: new Date(2024, 6), y: 25 },
          { x: new Date(2024, 7), y: 20 },
          { x: new Date(2024, 8), y: 30 },
          { x: new Date(2024, 9), y: 25 },
          { x: new Date(2024, 10), y: 35 },
          { x: new Date(2024, 11), y: 40 },
        ],
      },
    ],
  };

  let chart: CanvasJSReact.CanvasJSChart | null = null;

  return (
      <Box sx={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center",borderRadius:"15px"}}>
      <CanvasJSChart options={options} onRef={(ref: any) => (chart = ref)} />
      </Box>
    
  );
};

export default PerformanceChart;
