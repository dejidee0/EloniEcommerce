import React, { useState } from "react";
import { Box, Text, Button } from "theme-ui";
import Cookies from "../Cookies/Cookies";

const AccountDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [accountDetails, setAccountDetails] = useState({
    name: "Khalid Umar",
    email: "khalid.umar@example.com",
    phone: "8100-456-7890",
    address: "123 Main St, Victoria island, Lagos, Nigeria",
  });

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    //
    setIsEditing(false);
    console.log("Saved Account Details: ", accountDetails);
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: "500px",
          mx: "auto",
          p: 6,
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          bg: "white",
          position: "absolute",
          ml: "350px",
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
              <strong>Phone:</strong> {accountDetails.phone}
            </Text>
            <Text as="p">
              <strong>Address:</strong> {accountDetails.address}
            </Text>

            <Button
              sx={{
                width: "100%",
                bg: "primary",
                color: "white",
                fontWeight: "bold",
                mt: 4,
                ":hover": {
                  bg: "darken",
                },
              }}
              onClick={toggleEditMode}
            >
              Edit Details
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
                value={accountDetails.phone}
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
                onChange={handleChange}
                rows={3}
                sx={{ width: "100%", padding: "8px", borderColor: "#ccc" }}
              />
            </Box>

            <Button
              type="submit"
              sx={{
                width: "100%",
                bg: "primary",
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
