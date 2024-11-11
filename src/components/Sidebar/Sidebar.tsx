// Sidebar.tsx
import React, { useState } from 'react';
import { Box, Flex, Text } from 'theme-ui';
import { MdDashboard, MdCategory, MdInventory, MdShoppingCart, MdSettings, MdExpandMore, MdExpandLess, MdClose, MdMenu } from 'react-icons/md';

const Sidebar = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    general: true,
    users: false,
    other: false,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  const toggleSection = (section: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      {/* Hamburger Icon */}
      {!isSidebarOpen && (
        <Flex
          sx={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 1100, 
            display: ['flex', 'none'], 
            cursor: 'pointer',
            color: '#ff8c00', 
          }}
          onClick={() => setIsSidebarOpen(true)}
        >
          <MdMenu size={30} />
        </Flex>
      )}

      {isSidebarOpen && (
        <Box
          sx={{
            position: ['fixed', 'relative'], 
            width: ['50%', '250px'], 
            bg: '#2c2f48',
            color: 'white',
            height: '100vh',
            paddingTop: '1rem',
            paddingLeft: '1rem',
            fontFamily: 'Arial, sans-serif',
            zIndex: 1000, 
            transition: 'width 0.3s ease',
          }}
        >
          {/* Close Icon */}
          <Flex
            sx={{
              justifyContent: 'flex-end',
              paddingRight: '1rem',
              cursor: 'pointer',
              display: ['flex', 'none'], 
            }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <MdClose size={24} color="#ff8c00" />
          </Flex>

          {/* Sidebar Header */}
          <Text
            sx={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              color: '#ff8c00',
            }}
          >
            <span style={{ marginRight: '8px' }}>🛒</span> Larkon
          </Text>

          {/* General Section */}
          <Box mb={3}>
            <Flex
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => toggleSection('general')}
            >
              <Text sx={{ color: 'gray', fontSize: '1rem' }}>GENERAL</Text>
              {openSections.general ? <MdExpandLess /> : <MdExpandMore />}
            </Flex>
            {openSections.general && (
              <Box mt={2}>
                <NavItem icon={<MdDashboard />} label="Dashboard" />
                <NavItem icon={<MdCategory />} label="Products" />
                <NavItem icon={<MdInventory />} label="Category" />
                <NavItem icon={<MdShoppingCart />} label="Inventory" />
                <NavItem icon={<MdShoppingCart />} label="Orders" />
                <NavItem icon={<MdShoppingCart />} label="Purchases" />
                <NavItem icon={<MdShoppingCart />} label="Attributes" />
                <NavItem icon={<MdShoppingCart />} label="Invoices" />
                <NavItem icon={<MdSettings />} label="Settings" />
              </Box>
            )}
          </Box>

          {/* Users Section */}
          <Box mb={3}>
            <Flex
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => toggleSection('users')}
            >
              <Text sx={{ color: 'gray', fontSize: '1rem' }}>USERS</Text>
              {openSections.users ? <MdExpandLess /> : <MdExpandMore />}
            </Flex>
            {openSections.users && (
              <Box mt={2}>
                <NavItem icon={<MdDashboard />} label="Profile" />
                <NavItem icon={<MdDashboard />} label="Roles" />
                <NavItem icon={<MdDashboard />} label="Permissions" />
                <NavItem icon={<MdDashboard />} label="Customers" />
                <NavItem icon={<MdDashboard />} label="Sellers" />
              </Box>
            )}
          </Box>

          {/* Other Section */}
          <Box>
            <Flex
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => toggleSection('other')}
            >
              <Text sx={{ color: 'gray', fontSize: '1rem' }}>OTHER</Text>
              {openSections.other ? <MdExpandLess /> : <MdExpandMore />}
            </Flex>
            {openSections.other && (
              <Box mt={2}>
                <NavItem icon={<MdDashboard />} label="Coupons" />
                <NavItem icon={<MdDashboard />} label="Reviews" />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Flex
    sx={{
      alignItems: 'center',
      padding: '0.5rem 0',
      cursor: 'pointer',
      color: 'white',
      fontSize: '1.1rem', 
      '&:hover': {
        color: '#ff8c00', 
      },
    }}
  >
    <Box mr={2} sx={{ fontSize: '1.2rem', color: '#ff8c00' }}>{icon}</Box>
    <Text mr={1}>{label}</Text>
  </Flex>
);

export default Sidebar;
