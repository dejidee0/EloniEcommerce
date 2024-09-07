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
    }, 3000);

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
              left: visible ? 0 : "-400px", // Move left off-screen when not visible
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
              transition: "left 0.5s ease-in-out", // Animate the left position
            }}
          >
            <Button
              onClick={() => setVisible(false)} // Close button to hide the modal
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
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Image
                  src="/cloth-"
                  alt="cloth"
                  sx={{ width: "40px", height: "40px" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 2,
                }}
              >
                <Text sx={{ fontSize: 1 }}>
                  A recent purchase was just made by a new customer.
                </Text>
                <Text sx={{ fontSize: 2 }}>
                  Gildan Adult ultra cotton T-shirt.
                </Text>
                <Text sx={{ fontSize: 1 }}>Just now</Text>
              </Box>
            </Flex>

            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                console.log(`Subscribed with email: ${values.email}`);
                resetForm();
                setVisible(false); // Hide modal on form submission
              }}
            ></Formik>
          </Box>
        </>
      )}
    </Flex>
  );
};

export default PopupModal;
