// Header.tsx
import React from 'react';
import { Box, Button, Text } from 'theme-ui';

const Header: React.FC = () => {
  return (
    <Box as="header" sx={{ bg: 'background', p: 3, borderBottom: '1px solid #E0E0E0', borderColor: 'muted', marginBottom:"15px" }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Button sx={{ mr: 2 }}>
          
        </Button>
        <Text as="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'gray' }}>
          Dashboard
        </Text>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
