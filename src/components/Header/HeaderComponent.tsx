/** @jsxImportSource theme-ui */
import React from 'react';
import { FaSearch, FaRegUser, FaRegHeart, } from 'react-icons/fa';
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from '../../assets/logos/Eloni logo.png'
import { Box, Button, Image, Input } from 'theme-ui';

const HeaderComponent: React.FC = () => {
  return (
    <Box className="container" 
    sx={{
      background: '#000',
      height: [300, 200, 200],
      display: 'flex',
      flexDirection: ["column", "row",],
      justifyContent: ["center", "space-between"],
      paddingLeft: [4, 4],
      paddingRight: [4, 4]
      
    }}>
       <Box className="header-search-container" sx={{
      
        display: 'flex',
        flexDirection: 'row',
        justifyContent: ['center', ''],
      }}>
        <a href="#home" className="header-logo" >
        <Image
          src={logo}
          sx={{
            display: ["", "flex"],
            justifyContent: ["", "center"]
          }}
          //   alt="Eloni's shop logo"
          width="180"
          height="130"
        />
      </a>
      </Box>
      

      <Box className="header-search-container" sx={{
        background: '#fff',
        height: 45,
        width: ['100%', '80%'],
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: [0, 5],
        marginTop: [0, 5]
      }}>

        <Input
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

        <Box sx={{
          paddingRight: 20,
        }}>
          <Button className="search-btn" sx={{
            height: 40,
            padding: 0,
            margin: 0,
            background: "#fff"
          }}>
            <FaSearch aria-label="search" style={{
              color: 'grey',
              background: 'white',
              fontSize: 25,

              margin: 0,
              paddingTop: 2,
            }} />
          </Button>
        </Box>

      </Box>
      <Box className="header-user-actions" sx={{
          //  background: 'transparent',
        //    height: [300, 200, 200],
        display: ["none", "flex"],
        marginLeft: 5,
        marginTop: 5,
        height: "40px",
        
      }}>
        <Button sx={{
          backgroundColor: 'black',
          Height: '30px',
          paddingRight: '25px',
          
          paddingLeft: '0px',
        }}>
          <FaRegUser aria-label="user" style={{
            color: 'white',
            background: 'none',
            fontSize: 30,
            paddingTop: -5,
          }} />
        </Button>
        <Button sx={{
          backgroundColor: 'black',
          paddingRight: '25px',
          paddingLeft: '0px'
        }}>
          <FaRegHeart aria-label="favorites" style={{
            color: 'white',
            background: 'none',
            fontSize: 30,
            paddingTop: -5,
          }}/>
          <span style={{
            paddingTop: '-20px',
            color: 'white',
            fontSize: '15px',
            position: "absolute",
            marginTop: "-5px",
            backgroundColor: "red",
            borderRadius: "200px",
            padding: "1px",
            width: "20px",
            marginLeft: -5,
          }}>0</span>
        </Button>
        <Button sx={{
          backgroundColor: 'black',
          paddingRight: '25px',
          paddingLeft: '0px'
        }}>
          <HiOutlineShoppingCart aria-label="shopping bag" style={{
            color: 'white',
            background: 'none',
            fontSize: 30,
            paddingTop: -5,
          }}/>
          <span style={{
            paddingTop: '-20px',
            color: 'white',
            fontSize: '15px',
            position: "absolute",
            marginTop: "-5px",
            backgroundColor: "red",
            borderRadius: "200px",
            padding: "1px",
            width: "20px",
            marginLeft: -5,
          }}>0</span>
        </Button>
      </Box>
    </Box>
  );
};

export default HeaderComponent;
