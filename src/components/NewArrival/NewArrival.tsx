/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig/firebaseConfig';
import ProductContainer from './ProductContainer';
import { theme } from '@/Theme/theme';

interface Product {
  id: string;
  topSelection: string;
  productName: string;
  discount: string;
  productImages: [string];
  price: string;
  productCategory: string;
}

// Utility function to split products into chunks of a given size
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

function NewArrival() {
  const [latestProducts, setLatestProducts] = useState<Product[][]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[][]>([]);
  const [topRatedProducts, setTopRatedProducts] = useState<Product[][]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsList = querySnapshot.docs.map((doc) => {
          const data = doc.data() as Product;
          return { ...data, id: doc.id };
        });


        setLatestProducts(
          chunkArray(productsList.filter((product) => product.topSelection === 'isLatest'), 4)
        );
        setTrendingProducts(
          chunkArray(productsList.filter((product) => product.topSelection === 'isTrending'), 4)
        );
        setTopRatedProducts(
          chunkArray(productsList.filter((product) => product.topSelection === 'isTopRated'), 4)
        );
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log('latestProducts', latestProducts);


  return (

    <Box className='productMinimal' sx={{ ...theme.productContainer.productMinimal }}>
      <Box className='productShowCase' sx={{ ...theme.productContainer.productShowCase }}>
        <h2 className='title' sx={{ ...theme.productContainer.title }}>
          Latest Arrivals
        </h2>
        <Box className='showCaseWrapper' sx={{ ...theme.productContainer.showCaseWrapper }}>
          {
            latestProducts.map((latestProduct, index) => (
              <ProductContainer products={latestProduct} key={index} />
            ))
          }

        </Box>
      </Box>
      <Box className='productShowCase' sx={{ ...theme.productContainer.productShowCase }}>
        <h2 className='title' sx={{ ...theme.productContainer.title }}>
          Trending
        </h2>
        <Box className='showCaseWrapper' sx={{ ...theme.productContainer.showCaseWrapper }}>
          {
            trendingProducts.map((trendingProduct, index) => (
              <ProductContainer products={trendingProduct} key={index} />
            ))
          }
        </Box>
      </Box>
      <Box className='productShowCase' sx={{ ...theme.productContainer.productShowCase }}>
        <h2 className='title' sx={{ ...theme.productContainer.title }}>
          Top Rated
        </h2>
        <Box className='showCaseWrapper' sx={{ ...theme.productContainer.showCaseWrapper }}>
          {
            topRatedProducts.map((topRatedProduct, index) => (
              <ProductContainer products={topRatedProduct} key={index} />
            ))
          }

        </Box>
      </Box>
    </Box>
  );
}

export default NewArrival;
