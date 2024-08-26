import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'theme-ui';  // Import ThemeProvider
import { deep } from '@theme-ui/presets';  // Import a preset theme
import App from './App';

const theme = {
  ...deep,
  // Customize your theme here if needed
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
