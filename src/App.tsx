/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui';
import { theme } from '../src/Theme/theme.tsx'; 
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx'
import NewProduct from './components/NewProducts/NewProduct.tsx';
import NewArrival from './components/NewArrival/NewArrival.tsx';

export default function App() {
  return (


    <ThemeUIProvider theme={theme}>
      <Header />
      <Banner />
      <NewArrival />
      <NewProduct />
       <Footer />
        
    </ThemeUIProvider>
  );

}

