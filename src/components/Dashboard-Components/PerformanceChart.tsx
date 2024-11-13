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
  title: { text: string; fontSize: number; fontColor: string; horizontalAlign: string };
  axisX: { valueFormatString: string; labelFontColor: string };
  axisY: { title: string; interval: number; labelFontColor: string; gridThickness: number; tickThickness: number; };
  toolTip: { shared: boolean; content: string };
  legend: {
    cursor: string;
    itemclick: (e: any) => void;
    horizontalAlign: string;
    verticalAlign: string;
    fontSize: number;
    fontColor: string;
  };
  data: {
    type: string;
    name: string;
    showInLegend: boolean;
    color: string;
    dataPoints: DataPoint[];
    borderRadius?: number; // For bar chart rounded borders
    lineThickness?: number; // For line chart thickness
    markerSize?: number; // For line chart markers
    markerColor?: string; // For line chart markers color
    zIndex?: number; // For controlling the rendering order
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
      text: 'performance',
      fontColor: '#333',
      fontSize: 18,
      horizontalAlign: 'left',
    },
    axisX: {
      valueFormatString: 'MMM',
      labelFontColor: '#555',
    },
    axisY: {
      title: 'Count',
      interval: 10,
      labelFontColor: '#555',
      gridThickness: 0, // Remove grid lines
      tickThickness: 0, // Remove tick marks on the Y-axis
    },
    toolTip: {
      shared: true,
      content: "{name}: {y}",
    },
    legend: {
      cursor: 'pointer',
      itemclick: toggleDataSeries,
      horizontalAlign: 'center',
      verticalAlign: 'top',
      fontSize: 14,
      fontColor: '#777',
    },
    data: [
      {
        type: 'column',
        name: 'Page Views',
        showInLegend: true,
        color: '#FF8C00',
        borderRadius: 20, // Apply larger border radius to the bar chart
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
        lineThickness: 2, // Line thickness for the line chart
        markerSize: 0, // Hiding the markers to create a smoother appearance
        zIndex: 1, // Ensure this line is behind the bar chart
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
    <Box 
      sx={{
        width: "100%", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        borderRadius: "15px", 
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", 
        backgroundColor: "#fff", 
        padding: "20px",
        margin: "20px 0"
      }}
    >
      <CanvasJSChart options={options} ref={(ref: any) => (chart = ref)} />
    </Box>
  );
};

export default PerformanceChart;
