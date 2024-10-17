/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import TodaysDeal from "@/components/TodaysDeal/TodaysDeal";
import { theme } from "@/Theme/theme";

const MiddleSection: React.FC = () => {
  return (
    <Box className="productFeatured" sx={{ ...theme.productContainer.productFeatured }}>
      <TodaysDeal />
    </Box>
  );
};

export default MiddleSection;
