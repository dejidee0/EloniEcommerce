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
        padding: 0.5, display:"flex",
        flexDirection:["column","row"],
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        alignContent:"center",
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
