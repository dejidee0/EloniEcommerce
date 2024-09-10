/** @jsxImportSource theme-ui */
import React from 'react';
import Product from './Product'; 

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
    <div sx={{
        minWidth: '100%',
        
    }}>
      {productChunks.map((chunk, index) => (
        <div
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            scrollSnapAlign: 'start',
            

            '@media screen and (max-width: 620px)': {
                minWidth: '100%', 
              },
           
            
          }}
        >
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
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
