
/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from 'theme-ui';
import { theme } from '../src/Theme/theme.tsx'; 
import Banner from './components/Banner/Banner';

export default function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <Banner />
    </ThemeUIProvider>
  );
}

