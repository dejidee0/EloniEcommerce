/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex, Text, Image, Button, Progress } from "theme-ui";
import watchImage from "./../../assets/watch.jpg";

const DealCard: React.FC = () => {
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
    >
      <Flex
        sx={{
          flexDirection: ["column", "row"],
        }}
      >
        {/* Product Image */}
        <Box sx={{ flexBasis: ["100%", "40%"], mb: [3, 0] }}>
          <Image
            src={watchImage}
            alt="Watch"
            sx={{
              maxWidth: "100%",
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
            INVICTA MEN'S 17884 PRO DIVER WATCH
          </Text>

          {/* Product Description */}
          <Text sx={{ color: "#555", mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollitia
            facere quos deleniti odio, aspernatur enim!
          </Text>

          {/* Pricing */}
          <Flex sx={{ alignItems: "center", my: 2 }}>
            <Text
              sx={{
                fontSize: ["20px", "24px"],
                fontWeight: "bold",
                color: "#e63946",
                mr: 3,
              }}
            >
              $89.00
            </Text>
            <Text sx={{ textDecoration: "line-through", color: "#555" }}>
              $100.00
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
