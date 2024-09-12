import React, { useState } from "react";
import Header from "@/components/Header/Header";
import { Box, Flex, IconButton } from "theme-ui";
import WishListBar from "@/components/WishListBar/WishListBar";
import Cookies from "@/components/Cookies/Cookies";
// import OrdersContent from "@/components/OrdersContent/OrdersContent";
import Footer from "@/components/Footer/Footer";
import EmptyOrder from "@/components/EmptyOrder/EmptyOrder";
import Recommend from "@/components/Recommend/Recommend";

const Orders: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header />
      <Flex
        sx={{
          flexDirection: ["column", "row"],
        }}
      >
        <IconButton
          sx={{
            display: ["block", "none"],
          }}
          onClick={toggleSidebar}
        >
          &#9776;
        </IconButton>

        <Box
          sx={{
            display: [isSidebarOpen ? "block" : "none", "block"],
            width: ["100%", "300px"],
          }}
        >
          <WishListBar />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            bg: "#f8f9fa",
            p: [2, 4],
          }}
        >
          {/* <OrdersContent /> */}
          <EmptyOrder />
        </Box>
        <Box>
          <Cookies />
        </Box>
      </Flex>
      <Box>
        <Recommend />
        <Footer />
      </Box>
    </>
  );
};

export default Orders;
