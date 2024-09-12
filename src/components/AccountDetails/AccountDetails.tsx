/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsxImportSource theme-ui */
import { useState } from "react";
import { Box, Text, Button } from "theme-ui";
import Cookies from "../Cookies/Cookies";
import { IoPencil } from "react-icons/io5";

const AccountDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    email: "",
    phone1: "",
    Phone2: "",
    address: "",
  });

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleSave = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    //
    setIsEditing(false);
    console.log("Saved Account Details: ", accountDetails);
  };

  return (
    <>
      <Box
        sx={{
          //   maxWidth: "500px",
          //   mx: "auto",
          p: 6,
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          bg: "white",
          //   // position: "absolute",
          //   // ml: "550px",
        }}
      >
        <Text as="h2" sx={{ mb: 3, fontWeight: "bold" }}>
          Account Details
        </Text>

        {!isEditing ? (
          <Box>
            <Text as="p">
              <strong>Name:</strong> {accountDetails.name}
            </Text>
            <Text as="p">
              <strong>Email:</strong> {accountDetails.email}
            </Text>
            <Text as="p">
              <strong>Phone:</strong> {accountDetails.phone1}
            </Text>
            <Text as="p">
              <strong>Alternate Phone number</strong>
              {accountDetails.Phone2}
            </Text>
            <Text as="p">
              <strong>Address:</strong> {accountDetails.address}
            </Text>

            <Button
              sx={{
                width: "100%",
                bg: "#192A41",
                color: "white",
                fontWeight: "bold",
                mt: 4,
                ":hover": {
                  bg: "darken",
                },
              }}
              onClick={toggleEditMode}
            >
              <IoPencil />
            </Button>
          </Box>
        ) : (
          <Box as="form" onSubmit={handleSave}>
            <Box sx={{ mb: 3 }}>
              <Text as="label" sx={{ display: "block", mb: 1 }}>
                Name
              </Text>
              <input
                type="text"
                name="name"
                value={accountDetails.name}
                onChange={handleChange}
                sx={{ width: "100%", padding: "8px", borderColor: "#ccc" }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Text as="label" sx={{ display: "block", mb: 1 }}>
                Email
              </Text>
              <input
                type="email"
                name="email"
                value={accountDetails.email}
                onChange={handleChange}
                sx={{ width: "100%", padding: "8px", borderColor: "#ccc" }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Text as="label" sx={{ display: "block", mb: 1 }}>
                Phone
              </Text>
              <input
                type="tel"
                name="phone"
                value={accountDetails.phone1}
                onChange={handleChange}
                sx={{ width: "100%", padding: "8px", borderColor: "#ccc" }}
              />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Text as="label" sx={{ display: "block", mb: 1 }}>
                Alternate Phone Number
              </Text>
              <input
                type="tel"
                name="phone"
                value={accountDetails.Phone2}
                onChange={handleChange}
                sx={{ width: "100%", padding: "8px", borderColor: "#ccc" }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Text as="label" sx={{ display: "block", mb: 1 }}>
                Address
              </Text>
              <textarea
                name="address"
                value={accountDetails.address}
                // @ts-ignore
                onChange={handleChange}
                rows={3}
                sx={{ width: "100%", padding: "8px", borderColor: "#ccc" }}
              />
            </Box>

            <Button
              type="submit"
              sx={{
                width: "100%",
                bg: "#192A41",
                color: "white",
                fontWeight: "bold",
                mt: 4,
                ":hover": {
                  bg: "darken",
                },
              }}
            >
              Save Details
            </Button>
          </Box>
        )}
      </Box>
      <Cookies />
    </>
  );
};

export default AccountDetails;
