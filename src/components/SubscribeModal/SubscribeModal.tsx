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
    <>
      {modal && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: "50%",
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
              maxWidth: '750px'
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
              sx={{ 
                width: "50%", 
                marginRight: "5px", 
                display: ['none', 'block']
              }}
            />

            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <Heading as="h2" sx={{ fontSize: 3, marginBottom: "10px" }}>
                Subscribe Newsletter
              </Heading>
              <Text sx={{ fontSize: 2 }}>
                Subscribe to <strong>Eloni's Shop</strong> to get the latest
                products and discount updates.
              </Text>

              <Input
                placeholder="Enter your email"
                type="email"
                sx={{
                  width: "70%",
                  height: "50%",
                  padding: "8px 16px",
                  marginBottom: "10px",
                  justifyContent: "center",
                  alignItems: "end",
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
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};

export default SubscribeModal;
