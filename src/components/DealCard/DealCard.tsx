/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Text, Image, Button } from "theme-ui";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/store/cartSlice";
import { theme } from "@/Theme/theme";
import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";


const DealCard: React.FC<{ product: any; key: any }> = ({ product }) => {
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.productName,
      price: product.price,
      quantity: 1,
      image: product.productImages[0],
    };

    dispatch(addItemToCart(item));
    console.log("Added successfully");

    naviagate("/cart");
  };
  return (
    <Box
      className="showCaseWrapper"
      sx={{ ...theme.productContainer.productFeatured.showCaseWrapper }}
    >
      <Box
        className="showCaseContainer"
        sx={{ ...theme.productContainer.productFeatured.showCaseContainer }}
      >
        <Box
          className="showCase"
          sx={{ ...theme.productContainer.productFeatured.showcase }}
        >
          <Box
            className="showCaseBanner"
            sx={{ ...theme.productContainer.productFeatured.showCaseBanner }}
          >
            <Image
              className="showCaseImage"
              sx={{ ...theme.productContainer.productFeatured.showCaseImage }}
              src={product?.productImages[0]}
              alt="product image"
            />
          </Box>

          <Box
            className="showCaseContent"
            sx={{ ...theme.productContainer.productFeatured.showCaseContent }}
          >
            <Box
              className="showCaseRating"
              sx={{ ...theme.productContainer.productFeatured.showCaseRating }}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <IonIcon
                  key={index}
                  icon={star}
                  role="img"
                  aria-label="logo star"
                />
              ))}

            </Box>

            <Link to={''}>
              <h4
                className="showcaseTitle"
                sx={{ ...theme.productContainer.productFeatured.showcaseTitle }}
              >{product?.productName}</h4>
            </Link>

            <p
              className="showcaseDesc"
              sx={{ ...theme.productContainer.productFeatured.showcaseDesc }}
            >
              {product?.productDescription}
            </p>

            <Box
              className="priceBox"
              sx={{ ...theme.productContainer.productFeatured.priceBox }}
            >
              <p
                className="price"
                sx={{ ...theme.productContainer.productFeatured.price }}
              >{product?.price}</p>
              <del
                className="del"
                sx={{ ...theme.productContainer.productFeatured.del }}
              >{product?.discount}</del>
            </Box>

            <Button
              className="addCartBtn"
              sx={{ ...theme.productContainer.productFeatured.addCartBtn }}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </Button>

            <Box
              className="showCaseStatus"
              sx={{ ...theme.productContainer.productFeatured.showCaseStatus }}
            >
              <Box
                className="wrapper"
                sx={{ ...theme.productContainer.productFeatured.wrapper }}
              >
                <Text>ALREADY SOLD: <b>150</b></Text>
                <Text>AVAILABLE: <b>200</b></Text>
              </Box>

              {/* Progress Bar for stock details */}
              <Box
                className="showcaseStatusBar"
                sx={{ ...theme.productContainer.productFeatured.showcaseStatusBar }}
              ></Box>
            </Box>

            <Box className="countDownBox">
              <p
                className="countdownDesc"
                sx={{ ...theme.productContainer.productFeatured.countDownBox.countdownDesc }}
              >
                Hurry Up! Offer ends in:
              </p>

              <Box
                className="countDown"
                sx={{ ...theme.productContainer.productFeatured.countDownBox.countDown }}
              >
                <Box
                  className="countdownContent"
                  sx={{ ...theme.productContainer.productFeatured.countDownBox.countdownContent }}
                >
                  <p>EXPIRED</p>
                  <p
                    className="displayText"
                    sx={{ ...theme.productContainer.productFeatured.countDownBox.displayText }}
                  >Days</p>
                </Box>
                <Box
                  className="countdownContent"
                  sx={{ ...theme.productContainer.productFeatured.countDownBox.countdownContent }}
                >
                  <p>EXPIRED</p>
                  <p
                    className="displayText"
                    sx={{ ...theme.productContainer.productFeatured.countDownBox.displayText }}
                  >Days</p>
                </Box>
                <Box
                  className="countdownContent"
                  sx={{ ...theme.productContainer.productFeatured.countDownBox.countdownContent }}
                >
                  <p>EXPIRED</p>
                  <p
                    className="displayText"
                    sx={{ ...theme.productContainer.productFeatured.countDownBox.displayText }}
                  >Days</p>
                </Box>
                <Box
                  className="countdownContent"
                  sx={{ ...theme.productContainer.productFeatured.countDownBox.countdownContent }}
                >
                  <p>EXPIRED</p>
                  <p
                    className="displayText"
                    sx={{ ...theme.productContainer.productFeatured.countDownBox.displayText }}
                  >Days</p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DealCard;
