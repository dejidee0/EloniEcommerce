/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "theme-ui";
import { IonIcon } from "@ionic/react";
import { star} from "ionicons/icons";
// import hat from "../../assets/hat.jpg";
// import jacket from "../../assets/jacket.jpg";
// import TShirt from "../../assets/T-Shirt.jpg";
import shoePair from "../../assets/shoePair.jpg";
import { theme } from "@/Theme/theme";
import { Link } from "react-router-dom";

const bestSellers = [
  {
    id: 1,
    showcaseImg: shoePair,
    showcaseTitle: 'Men Sport shoes',
    stars: 5,
    del: '6.00',
    price: '4.00'
  },
  {
    id: 2,
    showcaseImg: shoePair,
    showcaseTitle: 'Men Sport shoes',
    stars: 5,
    del: '6.00',
    price: '4.00'
  },
  {
    id: 3,
    showcaseImg: shoePair,
    showcaseTitle: 'Men Sport shoes',
    stars: 5,
    del: '6.00',
    price: '4.00'
  },
  {
    id: 4,
    showcaseImg: shoePair,
    showcaseTitle: 'Men Sport shoes',
    stars: 5,
    del: '6.00',
    price: '4.00'
  },
]

const BestSellers: React.FC = () => {
  return (
    <Box className="productShowCase">
      <h3 sx={{ ...theme.productContainer.showcaseHeading }}>Best Sellers</h3>
      <Box>
        <Box>
          {
            bestSellers.map(el => (
              <Box sx={{ ...theme.productContainer.showCase }}>
                <Link to={''}>
                  <img src={el.showcaseImg} height={75} width={75} sx={{ ...theme.productContainer.showcaseImg }} />
                </Link>

                <Box sx={{ ...theme.productContainer.showcaseContent }}>
                  <Link to={''}>
                    <h4 sx={{ ...theme.productContainer.showcaseTitle }}>{el.showcaseTitle}</h4>
                  </Link>
                  <Box sx={{ ...theme.productContainer.showcaseRating }}>
                    {
                      Array.from({ length: el.stars }, (_, index) => (
                        <IonIcon
                          key={index}
                          icon={star}
                          role="img"
                          aria-label="logo star"
                          sx={{
                            color: "rgb(255, 145, 0)",

                            fontSize: 12.17,
                          }}
                        />
                      ))
                    }

                  </Box>
                  <Box sx={{ ...theme.productContainer.priceBox }}>
                    <del sx={{ ...theme.productContainer.del }}>{el.del}</del>
                    <p sx={{ ...theme.productContainer.price }}>
                      {el.price}
                    </p>
                  </Box>
                </Box>
              </Box>
            ))
          }
        </Box>
      </Box>
    </Box>
  );
};

export default BestSellers;
