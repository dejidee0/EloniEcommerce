import { GrCart } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "theme-ui";

const EmptyCart: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          mt: ["100px", "150px", "60px"],
          border: "1px solid ",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          backgroundColor: "background",
          maxWidth: ["300px", "400px", "450px"],
          margin: "auto auto",
          padding: ["15px", "20px", "30px"],
        }}
      >
        <Box
          sx={{
            border: "1px ",
            backgroundColor: "#f8f9f0",
            padding: ["5px", "10px"],
            borderRadius: "50px",
          }}
        >
          <GrCart size={["30px", "40px", "50px"]} />{" "}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Text
            sx={{
              fontWeight: "bold",
              fontSize: ["16px", "18px", "20px"],
            }}
          >
            Your cart is empty!
          </Text>
          <Text fontSize={["10px", "13px"]}>
            Browse our categories and discover our best deals
          </Text>
        </Box>
        <Button
          sx={{
            backgroundColor: "#192A41",
            cursor: "pointer",
            borderRadius: 50,
            padding: ["10px", "15px", "20px"],
            marginTop: ["10px", "15px", "20px"],
          }}
          onClick={() => navigate('/')}
        >
          START SHOPPING
        </Button>
      </Box>
    </>
  );
};

export default EmptyCart;
