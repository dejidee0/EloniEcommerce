/** @jsxImportSource theme-ui */
import CategoryItems from "@/components/CategoryItems/CategoryItems"
import categories from "@/utils/categories"
import { Box, Heading } from "theme-ui"

const Category = () => {
  return (
    <Box
      sx={{
        border: "1px solid #ededed",
        width: "100%",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "30px",
        // marginLeft: 50,
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
          width: '20%'
        }}
      >
        Category
      </Heading>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // padding: 2,
          marginBottom: "10px",
        }}
      >
        <ul sx={{ width: "100%", padding: 0 }}>
          {categories.map((category, index: number) => (
            <CategoryItems
              key={index}
              image={category.image}
              name={category.name}
              addOutline={category.addOutline}
              subItems={category.subItems}
            />
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default Category;
