/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import Category from "../Category/Category";
import BestSellers from "@/components/BestSellers/BestSellers";

const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        marginLeft: ["0", "30px"],
        display: ["none", "none", "none", "flex"],
        flexDirection: "column",
        width: ["100%"],
      }}
    >
      <Category />
      <BestSellers />
    </Box>
  );
};

export default SideBar;
