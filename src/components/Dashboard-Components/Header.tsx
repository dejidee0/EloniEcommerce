// Header.tsx
import React from 'react';
import { Box, Button, Text } from 'theme-ui';

const Header: React.FC = () => {
  return (
    <Box as="header" sx={{ bg: 'background', p: 3, borderBottom: '1px solid #E0E0E0', borderColor: 'muted', marginBottom:"15px" }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Button sx={{ mr: 2 }}>
          <i className="iconify" data-icon="solar:hamburger-menu-broken"></i>
        </Button>
        <Text as="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'gray' }}>
          Dashboard
        </Text>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button onClick={() => { /* toggle theme functionality here */ }}>
            <i className="iconify" data-icon="solar:moon-bold-duotone"></i>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
