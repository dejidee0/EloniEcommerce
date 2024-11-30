import React from 'react';
import { Box, Button, Text } from 'theme-ui';
import { PieChart, Pie, Cell } from 'recharts';

interface ConversionsChartProps {
  conversionRate: number; // Percentage value (e.g., 65.2)
}

const ConversionsChart: React.FC<ConversionsChartProps> = ({ conversionRate }) => {
  const totalSegments = 100; // Increased total segments for a smoother arc
  const filledSegments = Math.floor((conversionRate / 100) * totalSegments);
  const emptySegments = totalSegments - filledSegments;

  // Generate data array with more segments
  const data = [
    ...Array(filledSegments).fill({ value: 1, color: "#FF8C00" }),
    ...Array(emptySegments).fill({ value: 1, color: "#E0E0E0" }),
  ];

  return (
    <Box
      sx={{
        width: ["100%", "70%"],
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

      <Box sx={{ position: "relative", width: "100%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={120}
            outerRadius={150}
            startAngle={180}
            endAngle={-180}
            paddingAngle={0.5}
            isAnimationActive={true} // Enable animation
            animationBegin={0} // Start immediately
            animationDuration={1500} // Duration of 1.5 seconds
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

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





