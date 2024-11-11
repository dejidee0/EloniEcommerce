import React from 'react';
import { Box, Button, Text } from 'theme-ui';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface ConversionsChartProps {
  conversionRate: number; // Percentage value (e.g., 65.2)
  thisWeek: string;
  lastWeek: string;
}

const ConversionsChart: React.FC<ConversionsChartProps> = ({ conversionRate, thisWeek, lastWeek }) => {
  // Define the number of segments for a clear segmented arc
  const totalSegments = 500; // Total number of segments for the entire arc
  const filledSegments = Math.floor((conversionRate / 100) * totalSegments);
  
  // Create dataPoints with alternating colors for the segmented arc
  const dataPoints = [];
  for (let i = 0; i < totalSegments; i++) {
    dataPoints.push({
      y: 1, // Fixed size for each segment
      color: i < filledSegments ? (i % 2 === 0 ? "#FF8C00" : "#E0E0E0") : "#E0E0E0",
    });
  }

  const options = {
    animationEnabled: true,
    data: [
      {
        type: "doughnut",
        innerRadius: "75%", // Increased inner radius to make the doughnut thinner
        outerRadius: "85%", // Decreased outer radius to make the doughnut smaller
        startAngle: 180,
        endAngle: -180,
        indexLabel: "",
        dataPoints,
      }
    ]
  };

  return (
    <Box
      sx={{
        width: ["100%", "70%"],
        // border:"1px solid black",
        height: "600px",
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin: "20px 0",
      }}
    >
      <Text sx={{ fontSize: 16, fontWeight: 'bold', color: '#333', mb: 3 }}>Conversions</Text>
      
      <Box sx={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CanvasJSChart options={options} />
        
        {/* Centered label for percentage */}
        <Box sx={{ position: 'absolute', textAlign: 'center' }}>
          <Text sx={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>{conversionRate}%</Text>
          <Box>
            <Text sx={{ fontSize: 14, color: '#777' }}>Returning Customer</Text>
          </Box>
        </Box>
      </Box>
      
      <Button
        sx={{
          width: "100%",
          mt: 4,
          padding: "10px",
          backgroundColor: "#E5E7EB",
          color: "#333",
          fontSize: 14,
          borderRadius: "10px",
          cursor: "pointer",
          ":hover": {
            backgroundColor: "#D1D5DB",
          },
        }}
      >
        View Details
      </Button>
    </Box>
  );
};

export default ConversionsChart;
