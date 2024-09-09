/** @jsxImportSource theme-ui */
// import { useState } from "react";
import CategoryItems from "@/components/CategoryItems/CategoryItems";
import categories from "@/utils/categories";
import { Box, Heading } from "theme-ui";

const Category = () => {
 

  return (
    <Box
      sx={{
        border: "1px solid #ededed",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "30px",
      }}
    >
      <Heading
        sx={{
          paddingLeft: "15px",
          color: "#454545",
          fontWeight: "600",
          textTransform: "uppercase",
          fontSize: "0.941rem",
          letterSpacing: "0.8px",
          width: "20%",
        }}
      >
        Category
      </Heading>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <ul sx={{ width: "100%", padding: 0 }}>
          {categories.map((category, index: number) => (
            <CategoryItems
              key={index}
              image={category.image}
              name={category.name}
              addOutline={category.addOutline}  // Use the state to control the addOutline prop
              subItems={category.subItems}
            />
          ))}
        </ul>
      </Box>
      {/* Button or icon to toggle the state */}
    </Box>
  );
};

export default Category;
