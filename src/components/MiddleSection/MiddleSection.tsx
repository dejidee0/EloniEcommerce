/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex } from "theme-ui";
import TodaysDeal from "../TodaysDeal/TodaysDeal";

const MiddleSection: React.FC = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Flex
        sx={{
          marginBottom: 30,
          width: '142%'
        }}
      >

        {/* Content Area  for the todays deal*/}
        <Box
          sx={{
            flexBasis: ["100%", "70%"],
            p: [2, 3],
            maxHeight: ["auto", "100vh"],
            overflowY: "auto",
            "::-webkit-scrollbar": {
              width: "12px",
            },
            "::-webkit-scrollbar-track": {
              backgroundColor: "#f0f0f0",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#444142",
              borderRadius: "6px",
            },
            "::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b51c1c",
            },
            justifyContent: 'right',
            width: '142%'
          }}
        >
          <TodaysDeal />
        </Box>
      </Flex>
    </Box>
  );
};

export default MiddleSection;
