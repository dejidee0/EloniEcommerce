/** @jsxImportSource theme-ui */
import { Container, ThemeUIProvider } from "theme-ui";
import { theme } from "../src/Theme/theme.tsx";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
// import SideBar from "./components/SideBar/SideBar.tsx";
import AboveFooterSection from "./components/AboveFooterSection/AboveFooterSection.tsx";
import MiddleSection from "./components/MiddleSection/MiddleSection.tsx";
export default function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <Header />
      <Container sx={{ paddingLeft: [0, 150], paddingRight: [0, 150] }}>
        <Banner />
        {/* <SideBar /> */}
        <MiddleSection />
        <AboveFooterSection />
      </Container>
      <Footer />
    </ThemeUIProvider>
  );
}
