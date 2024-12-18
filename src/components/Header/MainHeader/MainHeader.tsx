/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { FaSearch, FaRegUser, FaRegHeart, FaBox } from 'react-icons/fa';
import { HiOutlineShoppingCart } from "react-icons/hi";
import logo from '@/assets/logos/Eloni_logo.png'
import { Box, Button, Image, Input } from 'theme-ui';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig/firebaseConfig';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Modal from '@/components/Modal/Modal'
import { theme } from '@/Theme/theme';
import { RootState } from '../../../store/store';
import { useSelector } from "react-redux";

const MainHeader: React.FC = () => {
    const cartItem = useSelector((state: RootState) => state.cart.items.length)
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
        <>
            {/* Helmet for SEO optimization */}
            <Helmet>
            <meta name="description" content="Discover top-quality products at EloniEcommerce, your trusted online store for electronics, fashion, and more. Shop now for the best deals and enjoy fast shipping!" />
            <meta name="keywords" content="EloniEcommerce, online shopping, best deals, electronics, fashion, ecommerce, buy online, fast shipping, quality products, shop online" />
            <meta property="og:title" content="EloniEcommerce - Your Trusted Online Store for Quality Products" />
            <meta property="og:description" content="Explore the best deals on electronics, fashion, home essentials, and more at EloniEcommerce. Shop now for fast and secure delivery!" />
            </Helmet>

            <Box
                className='headerMain'
                sx={{
                    ...theme.headerMain,
                }}
            >
                <Box
                    className='container'
                    sx={{
                        ...theme.container,
                        ...theme.headerMain.container
                    }}
                >
                    {/* Logo */}
                    <Box className="header-search-container" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: ['center', ''],
                    }}>
                        <Link to="/" className="header-logo" >
                            <Image
                                src={logo}
                                alt="EloniEcommerce logo"
                                width="180"
                                height="130"
                            />
                        </Link>
                    </Box>

                    {/* Search */}
                    <Box sx={{
                        ...theme.containers.headerSearchContainer
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
                                width: '100%',
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

                    {/* User Actions */}
                    <Box className="header-user-actions"
                        sx={{
                            display: ["none", 'none', 'none', 'none', "flex"],
                            marginLeft: 5,
                            height: "40px",
                            alignItems: 'center'
                        }}
                    >
                        <Button
                            className='icon'
                            sx={{
                                cursor: 'pointer',
                                backgroundColor: 'black',
                                marginRight: '25px',
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
                                        color: 'orange',
                                        fontSize: '30px',
                                    },
                                }}
                            />
                        </Button>

                        {showModal ? <Modal style={{ backgroundColor: '#fff', padding: '16px', position: 'absolute', zIndex: 1000, top: '161px', right: 191, minWidth: 206, height: 260, boxShadow: '0 0 10px 0 rgba(0,0,0,.15)', borderRadius: '4px', fontSize: '12px' }}>
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

                                <Button
                                    onClick={handleLogout}
                                    sx={{
                                        cursor: 'pointer',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        paddingRight: '15px',
                                        paddingLeft: '15px',
                                        paddingBottom: 12, paddingTop: 12,
                                        width: '100%'
                                    }}
                                >
                                    Logout
                                </Button>
                            </>
                        </Modal> : null}

                        <Link to={'/wishlist'} sx={{ cursor: 'pointer', backgroundColor: 'black', paddingRight: '25px', paddingLeft: '0px', textDecoration: 'none' }} className='icon'>
                            <FaRegHeart aria-label="favorites" sx={{ color: 'white', background: 'none', fontSize: 25, paddingTop: -5, '&:hover': { color: 'orange', fontSize: '30px', }, }} />
                            <span style={{ paddingTop: '-20px', color: 'white', fontSize: '15px', position: "absolute", marginTop: "-5px", backgroundColor: "red", borderRadius: "200px", padding: "1px", width: "20px", marginLeft: -5, textAlign: 'center' }}>0</span>
                        </Link>

                        <Link to={'/cart'} sx={{ cursor: 'pointer', backgroundColor: 'black', paddingRight: '25px', paddingLeft: '0px', textDecoration: 'none' }}>
                            <HiOutlineShoppingCart aria-label="shopping bag" sx={{ color: 'white', background: 'none', fontSize: 25, paddingTop: -5, '&:hover': { color: 'orange', fontSize: '30px', }, }} />
                            <span style={{ paddingTop: '-20px', color: 'white', fontSize: '15px', position: "absolute", marginTop: "-5px", backgroundColor: "red", borderRadius: "200px", padding: "1px", width: "20px", marginLeft: -5, textAlign: 'center' }}>{cartItem}</span>
                        </Link>
                    </Box>

                </Box>
            </Box>
        </>
    );
};

export default MainHeader;
