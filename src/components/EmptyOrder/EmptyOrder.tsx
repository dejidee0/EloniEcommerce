/** @jsxImportSource theme-ui */
import { FaLuggageCart } from "react-icons/fa";
import { Box, Button, Text } from "theme-ui";

const EmptyOrder: React.FC = () => {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#fff",
            maxWidth: ["300px", "400px", "450px"],
            padding: ["15px", "20px", "30px"],
            marginLeft: [0, "auto"],
            marginRight: ["auto", "auto"],
            textAlign: "center",
            order: [0, 1],
          }}
        >
          <Box
            sx={{
              border: "1px",
              padding: ["5px", "10px"],
              borderRadius: "50px",
            }}
          >
            <FaLuggageCart
              sx={{
                width: ["30px", "40px", "50px"],
                height: ["30px", "40px", "50px"],
              }}
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Text
              sx={{
                fontWeight: "bold",
                fontSize: ["16px", "18px", "20px"],
              }}
            >
              You have palced no orders yet!
            </Text>
            <Text sx={{ fontSize: ["10px", "13px"] }}>
              All your orders will be saved here for you access thier state
              anytime.{" "}
            </Text>
          </Box>

          <Button
            sx={{
              backgroundColor: "#192A41",
              cursor: "pointer",
              borderRadius: "50px",
              padding: ["10px", "15px", "20px"],
              marginTop: "10px",
            }}
          >
            CONTINUE SHOPPING
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EmptyOrder;
