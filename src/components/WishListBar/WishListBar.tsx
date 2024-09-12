import React from "react";
import { Box, NavLink, Flex } from "theme-ui";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaBoxOpen,
  FaInbox,
  FaStar,
  FaTrophy,
  FaGift,
  FaHeart,
  FaTicketAlt,
  FaHistory,
  FaCog,
  FaAddressBook,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const WishListBar: React.FC = () => {
  const menuItems = [
    { name: "My account", icon: FaUser, link: "/my-account" },
    { name: "Orders", icon: FaBoxOpen, link: "/orders" },
    { name: "Inbox", icon: FaInbox, link: "/inbox" },
    { name: "Pending Review", icon: FaStar, link: "/review" },
    { name: "Activities", icon: FaTrophy, link: "/activities" },
    { name: "Voucher", icon: FaGift, link: "/voucher" },
    { name: "Saved Items", icon: FaHeart, link: "/wishlist" },
    { name: "Tickets", icon: FaTicketAlt, link: "/tickets" },
    { name: "Followed Sellers", icon: FaHistory, link: "/followed-sellers" },
    { name: "Recently Viewed", icon: FaHistory, link: "/recently-viewed" },
    { name: "Account Management", icon: FaCog, link: "/account-management" },
    { name: "Address Book", icon: FaAddressBook, link: "/address-book" },
    { name: "Newsletter Preferences", icon: FaEnvelope, link: "/newsletter" },
    { name: "Logout", icon: FaSignOutAlt, link: "/logout" },
  ];

  return (
    <>
      <Box
        as="nav"
        sx={{
          width: ["250px"],
          bg: "#ffff",
          color: "#000",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",

          p: 2,
          height: "100vh",
          marginTop: [2, 4],
          marginLeft: [2, 5],
        }}
      >
        <Box as="ul" sx={{ listStyleType: "none", p: 0 }}>
          {menuItems.map((item, index) => (
            <Box
              as="li"
              key={index}
              sx={{
                mb: 3,
                fontSize: 2,
                ":hover": {
                  cursor: "pointer",
                  // p: 2,
                },
              }}
            >
              <NavLink
                as={Link}
                to={item.link}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  listStyleType: "none",
                }}
              >
                <Flex sx={{ alignItems: "center" }}>
                  <item.icon sx={{ mr: 2 }} />
                  {item.name}
                </Flex>
              </NavLink>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default WishListBar;
