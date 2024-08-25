/** @jsxImportSource theme-ui */
// import { useState } from 'react'
import React from 'react';
import '../../App.css'
import SocialLinks from './socialLink';
import HeaderComponent from './headerComponent';


const Header = () => {
  
  return (
    <div>
  <div className="header-top" sx={{
      fontWeight: 'bold',
      fontSize: 4, // picks up value from `theme.fontSizes[4]`
      color: '#000',
      background: '#232F3E', 
      display: ['none', 'flex'],
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    }}>

<div className="container" sx={{
   color: '#000',
      // background: '#fff', // picks up value from `theme.colors.primary`
      width:'100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}>


  <SocialLinks />


  <div className="header-top-actions" sx={{
        
        display: 'flex',
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-evenly',
        color: '#fff',
      }}>

    <select name="currency" sx={{
      marginRight: 10,
    }}>
      <option value="USD" label="$US dollar">USD</option>
      <option value="NGN" label="₦Naira">NGN</option>
      <option value="EUR" label="€Euro">EUR</option>
      <option value="JPY" label="¥Japanese Yen">JPY</option>
      <option value="GBP" label="£Pound sterling">GBP</option>
      


    </select>

    <select name="language">

      <option value="en-US">English - EN</option>
      <option value="es-ES">español - ES</option>
      <option value="es-ES">Deutsch - DE</option>
      <option value="es-ES">العربية- AR</option>
      <option value="es-ES">中文 (简体) - ZH</option>
      <option value="fr">Français</option>

    </select>

  </div>

</div>

</div>

<HeaderComponent/>

</div>


   
  )
}

export default Header
