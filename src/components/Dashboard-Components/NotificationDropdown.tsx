// NotificationDropdown.tsx
import React from 'react';
import { Box, Button, Flex, Image, Text } from 'theme-ui';

const NotificationDropdown: React.FC = () => {
  return (
    <Box as="nav">
      <Button>
        <i className="iconify" data-icon="solar:bell-bing-bold-duotone"></i>
      </Button>
      <Box sx={{ display: 'flex', flexDirection: 'column', bg: 'background', p: 3, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <Flex sx={{ alignItems: 'center', mb: 2 }}>
          <Image src="/images/users/avatar-1.jpg" sx={{ borderRadius: '50%', width: '32px', height: '32px' }} />
          <Text ml={2}>
            <strong>Josephine Thompson</strong> commented on admin panel
          </Text>
        </Flex>
        {/* Repeat other notifications similarly */}
      </Box>
    </Box>
  );
};

export default NotificationDropdown;
