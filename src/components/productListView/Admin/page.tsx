/** @jsxImportSource theme-ui */
import React from 'react';
import { Box, Button, } from 'theme-ui';
import { FaPenAlt, FaPlus, FaTrashAlt, FaRegEye, FaStar  } from 'react-icons/fa';
import shoePair from "../../../assets/shoePair.jpg";
import { theme } from "@/Theme/theme";

interface ProductData {
  productName: string;
  price: string;
  stock: string;
  category: string;
  rating: string;
  action: string;
}

const ProductTable: React.FC = () => {
  const tableData: ProductData[] = [
    { productName: 'Black T-shirt (Size: S, M, L, XL)', price: '$80.00', stock: '486 Item Left / 155 Sold', category: 'Fashion', rating: '4.5', action: '55 Review' },
    { productName: 'Olive Green Leather Bag (Size: S, M)', price: '$136.00', stock: '784 Item Left / 674 Sold', category: 'Hand Bag', rating: '4.1', action: '143 Review' },
    { productName: 'Women Golden Dress (Size: S, M)', price: '$219.00', stock: '769 Item Left / 180 Sold', category: 'Fashion', rating: '4.4', action: '174 Review' },
    { productName: 'Gray Cap For Men (Size: S, M, L)', price: '$76.00', stock: '571 Item Left / 87 Sold', category: 'Cap', rating: '4.2', action: '23 Review' },
    { productName: 'Dark Green Cargo Pant (Size: S, M, L, XL)', price: '$110.00', stock: '241 Item Left / 342 Sold', category: 'Fashion', rating: '4.4', action: '109 Review' },
    { productName: 'Orange Multi Color Headphone (Size: S, M)', price: '$231.00', stock: '821 Item Left / 231 Sold', category: 'Electronics', rating: '4.2', action: '200 Review' },
    { productName: "Kid's Yellow Shoes (Size: 18, 19, 20, 21)", price: '$89.00', stock: '321 Item Left / 681 Sold', category: 'Shoes', rating: '4.5', action: '321 Review' },
    { productName: 'Men Dark Brown Wallet (Size: S, M)', price: '$132.00', stock: '190 Item Left / 212 Sold', category: 'Wallet', rating: '4.1', action: '190 Review' },
    { productName: 'Sky Blue Sunglass (Size: S, M)', price: '$77.00', stock: '784 Item Left / 443 Sold', category: 'Sunglass', rating: '3.5', action: '298 Review' },
    { productName: "Kid's Yellow T-shirt (Size: S)", price: '$110.00', stock: '650 Item Left / 365 Sold', category: 'Fashion', rating: '4.1', action: '156 Review' },
    { productName: 'White Rubber Band Smart Watch (Size: S, M)', price: '$77.00', stock: '98 Item Left / 241 Sold', category: 'Electronics', rating: '3.4', action: '201 Review' },
    { productName: 'Men Brown Leather Shoes (Size: 40, 41, 42, 43)', price: '$222.00', stock: '176 Item Left / 658 Sold', category: 'Shoes', rating: '4.1', action: '370 Review' }
  ];

  return (
    <Box
      sx={{
        margin: "20px",
        width: "98%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        fontSize: '12px',
        color: '#5d7186',
      }}
    >
    <Box sx={{height: "150px", display: "flex", flexDirection: "row", width:"100%", justifyContent: "center",alignItems:"center", alignSelf:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "-50px",  paddingLeft: "10px", paddingRight: "10px", width:"100%" }}>
        
        <Box sx={{ padding: '15px', textAlign: 'left', fontWeight: 'bold', fontSize: '20px', color: '#5d7186' }}>All Product List</Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            backgroundColor: "#ff6c2f",
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: "10px"
          }}
        >
          <FaPlus color="#ffffff" style={{ marginRight: '8px' }} />
          <a href="#" style={{ color: '#ffffff' }}>Add Product</a>
        </Box>
      </Box>
    </Box>

      <Box sx={{ overflowX: 'auto', width: '100%' }}>
        <Box as="table" sx={{ width: '100%', borderCollapse: 'collapse', backgroundColor: "white", alignSelf: "center" }}>
          <Box as="thead">
            <Box as="tr">
              {['Product Name & Size', 'Price', 'Stock', 'Category', 'Rating', 'Action'].map((header, index) => (
                <Box as="th" key={index} sx={{ padding: '15px', backgroundColor: "rgba(0, 0, 0, 0.05)", textAlign: 'left', fontWeight: 'bold', fontSize: '14px', color: '#5d7186' }}>{header}</Box>
              ))}
            </Box>
          </Box>

          <Box as="tbody">
            {tableData.map((row, index) => (
              <Box as="tr" key={index}>
                  <Box as="td" sx={{ display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}><img src={shoePair} height={75} width={75} style={{ ...theme.productContainer.showcaseImg }} />{row.productName}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.price}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.stock}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.category}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>
                    <Box sx={{}}>
                    <Button
                    variant="outline"
                    sx={{
                        padding: '5px',
                        backgroundColor: '#e6edf3',
                        color: '#f5b300',
                        display:"flex", flexDirection:"row", gap:2,
                        justifyContent:"center", alignItems:"center"
                    }}
                    >
                    <FaStar style={{ fontSize: 18 }} />
                    <Box as="td" sx={{color:"#5d7186"}} >{row.rating}</Box>
                    </Button>
                    </Box>
                </Box>
                
                {/* <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.action}</Box> */}
                <Box as="td" sx={{padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186'}}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="outline" sx={{ padding: '5px', backgroundColor: '#e6edf3', color:"#5d7186" }}>
                        <FaRegEye style={{ fontSize: 18 }} />
                    </Button>
                    <Button variant="primary" sx={{ padding: '5px', backgroundColor: '#FFE8E6',color:"#ff6c2f" }}>
                        <FaPenAlt style={{ fontSize: 18 }} />
                    </Button>
                    <Button variant="danger" sx={{ padding: '5px', backgroundColor: '#FFE8E6', color:"#ff6c2f" }}>
                        <FaTrashAlt style={{ fontSize: 18 }} />
                    </Button>
                    </Box>
                    </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductTable;
