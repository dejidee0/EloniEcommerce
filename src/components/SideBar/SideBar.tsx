/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import Category from "../Category/Category";
import BestSellers from "@/components/BestSellers/BestSellers";

const SideBar: React.FC = () => {
  return (
    <Box
      sx={{
        '--fs-5': '0.941rem',
        position: ['static', 'static', 'sticky'],
        top: ['0', '0', '30px'],
        left: ['auto', 'auto', '0'],
        padding: ['0', '0', '0'],
        minWidth: ['auto', 'auto', 'calc(25% - 15px)'],
        marginBottom: ['0', '0', '30px'],
        visibility: ['hidden', 'hidden', 'visible'],
        overflowY: ['visible', 'visible', 'auto'],
        msScrollChaining: ['none', 'none', 'chained'],
        overscrollBehavior: ['contain', 'contain', 'auto'],
        zIndex: ['auto', 'auto', '0'],
      }}
    >
      <Category />
      <BestSellers />
    </Box>
  );
};

export default SideBar;
