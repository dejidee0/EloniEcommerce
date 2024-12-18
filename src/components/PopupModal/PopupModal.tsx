import React, { useEffect, useState } from "react";
import { Box, Button, Text, Image, Flex } from "theme-ui";
import { Formik } from "formik";
import * as Yup from "yup";

const PopupModal: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setModal(true);
      setVisible(true);

      const interval = setInterval(() => {
        setVisible(true);
      }, 6000);

      return () => clearInterval(interval);
    }, 5000);

    if (modal) {
      const autoHide = setTimeout(() => {
        setVisible(false);
      }, 5000);
      return () => clearTimeout(autoHide);
    }

    return () => clearTimeout(initialTimeout);
  }, [modal]);

  return (
    <Flex>
      {modal && (
        <>
          <Box
            sx={{
              position: "fixed",
              bottom: 0,
              left: visible ? 0 : "-400px",
              margin: ["0px", "20px"],
              width: ["80%", "400px"],
              backgroundColor: "white",
              padding: ["15px", "20px"],
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
                color: "red",
              }}
            >
              &times;
            </Button>

            <Flex
              sx={{
                padding: 3,
                alignItems: "center",
                gap: ["10px", "15px"],
                flexDirection: ["column", "row"],
                justifyContent: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Image
                  src="/T-shirt.jpg"
                  alt="cloth"
                  sx={{
                    width: "80px",
                    height: "80px",
                    display: ["none", "block"],
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: ["center", "left"],
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 2,
                  width: ["auto", "220px"],
                }}
              >
                <Text sx={{ fontSize: [0, 1], textAlign: "center" }}>
                  A recent purchase was just made by a new customer.
                </Text>
                <Text
                  sx={{ fontSize: [1, 2], fontWeight: "bold", marginTop: 10 }}
                >
                  Gildan Adult Ultra Cotton T-shirt.
                </Text>
                <Text sx={{ fontSize: [0, 1], marginTop: 10 }}>Just now</Text>
              </Box>
            </Flex>

            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(`Subscribed with email: ${values.email}`);
                resetForm();
                setVisible(false);
              }}
            >
              {({ handleSubmit }) => <form onSubmit={handleSubmit}></form>}
            </Formik>
          </Box>
        </>
      )}
    </Flex>
  );
};

export default PopupModal;
