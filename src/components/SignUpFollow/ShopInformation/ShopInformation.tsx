/** @jsxImportSource theme-ui */
import seller_bg_image from "../../../assets/signup-background-image.svg";

import { useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
  AiOutlineShop,
} from "react-icons/ai";

function ShopInformation() {
  const [accountType, setAccountType] = useState("Business");

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
        <img src={seller_bg_image} alt="shop" width={"100%"} />
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
              Shop Information
            </h1>
            <h5
              sx={{
                fontSize: "12px",
                color: "#0009",
                fontWeight: 400,
                marginBottom: "1.5rem",
              }}
            >
              Setup your shop by completing the following details
            </h5>
          </div>

          <div sx={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <button
              type="button"
              onClick={() => setAccountType("Business")}
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                border: "1px solid",
                borderColor: accountType === "Business" ? "#ff7d00" : "#ccc",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor:
                  accountType === "Business" ? "#ff7d00" : "#fff",
                color: accountType === "Business" ? "#fff" : "#000",
                fontWeight: accountType === "Business" ? "bold" : "normal",
              }}
            >
              <AiOutlineShop sx={{ marginRight: "8px" }} />
              Business
            </button>
            <button
              type="button"
              onClick={() => setAccountType("Individual")}
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                border: "1px solid",
                borderColor: accountType === "Individual" ? "#ff7d00" : "#ccc",
                borderRadius: "4px",
                cursor: "pointer",
                backgroundColor:
                  accountType === "Individual" ? "#ff7d00" : "#fff",
                color: accountType === "Individual" ? "#fff" : "#000",
                fontWeight: accountType === "Individual" ? "bold" : "normal",
              }}
            >
              <AiOutlineUser sx={{ marginRight: "8px" }} />
              Individual
            </button>
          </div>

          <div
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            <input
              type="text"
              placeholder="Shop name *"
              sx={{
                width: "100%",
                padding: "15px 12px",
                outline: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
              }}
            />
            <AiOutlineInfoCircle sx={{ color: "#888", marginLeft: "10px" }} />
          </div>

          <div
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            <select
              sx={{
                width: "100%",
                padding: "15px 12px",
                outline: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                appearance: "none",
              }}
            >
              <option value="">Shipping Zone *</option>
              <option value="Zone 1">Zone 1</option>
              <option value="Zone 2">Zone 2</option>
            </select>
            <AiOutlineInfoCircle sx={{ color: "#888", marginLeft: "10px" }} />
          </div>

          <div
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            <select
              sx={{
                width: "100%",
                padding: "15px 12px",
                outline: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "16px",
                appearance: "none",
              }}
            >
              <option value="">How did you hear about Eloni? *</option>
              <option value="Social Media">Social Media</option>
              <option value="Friends/Family">Friends/Family</option>
            </select>
          </div>

          <div
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            <input type="checkbox" sx={{ marginRight: "8px" }} />
            <span sx={{ fontSize: "12px", color: "#0009" }}>
              I hereby confirm that I have read and I agree to the{" "}
              <a
                href="#"
                sx={{
                  color: "#ff7d00",
                  textDecoration: "underline",
                  display: "inline",
                }}
              >
                Eloni seller contract
              </a>
              ,{" "}
              <a
                href="#"
                sx={{
                  color: "#ff7d00",
                  textDecoration: "underline",
                  display: "inline",
                }}
              >
                policies and guidelines
              </a>{" "}
              and{" "}
              <a
                href="#"
                sx={{
                  color: "#ff7d00",
                  textDecoration: "underline",
                  display: "inline",
                }}
              >
                Privacy Notice
              </a>{" "}
              referenced therein.
            </span>
          </div>

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
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShopInformation;
