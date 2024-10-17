/** @jsxImportSource theme-ui */
import React from 'react';
import MainHeader from '@/components/Header/MainHeader/MainHeader';
import { Box } from 'theme-ui';
import HeaderTop from '@/components/Header/HeaderTop/HeaderTop';

const Header: React.FC = () => {
  return (
    <Box>
      <HeaderTop />
      <MainHeader />
    </Box>
  )
}

export default Header