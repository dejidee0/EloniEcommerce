import AddressForm from "@/components/AddressForm/AddressForm";
import Cookies from "@/components/Cookies/Cookies";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Recommend from "@/components/Recommend/Recommend";
import WishListBar from "@/components/WishListBar/WishListBar";
import { Box } from "theme-ui";

const AddressBook: React.FC = () => {
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
        <Box sx={{ flex: ["1 0 100%", "1 0 30%"] }}>
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
