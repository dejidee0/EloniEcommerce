/* eslint-disable @typescript-eslint/ban-ts-comment */
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
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: ["55px", "50px", "50px"],
              borderRadius: "12px",
              zIndex: 11,
              textAlign: ["center", "center"],
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
              display: "flex",
              flexDirection: ["column", "row"],
              maxWidth: ["95%", "70%", "600px"],
              gap: 4,
            }}
          >
            <Button
              onClick={toggleModal}
              sx={{
                position: "absolute",
                top: "15px",
                right: "15px",
                backgroundColor: "red",
                border: "none",
                fontSize: "28px",
                cursor: "pointer",
                padding: 2,
                color: "black",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              &times;
            </Button>

            <Image
              src="/Telegram logo.png"
              alt="Telegram Icon"
              sx={{
                // width: "50%",
                width: '35%',
                height: '230px',
                marginRight: ['0', "5px"],
                marginTop: 10,
                display: ["none", "block"],
                marginBottom: ["20px", "0"],
                borderRadius: "10px"
              }}
            />

            <Flex
              sx={{
                flexDirection: "column",
                width: ["100%", "65%"],
                textAlign: "left",
              }}
            >
              <Heading
                as="h2"
                sx={{
                  fontSize: [3, 3, 4],
                  marginBottom: "12px",
                  fontWeight: "bold",
                }}
              >
                Subscribe to Our Newsletter
              </Heading>
              <Text sx={{ fontSize: [2, 2, 3], marginBottom: "16px" }}>
                Stay updated with <strong>Eloni's Shop</strong> for exclusive
                product updates and discounts.
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
                      placeholder="Email Address"
                      sx={{
                        width: "100%",
                        padding: "12px 16px",
                        fontSize: [2, 2, 3],
                        borderRadius: "6px",
                        marginBottom: "12px",
                        border: "1px solid #ddd",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      // @ts-ignore
                      style={{
                        color: "red",
                        fontSize: "12px",
                        marginBottom: "10px",
                      }}
                    />
                    <Flex
                      sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        flexDirection: ["column", "row"],
                      }}
                    >
                      <Button
                        type="submit"
                        sx={{
                          backgroundColor: "#192A41",
                          width: "auto",
                          padding: "10px 24px",
                          fontSize: [1, 2],
                          cursor: "pointer",
                          borderRadius: "8px",
                          color: "white",
                          transition: "background-color 0.3s",
                          "&:hover": {
                            backgroundColor: "#1A2B50",
                          },
                        }}
                      >
                        Subscribe
                      </Button>
                    </Flex>
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
