import AddressForm from "@/components/AddressForm/AddressForm";
import Cookies from "@/components/Cookies/Cookies";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Recommend from "@/components/Recommend/Recommend";
import WishListBar from "@/components/WishListBar/WishListBar";
import { useState } from "react";
import { Box, IconButton } from "theme-ui";

const AddressBook: React.FC = () => {
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
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: [3, 4],
          padding: [2, 4],
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

        <Box sx={{ flex: ["1 0 100%", "1 0 60%"] }}>
          <AddressForm />
        </Box>
      </Box>
      <Cookies />
      <Recommend />
      <Footer />
    </>
  );
};

export default AddressBook;
