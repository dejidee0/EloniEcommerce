/** @jsxImportSource theme-ui */
import React from 'react';
import { FaSearch, FaRegUser, FaRegHeart, } from 'react-icons/fa';
import { HiOutlineShoppingCart } from "react-icons/hi";
import '../../App.css'; // Make sure to create this CSS file or adjust the import path as needed
import logo from '../../assets/logo.gif'
// import { Flex } from 'theme-ui';

const HeaderComponent = () => {
  return (
    <div className="container" sx={{
       background: '#000',
       height: [300, 200, 200],
       display: 'flex',
       flexDirection: ["column", "row",],
       justifyContent: ["center", "space-between"],
        paddingLeft: [4, 4],
        paddingRight: [4, 4]
    }}>
      <a href="#home" className="header-logo" >
        <img
          src={logo}
        //   alt="Eloni's shop logo"
          width="180"
          height="130"
        />
      </a>

      <div className="header-search-container" sx={{
        background: '#fff',
        height: 45,
        width: ['100%', '80%'],
        borderRadius: 10,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: [0, 5],
        marginTop: [3, 0]
      }}>
        
        <input
          type="search"
          name="search"
          className="search-field"
          placeholder="Search your product name..."
         sx={{
          color: 'grey',
          background: 'white',
          border: 'none',
          borderRadius: 15,
          paddingLeft: 3,
          fontSize: 18,
         }}
         />
         
         <div sx={{
          paddingRight:20,
        }}>
          <button className="search-btn" sx={{
          height: 40,
          padding: 0,
          margin: 0,
          background: "#fff"
        }}>
          <FaSearch aria-label="search" sx={{
            color: 'grey',
            background: 'white',
            fontSize: 25,
            
            margin: 0,
            paddingTop: 2,
          }}/>
        </button>
        </div>
        
      </div>
      <div className="header-user-actions" sx={{
    //    background: '#000',
    //    height: [300, 200, 200],
    display: ["none", "flex"],
    marginLeft: 5,
  }}>
  <button className="action-btn">
    <FaRegUser aria-label="user" sx={{
      color: 'white',
      background: 'none',
      fontSize: 30,
    }}/>
  </button>
  <button className="action-btn">
    <FaRegHeart aria-label="favorites" />
    <span className="count">0</span>
  </button>
  <button className="action-btn">
    <HiOutlineShoppingCart aria-label="shopping bag" />
    <span className="count">0</span>
  </button>
</div>
    </div>
  );
};

export default HeaderComponent;
