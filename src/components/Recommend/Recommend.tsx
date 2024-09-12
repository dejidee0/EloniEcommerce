import { Box, Text } from "theme-ui";
import { useState, useEffect } from "react";

const Recommend: React.FC = () => {
  const [popupAccepted, setPopupAccepted] = useState(false);

  useEffect(() => {
    const isAccepted = localStorage.getItem("popupAccepted");
    if (isAccepted) {
      setPopupAccepted(true);
    }
  }, []);

  const items = [
    {
      name: "Handbags",
      description: "A complete overview of your activities.",
      price: "$49.99",
      img: "bag.png",
    },
    {
      name: "Clothing",
      description: "Manage your tasks efficiently.",
      price: "$29.99",
      img: "cloth-1.jpg",
    },
    {
      name: "Coat",
      description: "User management module.",
      price: "$19.99",
      img: "coat.png",
    },
    {
      name: "Cosmetics kit",
      description: "Communicate with team members.",
      price: "$9.99",
      img: "cosmetics.png",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // minHeight: "100vh",
          // justifyContent: "center",
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
          Recommended for you
        </Text>
        <Box as="ul" sx={{ listStyle: "none", display: "flex" }}>
          {items.map((item, index) => (
            <Box
              as="li"
              key={index}
              sx={{
                mb: 2,
                fontSize: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "4px",
                gap: "2px",
                // p: 1,
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
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Recommend;
