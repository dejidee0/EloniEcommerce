/** @jsxImportSource theme-ui */
import seller_bg_image from "../../../assets/signup-background-image.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function SellerPersonalInformation() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSave = () => {
    navigate("/seller/shop-info");
  };

  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        padding: "10rem",
        backgroundColor: "#f5f5f5",
        placeContent: "center",
        gap: "4rem",
        height: "100vh",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={seller_bg_image} alt="seller bg image" width={"100%"} />
      </div>
      <div sx={{ marginTop: "1rem" }}>
        <form
          sx={{
            width: "80%",
            textAlign: "center",
            margin: "0 auto",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div sx={{ marginBottom: "1.5rem" }}>
            <h1
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "0.15px",
                marginBottom: 2,
              }}
            >
              Personal Information
            </h1>
            <h5
              sx={{
                fontSize: "12px",
                color: "#0009",
                fontWeight: 400,
                marginBottom: "1.5rem",
              }}
            >
              Setup your password and provide your phone number
            </h5>
          </div>
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              textAlign: "left",
            }}
          >
            <div sx={{ position: "relative" }}>
              <input
                type="tel"
                placeholder="+233 Phone number *"
                sx={{
                  width: "100%",
                  padding: "15px 12px",
                  outline: "none",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
            </div>
            <div sx={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password *"
                sx={{
                  width: "100%",
                  padding: "15px 12px",
                  outline: "none",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              <AiOutlineEyeInvisible
                onClick={togglePasswordVisibility}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              />
            </div>
            <div sx={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password *"
                sx={{
                  width: "100%",
                  padding: "15px 12px",
                  outline: "none",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              />
              <AiOutlineEyeInvisible
                onClick={toggleConfirmPasswordVisibility}
                sx={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#888",
                }}
              />
            </div>
            <p
              sx={{
                fontSize: "12px",
                color: "#999",
                marginTop: "0.5rem",
                textAlign: "left",
              }}
            >
              Password should contain at least 8 characters containing a capital
              letter, a lower letter, a number and a special character
            </p>
            <button
              type="submit"
              sx={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#ff7d00",
                color: "#fff",
                fontWeight: "bold",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "1rem",
                "&:hover": {
                  backgroundColor: "#e56e00",
                },
              }}
              onClick={handleSave}
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellerPersonalInformation;
