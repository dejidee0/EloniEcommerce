/** @jsxImportSource theme-ui */
import React from 'react';
import Product from './Product';
import { theme } from '@/Theme/theme';
import { Box } from 'theme-ui';

interface ProductData {

  id: string;
  topSelection: string,
  productName: string,
  discount: string,
  productImages: [string];
  price: string;
  productCategory: string;
}

interface ProductContainerProps {
  products: ProductData[];
}

const ProductContainer: React.FC<ProductContainerProps> = ({ products }) => {
  // Split the products into chunks of 4
  const productChunks = products.reduce<ProductData[][]>((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // Start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <>
      {productChunks.map((chunk, index) => (
        <Box className='showCaseContainer' sx={{ ...theme.productContainer.showCaseContainer }} key={index}>
          {chunk.map((product, idx) => (
            <Product
              key={idx}
              img={product.productImages[0]}
              productName={product.productName}
              productCategory={product.productCategory}
              productPrice={product.price}
              discount={product.discount}
            />
          ))}
        </Box>
      ))}
    </>
  );
};

export default ProductContainer;
