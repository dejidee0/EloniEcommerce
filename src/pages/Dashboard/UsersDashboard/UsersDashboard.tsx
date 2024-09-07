import AboveFooterSection from "@/components/AboveFooterSection/AboveFooterSection";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MiddleSection from "@/components/MiddleSection/MiddleSection";
import NewArrival from "@/components/NewArrival/NewArrival";
import PopupModal from "@/components/PopupModal/PopupModal";
import SideBar from "@/components/SideBar/SideBar";
import SubscribeModal from "@/components/SubscribeModal/SubscribeModal";
import { Box, Container } from "theme-ui";

const UsersDashboard = () => {
  return (
    <>
      <Header />
      <SubscribeModal />
      <PopupModal />
      <Container sx={{ paddingLeft: [0, 150], paddingRight: [0, 150] }}>
        <Banner />
        <Box
          sx={{
            position: ["static", "static", "static", "relative"], // Relative position at 1024px and above
            display: ["block", "block", "block", "flex"], // Flex display at 1024px and above
            alignItems: ["stretch", "stretch", "stretch", "flex-start"], // Align items to start at 1024px and above
            gap: ["0", "0", "0", "30px"], // 30px gap at 1024px and above
            marginBottom: ["0", "0", "0", "30px"], // 30px margin-bottom at 1024px and above
            margin: ["0 auto", "0 auto", "0 auto", "0 auto"], // Center container starting at 768px
            maxWidth: [
              "100%", // Default
              "750px", // At 768px and above
              "980px", // At 1024px and above
              "1450px", // At 1200px and above
              "1500px", // At 1400px and above
            ],
          }}
        >
          <SideBar />
          <Box sx={{ minWidth: ["auto", "auto", "calc(25% - 15px)"] }}>
            <NewArrival />
            <MiddleSection />
          </Box>
        </Box>
        <AboveFooterSection />
      </Container>
      <Footer />
    </>
  );
};

export default UsersDashboard;
