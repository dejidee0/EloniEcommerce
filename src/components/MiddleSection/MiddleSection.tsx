/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex } from "theme-ui";
import SideBar from "../SideBar/SideBar";
import TodaysDeal from "../TodaysDeal/TodaysDeal";

const MiddleSection: React.FC = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          gap: 10,
          justifyContent: "space-between",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            position: ["relative", "sticky"],
            top: 0,
            height: "fit-content",
            backgroundColor: "#ffffff",
            flexBasis: "25%",
            mb: [3, 0],
            display: ["none", "block"],
          }}
        >
          <SideBar />
        </Box>

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
          }}
        >
          <TodaysDeal />
        </Box>
      </Flex>
    </Box>
  );
};

export default MiddleSection;
