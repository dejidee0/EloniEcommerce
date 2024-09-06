import React, { useState } from "react";
import { Box, Button, Input, Text, Heading, Image, Flex } from "theme-ui";

const SubscribeModal: React.FC = () => {
  const [modal, setModal] = useState(true);
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };
  const handleSubscribe = () => {
    if (email) {
      console.log(`Subscribed with email: $(email)`);
      setEmail("");
    } else console.log("please enter a valid email Address");
  };
  return (
    <Flex>
      {modal && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 10,
              gap: 5,
            }}
            onClick={toggleModal}
          />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0)",
              width: ["90%", "400px"],
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              zIndex: 11,
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "top 0.3s ease",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              onClick={toggleModal}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "red",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
                padding: 0,
              }}
            >
              &times;
            </Button>
            <Image
              src="/Telegram logo.png"
              alt="Telegram Icon"
              sx={{ width: "30px", marginRight: "5px" }}
            />

            <Heading as="h2" sx={{ fontSize: 3, marginBottom: "10px" }}>
              Subscribe Newsletter
            </Heading>

            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Text sx={{ fontSize: 2 }}>
                Subscribe to <strong>Eloni's Shop</strong> to get the latest
                products and discount updates.
              </Text>
            </Flex>

            <Input
              height="50px"
              padding="8px 16px"
              type="email"
              placeholder="Enter your email"
              sx={{
                marginBottom: "10px",
                justifyContent: "center",
                alignItems: "end",

                height: "50px",
                textAlign: "center",
                fontSize: "24px",
                borderRadius: "4px",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              onClick={handleSubscribe}
              sx={{
                backgroundColor: "primary",
                width: "auto",
                padding: "8px 16px",
                fontSize: 1,
              }}
            >
              Subscribe
            </Button>
          </Box>
        </>
      )}
    </Flex>
  );
};

export default SubscribeModal;
