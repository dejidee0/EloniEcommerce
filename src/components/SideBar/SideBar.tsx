/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
// import './css/style.css';
import Category from "../Category/Category";
import BestSellers from "@/components/BestSellers/BestSellers";

const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        marginLeft: "30px",
        display: ["none", "flex"],
        flexDirection: "column",
        // width: '315px',
      }}
    >
      <Category />
      <BestSellers />
    </Box>
  );
};

export default SideBar;
