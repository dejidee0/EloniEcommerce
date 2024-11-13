import React from 'react';
import { Box, Button, } from 'theme-ui';
import { IonIcon } from "@ionic/react";
import {  AiOutlineShoppingCart } from 'react-icons/ai';
// import { FaEye, FaPen, FaTrash, FaStar } from 'react-icons/fa';
import shoePair from "../../../assets/shoePair.jpg";
import { theme } from "@/Theme/theme";
import { star} from "ionicons/icons";




const ProductCard: React.FC = () => {

  return (
    <Box>
    <Box
      sx={{
        margin: "20px",
        height:"600px",
        backgroundColor: "white",
        display: "flex",
        overflowX: 'auto',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems:"center",
        alignContent: "center",
        alignSelf:"center",
        width: ['100%', '350px'],
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        fontSize: '12px',
        color: '#5d7186',
      }}
    >
    <Box sx={{height: "400px", display: "flex", flexDirection: "column", width:"100%", borderRadius:"25px 25px 5px 5px", border:"1px solid #C0C0C0", justifyContent: "flex-start",alignItems:"center", alignSelf:"center"}}>
        <img src={shoePair} height={300} width={"100%"} style={{
            ...theme.productContainer.showcaseImg,
            borderRadius:"25px 25px 5px 5px"}} />
    </Box>
    <Box sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        width:"90%",
        marginTop:"30px"
    }}>
        <h3 style={{ ...theme.productContainer.showcaseHeading }}>Blue Snickers</h3>
        <Box sx={{
            
        }}>
        <Box sx={{ ...theme.productContainer.showcaseRating, marginTop:"-10px" }}>
                    {
                      Array.from({ length: 5 }, (_, index) => (
                        <IonIcon
                          key={index}
                          icon={star}
                          role="img"
                          aria-label="logo star"
                          style={{
                            color: "rgb(255, 145, 0)",

                            fontSize: 12.17,
                          }}
                        />
                      ))
                    }
                    <p style={{color:"gray", paddingLeft:"5px", fontSize:"15px"}}>5.0 <span style={{fontSize:"12px"}}>(187 Review)</span></p>
                  </Box>
                  <Box sx={{ ...theme.productContainer.priceBox, marginTop:"5px" }}>
                    <del style={{ ...theme.productContainer.del }}>{"$86.00"}</del>
                    <p style={{ ...theme.productContainer.price }}>
                      {"$26.00"} <span style={{fontSize:"12px", color:"gray"}}>(20% off)</span>
                    </p>
                  </Box>
                  <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignSelf:"center"
                  }}>
                  <Box sx={{
                    ...theme.productContainer.priceBox,
                    marginTop:"30px",
                    border:"1px solid #ff6c2f",
                    backgroundColor: '#FFE8E6',
                    borderRadius:"10px",
                    width:"50px",
                    display:"flex",
                    justifyContent:"center",
                    alignSelf:"center"
                    }}>
                    <Button variant="danger" sx={{ padding: '12px',  color:" #ff6c2f", backgroundColor:"transparent" }}>
                        <p>...</p>
                    </Button>
                  </Box>
                  <Box sx={{
                    ...theme.productContainer.priceBox,
                    marginTop:"30px",
                    border:"1px solid #5d7186",
                    backgroundColor: 'white',
                    borderRadius:"10px",
                    width:"250px",
                    display:"flex",
                    justifyContent:"center",
                    alignSelf:"center"
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'left',
                            padding:"10px",
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
