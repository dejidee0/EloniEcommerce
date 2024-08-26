/** @jsxImportSource theme-ui */
import React from 'react';
import SocialLinks from './SocialLink';
import HeaderComponent from './HeaderComponent';
import { Box, Select } from 'theme-ui';

const Header: React.FC = () => {

  return (
    <Box>
      <Box className="header-top" sx={{
        fontWeight: 'bold',
        fontSize: 4, // picks up value from `theme.fontSizes[4]`
        color: '#000',
        background: '#232F3E',
        display: ['none', 'flex'],
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      }}>

        <Box className="container" sx={{
          color: '#000',
          // background: '#fff', // picks up value from `theme.colors.primary`
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>


          <SocialLinks />


          <Box className="header-top-actions" sx={{
            display: 'flex',
            flexDirection: 'row',
            height: 40,
            justifyContent: 'space-evenly',
            color: '#fff',
          }}>

            <Select defaultValue="currency">
              <option value="USD" label="$US dollar">USD</option>
              <option value="NGN" label="₦Naira">NGN</option>
              <option value="EUR" label="€Euro">EUR</option>
              <option value="JPY" label="¥Japanese Yen">JPY</option>
              <option value="GBP" label="£Pound sterling">GBP</option>
            </Select>

            <Select
              defaultValue="language"
              arrow={
                <Box
                  as="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentcolor"
                  sx={{
                    ml: -28,
                    alignSelf: 'center',
                    pointerEvents: 'none',
                  }}>
                  <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
                </Box>
              }
            >

              <option value="en-US">English - EN</option>
              <option value="es-ES">español - ES</option>
              <option value="es-ES">Deutsch - DE</option>
              <option value="es-ES">العربية- AR</option>
              <option value="es-ES">中文 (简体) - ZH</option>
              <option value="fr">Français</option>

            </Select>

          </Box>

        </Box>

      </Box>

      <HeaderComponent />

    </Box>



  )
}

export default Header
