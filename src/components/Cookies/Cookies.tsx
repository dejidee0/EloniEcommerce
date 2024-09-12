import React, { useEffect, useState } from "react";
import { Box, Button, Text, Flex } from "theme-ui";

const Cookies: React.FC = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(() => {
    return localStorage.getItem("cookiesAccepted") === "true";
  });

  const [visible, setVisible] = useState<boolean>(!cookiesAccepted);

  useEffect(() => {
    if (!cookiesAccepted) {
      const initialTimeout = setTimeout(() => {
        setVisible(true);
      }, 5000);

      return () => clearTimeout(initialTimeout);
    }
  }, [cookiesAccepted]);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
    setVisible(false);
  };

  return (
    <>
      {!cookiesAccepted && visible && (
        <Flex sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: visible ? 0 : "-400px",
              margin: "20px",
              width: ["90%", "400px"],
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              zIndex: 9,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              transition: "left 0.5s ease-in-out",
            }}
          >
            <Button
              onClick={() => setVisible(false)}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#000000",
              }}
            >
              &times;
            </Button>

            <Flex
              sx={{
                padding: 3,
                alignItems: "center",
                gap: "10px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}></Box>
              <Box
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 2,
                  gap: 2,
                }}
              >
                <Text sx={{ fontSize: 2 }}>This website uses cookies</Text>
                <Text sx={{ fontSize: 1 }}>
                  This website uses cookies. For further information on how we
                  use cookies, you can read our Privacy and Cookies Notice.
                </Text>
                <Button
                  sx={{ backgroundColor: "#192A41" }}
                  onClick={handleAcceptCookies}
                >
                  ACCEPT COOKIES
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Cookies;
