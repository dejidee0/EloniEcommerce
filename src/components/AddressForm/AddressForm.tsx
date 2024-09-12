import { FaArrowLeft } from "react-icons/fa";
import { Box, Label, Input, Button, Heading } from "theme-ui";

const AddressForm = () => {
  return (
    <Box
      as="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{
        border: "1px  ",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        maxWidth: ["300px", "400px", "600px"],
        margin: "auto auto",
        padding: ["15px", "20px", "50px"],
        ml: 2,
        mt: 4,
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          mb: 3,
        }}
      >
        <Heading>
          <FaArrowLeft />
          Edit Address
        </Heading>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Label htmlFor="firstName">First Name</Label>
          <Input name="firstName" id="firstName" mb={3} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Label htmlFor="lastName">Last Name</Label>
          <Input name="lastName" id="lastName" mb={3} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Label htmlFor="phone">Phone Number</Label>
          <Input name="phone" id="phone" mb={3} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Label htmlFor="altPhone">Alternate Phone Number</Label>
          <Input name="altPhone" id="altPhone" mb={3} />
        </Box>
      </Box>

      <Label htmlFor="address">Delivery Address</Label>
      <Input name="address" id="address" mb={3} />

      <Label htmlFor="additionalAddress">Additional Address</Label>
      <Input name="additionalAddress" id="additionalAddress" mb={3} />

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Label htmlFor="region">Region</Label>
          <Input name="region" id="region" mb={3} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Label htmlFor="city">City</Label>
          <Input name="city" id="city" mb={3} />
        </Box>
      </Box>
      <Box>
        <Button sx={{ backgroundColor: "#192A41" }} type="submit">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddressForm;
