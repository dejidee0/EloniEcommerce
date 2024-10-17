/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import Category from "../Category/Category";
import BestSellers from "@/components/BestSellers/BestSellers";
import { theme } from "@/Theme/theme";
import NewArrival from "@/components/NewArrival/NewArrival";
import MiddleSection from "@/components/MiddleSection/MiddleSection";

const Product: React.FC = () => {
  return (
    <Box className="productContainer">
      <Box className="container" sx={{ ...theme.productContainer.container }}>
        <Box className="sidebar" sx={{ ...theme.productContainer.sidebar }}>
          <Category />
          <BestSellers />
        </Box>

        <Box className='productBox' sx={{ ...theme.productContainer.productBox }}>
          <NewArrival />

          <MiddleSection />

        </Box>
      </Box>
    </Box>
  );
};

export default Product;
