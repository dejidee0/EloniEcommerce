import React, { useEffect, useState } from "react";
import { Box, Button, Input, Text, Heading, Image, Flex } from "theme-ui";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SubscribeModal: React.FC = () => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const showModal = () => {
      setModal(true);
    };

    const initialTimeout = setTimeout(() => {
      showModal();
      const interval = setInterval(() => {
        showModal();
      }, 600000);
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <>
      {modal && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, 0)",
              backgroundColor: "white",
              padding: "50px",
              borderRadius: "8px",
              zIndex: 11,
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "row",
              maxWidth: "750px",
              gap: 5,
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
                padding: 2,
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
                display: ["none", "none", "block"],
              }}
            />

            <Flex
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                flexDirection: "column",
                width: ["100%", "100%", "50%"],
              }}
            >
              <Heading as="h2" sx={{ fontSize: 3, marginBottom: "10px" }}>
                Subscribe Newsletter
              </Heading>
              <Text sx={{ fontSize: 2 }}>
                Subscribe to <strong>Eloni's Shop</strong> to get the latest
                products and discount updates.
              </Text>

              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  console.log(`Subscribed with email: ${values.email}`);
                  resetForm();
                  toggleModal();
                }}
              >
                {() => (
                  <Form>
                    <Field
                      name="email"
                      type="email"
                      as={Input}
                      placeholder="Enter your email"
                      sx={{
                        width: ["90%", "80%", "100%"],
                        height: ["8px 12px", "8px 16px", "8px 20px"],
                        fontSize: [1, 2, 3],
                        padding: "8px 16px",
                        marginBottom: "10px",
                        borderRadius: "4px",
                        font: "inherit",
                        display: "block",
                        justifyContent: "center",
                        alignItems: "end",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      // style={{
                      //   color: "red",
                      //   fontSize: "12px",
                      //   marginBottom: "10px",
                      // }}
                    />
                    <Button
                      type="submit"
                      sx={{
                        backgroundColor: "primary",
                        width: "auto",
                        padding: "8px 16px",
                        fontSize: 1,
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      Subscribe
                    </Button>
                  </Form>
                )}
              </Formik>
            </Flex>
          </Box>
        </>
      )}
    </>
  );
};

export default SubscribeModal;
