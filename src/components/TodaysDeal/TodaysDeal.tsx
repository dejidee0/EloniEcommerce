/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import DealCard from "../DealCard/DealCard";
import { Box, Text } from "theme-ui";
import { db } from "@/firebaseConfig/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const TodaysDeal: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products"); // "products" is the name of your collection
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ justifyContent: "right", width: "142%" }}>
      <Box
        sx={{
          borderBottom: "1px solid #e0e0e0",
          py: "10px",
          // justifyContent: 'right',
          width: "142%",
        }}
      >
        <Text
          as={"h4"}
          sx={{
            fontWeight: 600,
            color: "#000",
            fontSize: "1.5rem",
          }}
        >
          Today's Deal
        </Text>
      </Box>
      {products.map((product) => (
        <DealCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default TodaysDeal;
