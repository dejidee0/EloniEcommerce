import { Box, Text } from "theme-ui";
import { useState, useEffect } from "react";

const Recommend: React.FC = () => {
  const [_, setPopupAccepted] = useState(false);

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
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "#fff",
          bg: "background",
          padding: "20px",
        }}
      >
        <Text
          as="div"
          sx={{
            mb: 4,
            fontSize: [3, 4], // Adjust font size for responsiveness
            fontWeight: "bold",
            ml: 3,
            padding: 2,
            margin: "2",
          }}
        >
          Recommended for you
        </Text>
        <Box
          as="ul"
          sx={{
            listStyle: "none",
            display: "grid", // Use grid for layout flexibility
            gridTemplateColumns: [
              "1fr", // Single column for mobile
              "1fr 1fr", // Two columns for tablets
              "1fr 1fr 1fr 1fr", // Four columns for large screens
            ],
            gap: "20px", // Space between grid items
          }}
        >
          {items.map((item, index) => (
            <Box
              as="li"
              key={index}
              sx={{
                fontSize: [1, 2], // Responsive font size
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                bg: "#f9f9f9",
                transition: "background-color 0.3s ease",
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
                    width: "80px", // Responsive image size
                    height: "80px",
                    marginRight: "16px",
                    borderRadius: "8px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "10px",
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
