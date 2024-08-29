
/** @jsxImportSource theme-ui */
import React from 'react';
import { Box } from 'theme-ui';
import { IonIcon } from '@ionic/react';
import { star, starHalf } from 'ionicons/icons';
import './css/style.css';
import hat from '../../assets/hat.jpg'
import jacket from '../../assets/jacket.jpg'
import TShirt from '../../assets/T-Shirt.jpg'
import shoePair from '../../assets/shoePair.jpg'

const BestSellers: React.FC = () => {
  return (
    <Box sx={{
      marginLeft: "30px",
      display: ["none", "flex"]
    }}>
      <Box className="sidebar-category2" sx={{
        marginTop: 3,
        marginLeft: '30px',
      }}>

        <h2 className="sidebar-title">Best Sellers</h2>

        <Box className="sidebar-top" sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '400px',
          padding: 2,
          marginTop: -2,
        }}>
          <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '400px',
          }}>
            <img src={shoePair} height={100} width={100} />
            <Box sx={{ marginLeft: '10px', }}>
              <h3 className="bestseller-title">Men Sport Shoes</h3>
              <Box style={{
                padding: 0,
                marginTop: -9,
              }}>
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} />
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={starHalf} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',
                  fontSize: 20,
                }} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: "100px",
              }}>
                <del sx={{
                  marginTop: 2,
                  paddingRight: "10px",
                  color: "rgb(167, 167, 167);"
                }}>$6.00</del>
                <h3 className="sidebar-title-price" sx={{
                  marginTop: "7px",
                  paddingRight: "10px",

                }} >$4.00</h3>
              </Box>
            </Box>

          </Box>


        </Box>

        <Box className="sidebar-top" sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '400px',
          padding: 2,
          marginTop: -2,
        }}>
          <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '400px',
          }}>
            <img src={jacket} height={100} width={100} />
            <Box sx={{ marginLeft: '10px', }}>
              <h3 className="bestseller-title">Men's Hoodies T-shirt</h3>
              <Box style={{
                padding: 0,
                marginTop: -9,
              }}>
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} />
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',
                  fontSize: 20,
                }} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: "100px",
              }}>
                <del sx={{
                  marginTop: 2,
                  paddingRight: "10px",
                  color: "rgb(167, 167, 167);"
                }}>$7.00</del>
                <h3 className="sidebar-title-price" sx={{
                  marginTop: "7px",
                  paddingRight: "10px",

                }} >$4.00</h3>
              </Box>
            </Box>

          </Box>


        </Box>

        <Box className="sidebar-top" sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '400px',
          padding: 2,
          marginTop: -2,
        }}>
          <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '400px',
          }}>
            <img src={TShirt} height={100} width={100} />
            <Box sx={{ marginLeft: '10px', }}>
              <h3 className="bestseller-title">Men's Hoodies T-SHirt</h3>
              <Box style={{
                padding: 0,
                marginTop: -9,
              }}>
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} />
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={starHalf} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',
                  fontSize: 20,
                }} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: "100px",
              }}>
                <del sx={{
                  marginTop: 2,
                  paddingRight: "10px",
                  color: "rgb(167, 167, 167);"
                }}>$4.00</del>
                <h3 className="sidebar-title-price" sx={{
                  marginTop: "7px",
                  paddingRight: "10px",

                }} >$7.00</h3>
              </Box>
            </Box>

          </Box>


        </Box>

        <Box className="sidebar-top" sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '400px',
          padding: 2,
          marginTop: -2,
        }}>
          <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '400px',
          }}>
            <img src={hat} height={100} width={100} />
            <Box sx={{ marginLeft: '10px', }}>
              <h3 className="bestseller-title">Woolen Hat For Men</h3>
              <Box style={{
                padding: 0,
                marginTop: -9,
              }}>
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} />
                <IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={star} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',


                  fontSize: 20,
                }} /><IonIcon icon={starHalf} role="img" aria-label="logo star" sx={{
                  color: 'rgb(255, 145, 0)',
                  fontSize: 20,
                }} />
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: "100px",
              }}>
                <del sx={{
                  marginTop: 2,
                  paddingRight: "10px",
                  color: "rgb(167, 167, 167);"
                }}>$18.00</del>
                <h3 className="sidebar-title-price" sx={{
                  marginTop: "7px",
                  paddingRight: "10px",

                }} >$11.00</h3>
              </Box>
            </Box>

          </Box>


        </Box>

      </Box>
    </Box>


  )
}

export default BestSellers;
