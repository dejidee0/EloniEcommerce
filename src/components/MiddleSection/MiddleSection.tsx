/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex } from "theme-ui";
import SideBar from "../SideBar/SideBar";
import TodaysDeal from "../TodaysDeal/TodaysDeal";

const MiddleSection: React.FC = () => {
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Flex
        sx={{
          justifyContent: "space-between",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            height: "fit-content",
            backgroundColor: "#ffffff",
            flexBasis: "30%",
          }}
        >
          <SideBar />
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            flexBasis: "70%",
            p: 3,
            maxHeight: "100vh",
            overflowY: "auto",
            "::-webkit-scrollbar": {
              width: "12px",
            },
            "::-webkit-scrollbar-track": {
              backgroundColor: "#f0f0f0",
            },
            "::-webkit-scrollbar-thumb": {
              backgroundColor: "#444142", // Custom scrollbar color
              borderRadius: "6px",
            },
            "::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b51c1c", // Color on hover
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
