/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig/firebaseConfig';
import ProductContainer from './ProductContainer';

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

  console.log('latestProducts',latestProducts);
  

  return (
    <Box
      sx={{
        marginBottom: ['0', '0', '0', '20px'],
        display: ['block', 'flex'],
        flexWrap: ['nowrap', 'wrap'],
        justifyContent: ['flex-start', 'center'],
        gap: ['0', '20px'],
      }}
    >
      {/* Latest Products */}
      <div
        sx={{
          width: '340px',
          padding: 2,
          '@media screen and (max-width: 620px)': {
            width: '100%',
          },
        }}
      >
        <h3
          sx={{
            borderBottom: '1px solid #ddd',
            paddingBottom: 3,
          }}
        >
          Latest Arrivals
        </h3>
        
          
          <div
            
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              marginTop: 4,
              scrollSnapType: 'x mandatory',
              width: '100%'
            }}
          >
            {latestProducts.map((chunk, index) => (
            <ProductContainer products={chunk} key={index} />
            ))}
          </div>
       
      </div>

      {/* Trending Products */}
      <div
        sx={{
          width: '340px',
          padding: 2,
          '@media screen and (max-width: 620px)': {
            width: '100%',
          },
        }}
      >
        <h3
          sx={{
            borderBottom: '1px solid #ddd',
            paddingBottom: 3,
          }}
        >
          Trending
        </h3>
        
          <div
           
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              marginTop: 4,
              scrollSnapType: 'x mandatory',
              '@media screen and (max-width: 620px)': {
                width: '100%',
              },
            }}
          >
            {trendingProducts.map((chunk, index) => (
            <ProductContainer products={chunk} key={index} />
            ))}
          </div>
       
      </div>

      {/* Top Rated Products */}
      <div
        sx={{
          width: '340px',
          padding: 2,
          '@media screen and (max-width: 620px)': {
            width: '100%',
          },
        }}
      >
        <h3
          sx={{
            borderBottom: '1px solid #ddd',
            paddingBottom: 3,
          }}
        >
          Top Rated
        </h3>
        
          <div
            
            sx={{
              display: 'flex',
              gap: 3,
              overflowX: 'auto',
              marginTop: 4,
              scrollSnapType: 'x mandatory',
              '@media screen and (max-width: 620px)': {
                width: '100%',
              },
            }}
          >
            {topRatedProducts.map((chunk, index) => (
            <ProductContainer products={chunk} key={index} />
            ))}
          </div>
        
      </div>
    </Box>
  );
}

export default NewArrival;
