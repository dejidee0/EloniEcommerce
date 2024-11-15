// Sidebar.tsx
import React, { useState } from 'react';
import { Box, Flex, Text, Image } from 'theme-ui';
import { MdDashboard, MdCategory, MdInventory, MdShoppingCart, MdSettings, MdExpandMore, MdExpandLess, MdClose, MdMenu } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '@/assets/logos/Eloni_logo.png'

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
            display: 'flex', 
            cursor: 'pointer',
            color: 'gray', 
          }}
          onClick={() => setIsSidebarOpen(true)}
        >
          <MdMenu size={30} />
        </Flex>
      )}

      {isSidebarOpen && (
        <Box
          sx={{
            position: 'fixed', // Make the sidebar fixed
            width: '70%', // Responsive width
            '@media screen and (min-width: 768px)': {
              width: '50%', // Tablet screens
          },
          '@media screen and (min-width: 1024px)': {
            width: '250px', // Desktop screens
          },
            bg: '#2c2f48',
            color: 'white',
            height: '100vh', // Set height to fill the viewport
            paddingTop: '1rem',
            paddingLeft: '1rem',
            fontFamily: 'Arial, sans-serif',
            zIndex: 1000, 
            transition: 'transform 0.3s ease',
            // border: "1px solid red"
          }}
        >
          {/* Close Icon */}
          <Flex
            sx={{
              justifyContent: 'flex-end',
              paddingRight: '1rem',
              cursor: 'pointer',
              display: ['flex'], 
            }}
            onClick={() => setIsSidebarOpen(false)}
          >
            <MdClose size={24} color="#ff8c00" />
          </Flex>

          {/* Sidebar Header */}
          <Link to="/" className="header-logo" style={{marginRight: "8px", marginBottom:"50px"}} >
            <Image
            src={logo}
            sx={{
              // display: ["", "flex"],
              // justifyContent: ["", "center"]
            }}
            //   alt="Eloni's shop logo"
            width="120"
            height="30"
            />
          </Link>

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
                <NavItem icon={<MdDashboard />} link="/admin-dashboard" label="Dashboard" />
                <NavItem icon={<MdCategory />} link="product-list" label="Products" />
                <NavItem icon={<MdInventory />} link="product-list" label="Category" />
                <NavItem icon={<MdShoppingCart />} link="product-list" label="Inventory" />
                <NavItem icon={<MdShoppingCart />} link="product-list" label="Orders" />
                <NavItem icon={<MdShoppingCart />} link="product-list" label="Purchases" />
                <NavItem icon={<MdShoppingCart />} link="product-list" label="Attributes" />
                <NavItem icon={<MdShoppingCart />} link="product-list" label="Invoices" />
                <NavItem icon={<MdSettings />} link="product-list" label="Settings" />
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
                <NavItem icon={<MdDashboard />} link="product-list" label="Profile" />
                <NavItem icon={<MdDashboard />} link="product-list" label="Roles" />
                <NavItem icon={<MdDashboard />} link="product-list" label="Permissions" />
                <NavItem icon={<MdDashboard />} link="product-list" label="Customers" />
                <NavItem icon={<MdDashboard />} link="product-list" label="Sellers" />
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
                <NavItem icon={<MdDashboard />} link="product-list" label="Coupons" />
                <NavItem icon={<MdDashboard />} link="product-list" label="Reviews" />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

const NavItem = ({ icon, label, link }: { icon: React.ReactNode; label: string , link: string}) => (
  <Button href={link}><Flex
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
  </Flex></Button>  
);

export default Sidebar;
