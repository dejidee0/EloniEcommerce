/** @jsxImportSource theme-ui */
import React from 'react';
import { Box, Button } from 'theme-ui';
import { IonIcon } from "@ionic/react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
// import { FaEye, FaPen, FaTrash, FaStar } from 'react-icons/fa';
import shoePair from "../../../assets/shoePair.jpg";
import { theme } from "@/Theme/theme";
import { star } from "ionicons/icons";

// interface ProductData {
//   productName: string;
//   price: string;
//   stock: string;
//   category: string;
//   rating: string;
//   action: string;
// }

const ProductCard: React.FC = () => {
  // const tableData: ProductData[] = [
  //   { productName: 'Black T-shirt (Size: S, M, L, XL)', price: '$80.00', stock: '486 Item Left / 155 Sold', category: 'Fashion', rating: '4.5', action: '55 Review' },
  //   { productName: 'Olive Green Leather Bag (Size: S, M)', price: '$136.00', stock: '784 Item Left / 674 Sold', category: 'Hand Bag', rating: '4.1', action: '143 Review' },
  //   { productName: 'Women Golden Dress (Size: S, M)', price: '$219.00', stock: '769 Item Left / 180 Sold', category: 'Fashion', rating: '4.4', action: '174 Review' },
  //   { productName: 'Gray Cap For Men (Size: S, M, L)', price: '$76.00', stock: '571 Item Left / 87 Sold', category: 'Cap', rating: '4.2', action: '23 Review' },
  //   { productName: 'Dark Green Cargo Pant (Size: S, M, L, XL)', price: '$110.00', stock: '241 Item Left / 342 Sold', category: 'Fashion', rating: '4.4', action: '109 Review' },
  //   { productName: 'Orange Multi Color Headphone (Size: S, M)', price: '$231.00', stock: '821 Item Left / 231 Sold', category: 'Electronics', rating: '4.2', action: '200 Review' },
  //   { productName: "Kid's Yellow Shoes (Size: 18, 19, 20, 21)", price: '$89.00', stock: '321 Item Left / 681 Sold', category: 'Shoes', rating: '4.5', action: '321 Review' },
  //   { productName: 'Men Dark Brown Wallet (Size: S, M)', price: '$132.00', stock: '190 Item Left / 212 Sold', category: 'Wallet', rating: '4.1', action: '190 Review' },
  //   { productName: 'Sky Blue Sunglass (Size: S, M)', price: '$77.00', stock: '784 Item Left / 443 Sold', category: 'Sunglass', rating: '3.5', action: '298 Review' },
  //   { productName: "Kid's Yellow T-shirt (Size: S)", price: '$110.00', stock: '650 Item Left / 365 Sold', category: 'Fashion', rating: '4.1', action: '156 Review' },
  //   { productName: 'White Rubber Band Smart Watch (Size: S, M)', price: '$77.00', stock: '98 Item Left / 241 Sold', category: 'Electronics', rating: '3.4', action: '201 Review' },
  //   { productName: 'Men Brown Leather Shoes (Size: 40, 41, 42, 43)', price: '$222.00', stock: '176 Item Left / 658 Sold', category: 'Shoes', rating: '4.1', action: '370 Review' }
  // ];

  return (
    <Box>
      <Box
        sx={{
          margin: "20px",
          height: "600px",
          backgroundColor: "white",
          display: "flex",
          overflowX: 'auto',
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          width: ['100%', '350px'],
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          fontSize: '12px',
          color: '#5d7186',
        }}
      >
        <Box sx={{ height: "400px", display: "flex", flexDirection: "column", width: "100%", borderRadius: "25px 25px 5px 5px", border: "1px solid #C0C0C0", justifyContent: "flex-start", alignItems: "center", alignSelf: "center" }}>
          <img src={shoePair} height={300} width={"100%"} sx={{
            ...theme.productContainer.showcaseImg,
            borderRadius: "25px 25px 5px 5px"
          }} />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "90%",
          marginTop: "30px"
        }}>
          <h3 sx={{ ...theme.productContainer.showcaseHeading }}>Blue Snickers</h3>
          <Box sx={{

          }}>
            <Box sx={{ ...theme.productContainer.showcaseRating, marginTop: "-10px" }}>
              {
                Array.from({ length: 5 }, (_, index) => (
                  <IonIcon
                    key={index}
                    icon={star}
                    role="img"
                    aria-label="logo star"
                    sx={{
                      color: "rgb(255, 145, 0)",

                      fontSize: 12.17,
                    }}
                  />
                ))
              }
              <p style={{ color: "gray", paddingLeft: "5px", fontSize: "15px" }}>5.0 <span style={{ fontSize: "12px" }}>(187 Review)</span></p>
            </Box>
            <Box sx={{ ...theme.productContainer.priceBox, marginTop: "5px" }}>
              <del sx={{ ...theme.productContainer.del }}>{"$86.00"}</del>
              <p sx={{ ...theme.productContainer.price }}>
                {"$26.00"} <span style={{ fontSize: "12px", color: "gray" }}>(20% off)</span>
              </p>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center"
            }}>
              <Box sx={{
                ...theme.productContainer.priceBox,
                marginTop: "30px",
                border: "1px solid #ff6c2f",
                backgroundColor: '#FFE8E6',
                borderRadius: "10px",
                width: "50px",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center"
              }}>
                <Button variant="danger" sx={{ padding: '12px', color: " #ff6c2f", backgroundColor: "transparent" }}>
                  <p>...</p>
                </Button>
              </Box>
              <Box sx={{
                ...theme.productContainer.priceBox,
                marginTop: "30px",
                border: "1px solid #5d7186",
                backgroundColor: 'white',
                borderRadius: "10px",
                width: "250px",
                display: "flex",
                justifyContent: "center",
                alignSelf: "center"
              }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left',
                    padding: "10px",
                    fontWeight: 'bold',
                    fontSize: '14px',
                    borderRadius: "10px"
                  }}
                >
                  <AiOutlineShoppingCart color="#5d7186" style={{ marginRight: '8px' }} />
                  <a href="#" style={{ color: '#5d7186' }}>Add To Cart</a>
                </Box>
              </Box>
            </Box>

          </Box>

        </Box>
      </Box>
    </Box>

  );
};

export default ProductCard;
