/** @jsxImportSource theme-ui */

import { theme } from "@/Theme/theme";
import { Link } from "react-router-dom";
import { Box } from "theme-ui";

interface ProductProps {
  img: string;
  productName: string;
  productCategory: string;
  productPrice: string;
  discount?: string; // Optional
}

const Product: React.FC<ProductProps> = ({ img, productName, productCategory, productPrice, discount }) => {
  return (
    <Box
      className="showCase"
      sx={{
        ...theme.productContainer.showCase
      }}
    >
      <Link
        to={'#'}
      >
        <img src={img} alt="product" sx={{ ...theme.productContainer.showcaseImg }} width={'70'} />
      </Link>

      <Box className="showcaseContent" sx={{ ...theme.productContainer.productMinimal.showcaseContent }}>
        <Link to={''}>
          <h4 className="showcaseTitle" sx={{ ...theme.productContainer.productMinimal.showcaseTitle }}>{productName}</h4>
        </Link>
        <Link to={''} className="showCaseCategory" sx={{ ...theme.productContainer.showCaseCategory }}>
          {productCategory}
        </Link>

        <Box className="priceBox" sx={{ ...theme.productContainer.productMinimal.priceBox }}>
          <p className="price" sx={{ ...theme.productContainer.productMinimal.price }}>
            {productPrice}
          </p>
          {discount && <del sx={{ ...theme.productContainer.del }}>{discount}</del>}
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
