import React from 'react';
import { Box , Button, Input} from 'theme-ui';
import ProductCard from '@/components/productListView/User/card';
import Header from '@/components/Dashboard-Components/Header';
import {  AiOutlineShoppingCart } from 'react-icons/ai';
import Sidebar from '@/components/Dashboard-Components/SideBar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { theme } from '@/Theme/theme';


const UserProductList: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: "#faf8f6",
      
    }}>
      <Sidebar/>
      <Header />
      <Box sx={{
        backgroundColor: "#faf8f6",
        // width: "100%",
        '@media screen and (min-width: 768px)': {
            marginLeft:"" // Tablet screens 
          },
          '@media screen and (min-width: 1024px)': {
            marginLeft: "250px" // Desktop screens
          },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Box sx={{
          height: "100px",
          display: "flex",
          flexDirection: "row",
          width:"98%",
          justifyContent: "center",
          alignItems:"center",
          alignSelf:"center",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          marginBottom: "20px"
          }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: ["center", "space-between"],  paddingLeft: "10px", paddingRight: "10px", width:"100%",  }}>
          
        <Box sx={{
          ...theme.containers.headerSearchContainer,
          width: ["90%", "300px"],
          marginLeft: ["5px", "10px"],
          border: "1px solid #E8E8E8",
          marginTop: ["0px", "0px"],
          }}>

          <Input
            type="search"
            name="search"
            className="search-field"
            placeholder="Search your product name..."
            sx={{
            color: 'grey',
            background: 'white',
            border: 'none',
            borderRadius: 15,
            outline: "none",
            paddingLeft: 3,
            width: '100%',
            fontSize: 18,
            }}
          />

          <Box sx={{
            paddingRight: 20,
          }}>
            <Button className="search-btn" sx={{
            cursor: 'pointer',
            height: 40,
            padding: 0,
            margin: 0,
            background: "#fff"
            }}>
            <FaSearch aria-label="search" style={{
              color: 'grey',
              background: 'white',
              fontSize: 25,

              margin: 0,
              paddingTop: 9,
            }} />
            </Button>
     </Box>

    </Box>
          <Box
            sx={{
              display: ['none', 'flex'],
              alignItems: 'center',
              padding: '15px',
              backgroundColor: "#1fb155",
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: '14px',
              borderRadius: "10px"
            }}
          >
            <AiOutlineShoppingCart color="#ffffff" style={{ marginRight: '8px' }} />
            <a href="#" style={{ color: '#ffffff' }}>View Cart</a>
          </Box>
        </Box>
      </Box>
      </Box>

      <Box>
      <Box
        sx={{
                  backgroundColor: "#faf8f6",
                  padding: 0.5, display:["flex", "grid"],
                  gridTemplateColumns: [null, 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
                  flexDirection:["column","row"],
                  justifyContent:"center",
                  alignItems:"center",
                  alignSelf:"center",
                  alignContent:"center",
                  placeItems: 'center',     
                  
                '@media screen and (min-width: 768px)': {
                  marginLeft:"",
                  gridTemplateColumns: 'repeat(2, 1fr)', // Tablet screens 
                },
                '@media screen and (min-width: 1024px)': {
                  marginLeft: "240px",
                  gridTemplateColumns: 'repeat(4, 1fr)', // Desktop screens
                },
        }}
      >
        {/* Example Product Cards */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>
   
    </Box>
    </Box>
  );
};

export default UserProductList;



// const UserProductList: React.FC = () => {
//   return (
//     <Box>
//       <Header/>
//       <Box sx={{
//         backgroundColor: "#faf8f6",
//         padding: 0.5, display:["flex", "grid"],
//         gridTemplateColumns: [null, 'repeat(2, 1fr)', 'repeat(4, 1fr)'],
//         flexDirection:["column","row"],
//         justifyContent:"center",
//         alignItems:"center",
//         alignSelf:"center",
//         alignContent:"center",
//         placeItems: 'center',     
//         width:["90%", "100%"]
//         }}>
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
//       <ProductCard />
      
//     </Box>
//     </Box>
    
//   );
// };

// export default UserProductList;
