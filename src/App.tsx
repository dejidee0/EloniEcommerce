/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui';
import { theme } from '../src/Theme/theme.tsx'; 
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import SideBar from './components/SideBar/SideBar.tsx';
import AboveFooterSection from './AboveFooterSection.tsx';

export default function App() {
  return (


    <ThemeUIProvider theme={theme}>
      <Header />
      <Banner />
      <SideBar/>
     <AboveFooterSection />
      <Footer />
    </ThemeUIProvider>
  );
}