/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { FaSearch, FaRegUser, FaRegHeart, FaBox, } from 'react-icons/fa';
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from '../../assets/logos/Eloni logo.png'
import { Box, Button, Image, Input } from 'theme-ui';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import "../SideBar/css/style.css"
import Modal from '@/components/Modal/Modal'

const HeaderComponent: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <Box className="container"
      sx={{
        background: '#000',
        height: [300, 200, 200],
        display: 'flex',
        flexDirection: ["column", "row"],
        justifyContent: ["center", "space-between"],
        paddingLeft: [4, 4],
        paddingRight: [4, 4],
      }}
    >
      {/* Existing elements like logo, search bar, etc. */}
      <Box className="header-search-container" sx={{

        display: 'flex',
        flexDirection: 'row',
        justifyContent: ['center', ''],
      }}>
        <Link to="/" className="header-logo" >
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
        </Link>
      </Box>

      <Box className="header-search-container" sx={{
        background: '#fff',
        height: 45,
        width: ['100%', '69%'],
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
            cursor: 'pointer',
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
              paddingTop: 9,
            }} />
          </Button>
        </Box>

      </Box>

      <Box className="header-user-actions"
        sx={{
          display: ["none", "flex"],
          marginLeft: 5,
          marginTop: 5,
          height: "40px",
          alignItems: 'center'
        }}
      >
        <Button
          className='icon'
          sx={{
            cursor: 'pointer',
            backgroundColor: 'black',
            paddingRight: '25px',
            paddingLeft: '0px',
          }}
          onClick={() => toggleModal()}
        >
          <FaRegUser
            aria-label="user"
            sx={{
              color: 'white',
              background: 'none',
              fontSize: 25,
              paddingTop: -5,
              '&:hover': {
                color: 'orange',               // Change the text color on hover
                fontSize: '30px',   // Slightly increase the size on hover
              },
            }}
          />
        </Button>

        {
          showModal ? <Modal style={{ backgroundColor: '#fff', padding: '16px', position: 'absolute', zIndex: 1000, top: '161px', right: 191, minWidth: 206, height: 197, boxShadow: '0 0 10px 0 rgba(0,0,0,.15)', borderRadius: '4px', fontSize: '12px' }}>
            <>
              <Link to="/sign-in" sx={{ borderRadius: 5, paddingBottom: 12, paddingTop: 12, textAlign: 'center', backgroundColor: '#192A41', textDecoration: 'none', color: 'white', display: 'block' }}>
                Sign in
              </Link>
              <Link to='/my-account' sx={{ width: '100%', paddingBottom: 12, paddingTop: 12, color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/sign-in')}>
                <FaRegUser
                  aria-label="user"
                  sx={{
                    background: 'none',
                    fontSize: 25,
                    paddingTop: -5,
                    marginRight: 10
                  }}
                />
                My Account
              </Link>

              <Link to='/orders' sx={{ width: '100%', paddingBottom: 12, paddingTop: 12, color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => navigate('/sign-in')}>
                <FaBox
                  aria-label="FaBox"
                  sx={{
                    background: 'none',
                    fontSize: 25,
                    paddingTop: -5,
                    marginRight: 10
                  }}
                />
                Orders
              </Link>

              <Link to="/wishlist" sx={{ width: '100%', paddingBottom: 12, paddingTop: 12, display: 'flex', textDecoration: 'none', color: 'black', alignItems: 'center' }}>
                <FaRegHeart
                  aria-label="favorites"
                  sx={{
                    background: 'none',
                    fontSize: 25,
                    paddingTop: -5,
                    marginRight: 10
                  }}
                />
                Saved Items
              </Link>
            </>
          </Modal> : null
        }
        <Link
          to={'/wishlist'}
          sx={{
            cursor: 'pointer',
            backgroundColor: 'black',
            paddingRight: '25px',
            paddingLeft: '0px',
            textDecoration: 'none'
          }}
          className='icon'
        >
          <FaRegHeart
            aria-label="favorites"
            sx={{
              color: 'white',
              background: 'none',
              fontSize: 25,
              paddingTop: -5,
              '&:hover': {
                color: 'orange',               // Change the text color on hover
                fontSize: '30px',   // Slightly increase the size on hover
              },
            }}
          />
          <span
            style={{
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
              textAlign: 'center'
            }}
          >
            0
          </span>
        </Link>
        <Link to={'/cart'}
          sx={{
            cursor: 'pointer',
            backgroundColor: 'black',
            paddingRight: '25px',
            paddingLeft: '0px',
            textDecoration: 'none'

          }}
        >
          <HiOutlineShoppingCart
            aria-label="shopping bag"
            sx={{
              color: 'white',
              background: 'none',
              fontSize: 25,
              paddingTop: -5,
              '&:hover': {
                color: 'orange',               // Change the text color on hover
                fontSize: '30px',   // Slightly increase the size on hover
              },
            }}
          />
          <span
            style={{
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
              textAlign: 'center'
            }}
          >
            0
          </span>
        </Link>
        <Button
          onClick={handleLogout}
          sx={{
            cursor: 'pointer',
            backgroundColor: 'red',
            color: 'white',
            paddingRight: '15px',
            paddingLeft: '15px',
            marginLeft: '10px',
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};


export default HeaderComponent;
