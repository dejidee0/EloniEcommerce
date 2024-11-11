import React from 'react';
import { Box, } from 'theme-ui';
// import ProductTable from '@/components/productListView/User/page';
import ProductCard from '@/components/productListView/User/card';
import Header from '@/components/Dashboard-Components/Header';


const UserProductList: React.FC = () => {
  return (
    <Box>
      <Header/>
      <Box sx={{
        backgroundColor: "#faf8f6",
        padding: 0.5, display:["flex", "grid"],
        gridTemplateColumns: [null, 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
        flexDirection:["column","row"],
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        alignContent:"center",
        placeItems: 'center',     
        width:["90%", "100%"]
        }}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      
    </Box>
    </Box>
    
  );
};

export default UserProductList;
