/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
import seller_bg_image from "../../../assets/signup-background-image.svg";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import country from "./countryList.json";
import { updateCountry } from "../../../store/formSlice";

function SellerSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Select your Country");
  const [sellerCountry, setSellerCountry] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(sellerCountry !== "Select your Country");
  }, [sellerCountry]);

  const handleNext = (e: any) => {
    e.preventDefault()
    console.log(sellerCountry);
    
    if (sellerCountry !== "Select your Country") {
      dispatch(updateCountry(sellerCountry));
      console.log(sellerCountry);
    
    }
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
      <div>
        <img src={seller_bg_image} alt="seller bg image" />
      </div>
      <div sx={{ marginTop: "1rem" }}>
        <form sx={{ width: "28rem", textAlign: "center" }}>
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
              Sell on Eloni
            </h1>
            <h5
              sx={{
                fontSize: "12px",
                color: "#0009",
                fontWeight: 400,
              }}
            >
              Choose the country of your shop
            </h5>
          </div>
          <div
            sx={{
              background: "#fff",
              padding: "34px 24.9px",
              borderRadius: "8px",
              height: "230px",
              width: "100%",
              position: "relative",
            }}
          >
            <div
              sx={{
                width: "100%",
                textAlign: "left",
                padding: "12px 20px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                cursor: "pointer",
                marginBottom: "30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: 400,
                fontSize: "14px",
              }}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {selectedCountry}
              {!isOpen ? (
                <AiOutlineCaretDown sx={{ height: "2rem" }} />
              ) : (
                <AiOutlineCaretUp sx={{ height: "2rem" }} />
              )}
            </div>

            {isOpen && (
              <div
                sx={{
                  position: "absolute",
                  top: 100,
                  display: "flex",
                  flexDirection: "column",
                  gap: "",
                  background: "#fff",
                  width: "89%",
                  borderRadius: "8px",
                  textAlign: "left",
                  padding: 3,
                  border: "1px solid #f5f5f5",
                }}
              >
                {country.map((item) => (
                  <div
                    onClick={() => {
                      setSelectedCountry(item.country);
                      setSellerCountry(item.country);
                      setIsOpen(false);
                    }}
                    key={item.index}
                    sx={{
                      cursor: "pointer",
                      padding: 3,
                      "&:hover": {
                        background: "#f5f5f5",
                        transition: "0.3s",
                        fontWeight: 400,
                      },
                    }}
                  >
                    {item.country}
                  </div>
                ))}
              </div>
            )}
            <button
              sx={{
                width: "100%",
                padding: "15px 20px",
                marginBottom: "10px",
                cursor: "pointer", background: "#f68B1e", border: "none", color: "#fff",
              }}
              onClick={handleNext}
              disabled={isButtonDisabled}
            >
              NEXT
            </button>
            <div
              sx={{
                textAlign: "left",
                fontSize: "12px",
                color: "#0009",
                fontWeight: 400,
              }}
            >
              <p>Only for sellers registered & selling in their own country</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellerSignUp;
