import AccountDetails from "@/components/AccountDetails/AccountDetails";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Recommend from "@/components/Recommend/Recommend";
import WishListBar from "@/components/WishListBar/WishListBar";
import { useState } from "react";
import { Box, IconButton } from "theme-ui";

const MyAccount: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
          mt: ["50px", "100px"],
          mb: ["50px", "100px"],
          gap: ["1rem", "2rem"],
          px: [2, 4],
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
            backgroundColor: "background",
            maxWidth: ["100%", "300px", "550px"],
            padding: ["10px", "20px", "60px"],
            mx: ["auto", "auto"],
            ml: ["10px", 4],
            mt: ["10px", 0],
            mb: [2, 2],
            order: [0, 1],
          }}
        >
          <AccountDetails />
        </Box>
      </Box>
      <Box sx={{ mt: ["30px", "50px"] }}>
        <Recommend />
      </Box>
      <Footer />
    </>
  );
};

export default MyAccount;
