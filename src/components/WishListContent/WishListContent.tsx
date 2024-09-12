/** @jsxImportSource theme-ui */
import { FaHeartCrack } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text } from "theme-ui";


const EmptyCart: React.FC = () => {
  const navigate = useNavigate()
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
            <FaHeartCrack
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
              You haven't saved an item yet!
            </Text>
            <Text sx={{fontSize: ["10px", "13px"]}}>
              Found something you like? Tap on the heart shaped icon next to the
              item to add it to your wishlist! All your saved items will appear
              here.{" "}
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
            onClick={() => navigate('/')}
          >
            CONTINUE SHOPPING
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EmptyCart;
