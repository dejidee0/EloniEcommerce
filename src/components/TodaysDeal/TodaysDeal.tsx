/** @jsxImportSource theme-ui */
import React from "react";
import DealCard from "../DealCard/DealCard";
import { Box, Text } from "theme-ui";

const TodaysDeal: React.FC = () => {
  return (
    <Box sx={{justifyContent: 'right', width: '142%'}}>
      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          py: "10px",
          // justifyContent: 'right',
          width: '142%'
        }}
      >
        <Text
          as={"h4"}
          sx={{
            fontWeight: 600,
            color: "#000",
            fontSize: "1.5rem",
          }}
        >
          Today's Deal
        </Text>
      </Box>
      <DealCard />
      <DealCard />
      <DealCard />
      <DealCard />
    </Box>
  );
};

export default TodaysDeal;