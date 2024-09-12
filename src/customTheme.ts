// theme.js
export const customTheme = {
    breakpoints: ['480px', '768px', '1024px', '1200px'],
    colors: {
      background: '#f9f9f9',
      text: '#333',
      primary: '#192A41',
      secondary: '#1a3c5a',
      error: 'red',
    },
    buttons: {
      primary: {
        backgroundColor: '#192A41',
        color: 'white',
        fontSize: ['14px', '16px', '18px'], // Responsive font size
        padding: ['10px 20px', '12px 24px', '14px 28px'], // Responsive padding
        width: ['100%', '80%', '50%'], // Responsive width for mobile, tablet, and laptop
        borderRadius: '8px',
        cursor: 'pointer',
        border: 'none',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#0D1B2A',
        },
      },
    },
    
    forms: {
      input: {
        borderColor: 'gray',
        padding: '10px',
        borderRadius: '4px',
        fontSize: ['14px', '16px', '18px'], // Responsive font size
        width: '100%',
      },
      label: {
        fontWeight: '500',
        marginBottom: '5px',
      },
      error: {
        color: 'error',
        fontSize: '14px',
      },
    },
    layout: {
      container: {
        maxWidth: ['100%', '90%', '80%', '70%'], // Responsive container size
        margin: '0 auto',
        padding: '20px',
        backgroundColor: 'background',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  };
  export default customTheme;