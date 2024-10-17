/** @jsxImportSource theme-ui */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Flex, Image, Button, Text, Divider, Container } from "theme-ui";
import EmptyCart from "@/pages/EmptyCart/EmptyCart";
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/cartSlice";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Recommend from "@/components/Recommend/Recommend";



const CartList: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <Box sx={{ margin: "0 auto" }}>
      <Header />
      <Container sx={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1184px' }}>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>


            <Box as="ul" sx={{ listStyle: "none", padding: 0 }}>
              {cartItems.map((item) => (
                <Flex
                  key={item.id}
                  as="li"
                  sx={{
                    borderBottom: "1px solid #e0e0e0",
                    padding: "20px 0",
                    alignItems: "center",
                  }}
                >
                  {/* Product Image */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    sx={{ width: "100px", height: "100px", borderRadius: "8px" }}
                  />

                  {/* Product Details */}
                  <Box sx={{ flexGrow: 1, paddingLeft: "20px" }}>
                    <Text
                      as="p"
                      sx={{ fontSize: "18px", fontWeight: "bold", mb: 1 }}
                    >
                      {item.name}
                    </Text>
                    <Text as="p" sx={{ fontSize: "14px", color: "#777", mb: 1 }}>
                      ${item.price} x {item.quantity}
                    </Text>

                    {/* Quantity Controls */}
                    <Flex sx={{ alignItems: "center" }}>
                      <Button
                        sx={{
                          padding: "5px 10px",
                          fontSize: "14px",
                          backgroundColor: "#e76f51",
                          color: "#ffffff",
                          borderRadius: "4px",
                          cursor: "pointer",
                          mr: 2,
                        }}
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}
                      >
                        -
                      </Button>
                      <Text sx={{ fontSize: "14px", fontWeight: "bold", mx: 2 }}>
                        {item.quantity}
                      </Text>
                      <Button
                        sx={{
                          padding: "5px 10px",
                          fontSize: "14px",
                          backgroundColor: "#2a9d8f",
                          color: "#ffffff",
                          borderRadius: "4px",
                          cursor: "pointer",
                          ml: 2,
                        }}
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                      >
                        +
                      </Button>
                    </Flex>

                    <Button
                      sx={{
                        padding: "5px 10px",
                        fontSize: "14px",
                        backgroundColor: "#d62828",
                        color: "#ffffff",
                        borderRadius: "4px",
                        cursor: "pointer",
                        mt: 2,
                      }}
                      onClick={() => dispatch(removeItemFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </Box>

                  {/* Total Price for each item */}
                  <Text
                    as="p"
                    sx={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginLeft: "auto",
                    }}
                  >
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                </Flex>
              ))}
            </Box>

            {/* Divider */}
            <Divider sx={{ my: 4, borderColor: "#e0e0e0" }} />

            {/* Total Amount */}
            <Flex
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4,
              }}
            >
              <Text as="h3" sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Total:
              </Text>
              <Text as="h3" sx={{ fontSize: "20px", fontWeight: "bold" }}>
                ${totalAmount.toFixed(2)}
              </Text>
            </Flex>

            {/* Checkout Button */}
            <Button
              sx={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                backgroundColor: "#2a9d8f",
                color: "#ffffff",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Proceed to Checkout
            </Button>
          </>
        )}
        <Box
          sx={{
            mt: ["30px", "50px"],
          }}
        >
          <Recommend />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default CartList;
