import React from 'react';
import { Box } from 'theme-ui';
import ProductTable from '@/components/productListView/Admin/page';
import Header from '@/components/Dashboard-Components/Header';
import Sidebar from '@/components/Dashboard-Components/SideBar/Sidebar';


const ProductList: React.FC = () => {
  return (
    <Box>
      <Sidebar/>
      <Header/>
      <Box sx={{ 
        backgroundColor: "#faf8f6",
        padding: 0.5,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        width:["", "87%"],
        marginLeft: ["", "240px"]
        }}>
      
      <ProductTable />
    </Box>
    </Box>
    
  );
};

export default ProductList;
