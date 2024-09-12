import { Box, Text, Button } from "theme-ui";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";

const WishListContent: React.FC = () => {
  const [popupAccepted, setPopupAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("popupAccepted");
    if (isAccepted) {
      setPopupAccepted(true);
    }
  }, []);

  const items = [
    {
      name: "",
      description: "A complete overview of your activities.",
      price: "$49.99",
      img: "/bag.png",
    },
    {
      name: "",
      description: "Manage your tasks efficiently.",
      price: "$29.99",
      img: "cloth-1.jpg",
    },
    {
      name: "",
      description: "User management module.",
      price: "$19.99",
      img: "coat.png",
    },
    {
      name: "",
      description: "Communicate with team members.",
      price: "$9.99",
      img: "cosmetics.png",
    },
    {
      name: "",
      description: "",
      price: "",
      img: "dress.png",
    },
    {
      name: "",
      description: "",
      price: "",
      img: "hat.jpg",
    },
    {
      name: "",
      description: "",
      price: "",
      img: "glasses.png",
    },
  ];

  return (
    <>
      {/* {!popupAccepted && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        ></Box>
      )} */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "#fff",
          bg: "background",
        }}
      >
        <Text
          as="div"
          sx={{
            mb: 4,
            fontSize: 3,
            fontWeight: "bold",
            ml: 3,
            padding: 2,
            margin: "2",
          }}
        >
          Saved Items
        </Text>
        <Box as="ul" sx={{ listStyle: "none", p: 0 }}>
          {items.map((item, index) => (
            <Box
              as="li"
              key={index}
              sx={{
                mb: 2,
                fontSize: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "4px",
                p: 2,
                bg: "#f9f9f9",
                ":not(:last-child)": {
                  mb: 2,
                },
                ":hover": {
                  bg: "#e0e0e0",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginRight: "16px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <Text sx={{ fontWeight: "bold" }}>{item.name}</Text>
                  <Text sx={{ mb: 2 }}>{item.description}</Text>
                  <Text sx={{ color: "green" }}>{item.price}</Text>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    ml: 3,
                    bg: "transparent",
                    color: "black",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    p: 2,
                    ":hover": {
                      bg: "#192A41",
                      color: "white",
                    },
                  }}
                >
                  Button
                </Button>
                <Button
                  sx={{
                    ml: 3,
                    bg: "transparent",
                    color: "#000",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    ":hover": {
                      bg: "#192A41",
                      color: "white",
                    },
                  }}
                >
                  <FaTrash style={{ marginRight: "8px" }} /> Remove
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default WishListContent;
