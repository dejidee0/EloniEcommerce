import React from 'react';
import { Box } from 'theme-ui';
import ProductTable from '@/components/productListView/Admin/page';
import Header from '@/components/Dashboard-Components/Header';


const ProductList: React.FC = () => {
  return (
    <Box>
      <Header/>
      <Box sx={{ backgroundColor: "#faf8f6", padding: 0.5, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", alignSelf:"center" }}>
      
      <ProductTable />
    </Box>
    </Box>
    
  );
};

export default ProductList;
