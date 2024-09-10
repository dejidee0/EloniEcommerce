import AccountDetails from "@/components/AccountDetails/AccountDetails";
import Header from "@/components/Header/Header";
import Recommend from "@/components/Recommend/Recommend";
import WishListBar from "@/components/WishListBar/WishListBar";
import { Box } from "theme-ui";

const MyAccount: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <WishListBar />
        <AccountDetails />
      </Box>
      <Recommend />
    </>
  );
};
export default MyAccount;
