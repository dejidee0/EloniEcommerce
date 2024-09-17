import AboveFooterSection from "@/components/AboveFooterSection/AboveFooterSection";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
// import MiddleSection from "@/components/MiddleSection/MiddleSection";
// import NewArrival from "@/components/NewArrival/NewArrival";
// import PopupModal from "@/components/PopupModal/PopupModal";
import Product from "@/components/Product/Product";
// import SubscribeModal from "@/components/SubscribeModal/SubscribeModal";
import { Container } from "theme-ui";

const UsersDashboard = () => {
  return (
    <>
      <Header />
      {/* <SubscribeModal /> */}
      {/* <PopupModal /> */}
      <Container>
        <Banner />
        <Product />
        <AboveFooterSection />
      </Container>
      <Footer />
    </>
  );
};

export default UsersDashboard;
