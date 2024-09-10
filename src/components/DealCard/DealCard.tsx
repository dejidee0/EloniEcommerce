/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex, Text, Image, Button, Progress } from "theme-ui";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./../../store/cartSlice";

const DealCard: React.FC<{ product: any; key: any }> = ({ key, product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.productName,
      price: product.price,
      quantity: 1,
      image: product.productImages[0],
    };

    dispatch(addItemToCart(item));
    console.log("Added successfully");
  };
  return (
    <Box
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: ["15px", "20px"],
        width: "100%",
        backgroundColor: "#ffffff",
        margin: "20px auto",
      }}
      key={key}
    >
      <Flex
        sx={{
          flexDirection: ["column", "row"],
        }}
      >
        {/* Product Image */}
        <Box sx={{ flexBasis: ["100%", "40%"], mb: [3, 0], height: "100%" }}>
          <Image
            src={product?.productImages[0]}
            alt="product image"
            sx={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "4px",
            }}
          />
        </Box>

        {/* Product Details */}
        <Box sx={{ flexBasis: ["100%", "60%"], paddingLeft: [0, "20px"] }}>
          {/* Ratings */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box sx={{ color: "#FFA41C", fontSize: "18px", mr: 2 }}>★★★★☆</Box>
          </Box>

          {/* Product Title */}
          <Text sx={{ fontSize: ["16px", "20px"], fontWeight: "bold", mb: 2 }}>
            {product?.productName}
          </Text>
          <br />
          {/* Product Description */}
          <Text sx={{ color: "#555", mb: 2 }}>
            {product?.productDescription}
          </Text>

          {/* Pricing */}
          <Flex sx={{ alignItems: "center", my: 2 }}>
            {product?.discount && (
              <Text
                sx={{
                  fontSize: ["20px", "24px"],
                  fontWeight: "bold",
                  color: "#e63946",
                  mr: 3,
                }}
              >
                ${product?.discount}
              </Text>
            )}
            <Text
              sx={{
                textDecoration: product?.discount && "line-through",
                color: "#555",
              }}
            >
              ${product?.price}
            </Text>
          </Flex>

          {/* Add to Cart Button */}
          <Button
            sx={{
              backgroundColor: "#d62828",
              color: "#ffffff",
              width: ["100%", "200px"],
              mb: 3,
              cursor: "pointer",
            }}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </Button>

          {/* Stock Details */}
          <Box sx={{ py: "5px" }}>
            <Flex sx={{ justifyContent: "space-between", mb: 2 }}>
              <Text>ALREADY SOLD: 150</Text>
              <Text>AVAILABLE: 200</Text>
            </Flex>

            {/* Progress Bar for stock details */}
            <Progress sx={{ color: "#d62828", mb: 2 }} max={350} value={150} />
          </Box>

          {/* Offer Timer */}
          <Box sx={{ py: "5px" }}>
            <Text sx={{ fontWeight: "bold", mb: 2 }}>
              HURRY UP! OFFER ENDS IN:
            </Text>
            <Flex
              sx={{
                flexDirection: ["column", "row"],
                marginTop: "10px",
              }}
            >
              {["Days", "Hours", "Min", "Sec"].map((item) => (
                <Flex
                  key={item}
                  sx={{
                    flex: 1,
                    flexDirection: "column",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                    padding: "10px",
                    marginBottom: ["10px", 0],
                    marginRight: ["0", "10px"],
                    textAlign: "center",
                  }}
                >
                  <Text sx={{ fontWeight: "bold", fontSize: "18px" }}>
                    EXPIRED
                  </Text>
                  <Text>{item}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default DealCard;
