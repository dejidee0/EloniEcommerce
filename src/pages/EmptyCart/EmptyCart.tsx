/** @jsxImportSource theme-ui */
import WishListBar from "@/components/WishListBar/WishListBar";
import { useState } from "react";
import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text, IconButton } from "theme-ui";

const EmptyCart: React.FC = () => {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          alignItems: ["center", "flex-start"],
          justifyContent: "center",
          gap: "2rem",
          minHeight: "70vh",
          mt: ["50px", "100px"],
          mb: ["50px", "100px"],
        }}
      >
        <IconButton
          sx={{
            display: ["block", "none"],
            alignSelf: "flex-start",
            mb: "1rem",
          }}
          onClick={toggleSidebar}
        >
          &#9776;
        </IconButton>

        <Box
          sx={{
            display: [isSidebarOpen ? "block" : "none", "block"],
            width: ["100%", "300px"],
            flexShrink: 0,
            order: [1, 0],
          }}
        >
          <WishListBar />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "background",
            maxWidth: ["300px", "400px", "450px"],
            padding: ["15px", "20px", "30px"],
            marginLeft: [0, "auto"],
            marginRight: ["auto", "auto"],
            textAlign: "center",
            order: [0, 1],
          }}
        >
          <Box
            sx={{
              border: "1px",
              padding: ["5px", "10px"],
              borderRadius: "50px",
            }}
          >
            <GrCart
              sx={{
                width: ["30px", "40px", "50px"],
                height: ["30px", "40px", "50px"],
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Text
              sx={{
                fontWeight: "bold",
                fontSize: ["16px", "18px", "20px"],
              }}
            >
              Your cart is empty!
            </Text>
            <Text sx={{ fontSize: ["10px", "13px"] }}>
              Browse our categories and discover our best deals
            </Text>
          </Box>

          <Button
            sx={{
              backgroundColor: "#192A41",
              cursor: "pointer",
              borderRadius: "50px",
              padding: ["10px", "15px", "20px"],
              marginTop: "10px",
            }}
            onClick={() => navigate('/')}
          >
            START SHOPPING
          </Button>
        </Box>
        {/* <Button
          sx={{
            backgroundColor: "#192A41",
            cursor: "pointer",
            borderRadius: 50,
            padding: ["10px", "15px", "20px"],
            marginTop: ["10px", "15px", "20px"],
          }}
          onClick={() => navigate('/')}
        >
          START SHOPPING
        </Button> */}
      </Box>
    </>
  );
};

export default EmptyCart;
