/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from "react";
import DealCard from "../DealCard/DealCard";
import { db } from "@/firebaseConfig/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { theme } from "@/Theme/theme";

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
    <>
      <h4 className="title" sx={{ ...theme.productContainer.title }}>Today's Deal</h4>
      {products.map((product) => (
        <DealCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default TodaysDeal;
