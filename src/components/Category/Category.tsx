/** @jsxImportSource theme-ui */
import { addOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
import CategoryItems from "@/components/CategoryItems/CategoryItems";
import { fetchProductsByCategory } from "../../utils/categories"; // Import the function to fetch products
import { Box, Heading } from "theme-ui";
import Categories from "../../utils/categories";
import { theme } from "@/Theme/theme";

const Category = () => {
  const [categories] = useState(Categories);
  const [products, setProducts] = useState({});

  // Fetch products for each category when the component mounts
  useEffect(() => {
    const fetchAllCategoryProducts = async () => {
      const categoryProductPromises = categories.map(async (category) => {
        const categoryProducts = await fetchProductsByCategory(category.name);
        return { name: category.name, products: categoryProducts };
      });

      const categoryProducts = await Promise.all(categoryProductPromises);
      const productsMap = categoryProducts.reduce((acc, { name, products }) => {
        // @ts-ignore
        acc[name] = products;
        return acc;
      }, {});

      setProducts(productsMap);
    };

    fetchAllCategoryProducts();
  }, [categories]);

  console.log('products', products);


  return (
    <Box
    className="sidebarCategory"
      sx={{
        ...theme.productContainer.sidebarCategory
      }}
    >
      <Heading
        sx={{
          // paddingLeft: "15px",
          // color: "#454545",
          // fontWeight: "600",
          // textTransform: "uppercase",
          // fontSize: "0.941rem",
          // letterSpacing: "0.8px",
          // width: "20%",
          ...theme.productContainer.sidebarTop
        }}
      >
        Category
      </Heading>
      <ul sx={{ width: "100%", padding: 0 }}>
        {categories.map((category, index: number) => (
          <CategoryItems
            key={index}
            image={category.image}
            name={category.name}
            addOutline={addOutline}  // Use the state to control the addOutline prop
            // @ts-ignore
            subItems={products[category.name] || []} // Ensure subItems is an array
          />
        ))}
      </ul>
    </Box>
  );
};

export default Category;
