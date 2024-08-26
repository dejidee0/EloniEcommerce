import './App.css'
import { ThemeUIProvider } from 'theme-ui'
import { theme } from './theme'
import Header from './components/header/header';
import Footer from './Footer.tsx'
import React from 'react';


function App() {

  return (
    <ThemeUIProvider theme={theme}  >
      <div sx={{
        fontWeight: 'bold',
        fontSize: 4, // picks up value from `theme.fontSizes[4]`
        color: '#000',
        background: '#fff',
        width: '100%',
        padding: 0,
        height: '100vh',
      }}>
        {/* Header widget created for the pages */}
        <Header />
        <Footer />
      </div>
    </ThemeUIProvider>
  )
}

export default App
