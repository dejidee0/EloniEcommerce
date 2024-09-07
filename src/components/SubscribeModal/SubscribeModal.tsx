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
              justifyContent: 'center',
              borderRadius: "8px",
              zIndex: 11,
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "row",
              height: '400px',
              maxWidth: "750px",
              gap: 5,
              padding: '50px 30px'
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
                fontSize: "16px",
                cursor: "pointer",
                // padding: '5px',
                borderRadius: '5px',
                color: '#ffffff',
                display: 'block'
              }}
            >
              &times;
            </Button>

            <Image
              src="/Telegram logo.png"
              alt="Telegram Icon"
              sx={{
                // width: "50%",
                width: '230px',
                height: '230px',
                marginRight: "5px",
                marginTop: 10,
                display: ["none", "none", "block"],
              }}
            />

            <Flex
              sx={{
                justifyContent: "center",
                flexDirection: "column",
                width: ["100%", "100%", "40%"],
                textAlign: 'left',
              }}
            >
              <Heading sx={{ fontSize: '1.125rem', marginBottom: "10px", color: '#454545', fontWeight: '600' }}>
                Subscribe Newsletter
              </Heading>
              <Text sx={{ fontSize: '0.875rem', lineHeight: 1.6, color: '#0f1111' }}>
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
                      placeholder="Email Address"
                      sx={{
                        padding: "8px 16px",
                        marginBottom: "16px",
                        borderRadius: "5px",
                        fontSize: "0.875rem",
                        display: "block",
                        justifyContent: "center",
                        alignItems: "end",
                        border: '1px solid #ededed',
                        marginTop: '20px'
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
                        backgroundColor: "#232f35",
                        textTransform: 'uppercase',
                        color: '#fff',
                        fontWeight: '600',
                        width: "auto",
                        display: 'block',
                        transition: '0.2s ease',
                        padding: "10px 15px",
                        borderRadius: 5,
                        margin: 'auto',
                        fontSize: '0.875rem',
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
