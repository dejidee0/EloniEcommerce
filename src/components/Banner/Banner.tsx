/** @jsxImportSource theme-ui */


import elon_banner from '../../assets/elon_banner.jpg'
import elon_banner_1 from '../../assets/elon_banner_1.jpg'
import elon_banner_2 from '../../assets/elon_banner2.jpg'
import elon_banner_3 from '../../assets/elon_banner_3.jpg'
import mens_banner from '../../assets/mens-banner.jpg';

import dress from '../../assets/dress.png';
import coat from '../../assets/coat.png';
import shorts from '../../assets/shorts.png';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,

  }
  return (
    <section sx={{
      fontFamily: 'heading',
      color: 'primary',
      position: 'relative',
      marginTop: 2
    }}>
      <ul sx={{
        display: 'flex', listStyleType: 'none', justifyContent: 'center', gap: 4, fontSize: 2, fontWeight: 600, position: 'relative', marginBottom: 2,
        '@media screen and (max-width: 768px)': {
          display: 'none'
        },
      }}>
        <li sx={{
          cursor: 'pointer',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}>HOME</li>
        <li sx={{
          cursor: 'pointer', position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',

            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
          '&:hover + .categories-modal': {
           visibility: 'visible',
            opacity: 1,
            transition: 'opacity 0.3s ease',

          }
        }}>CATEGORIES</li>
        <div sx={{
          paddingLeft: 5, paddingRight: 5, position: 'absolute', top: '25px', left: 0, zIndex: 2, background: '#fff', opacity: 0,  display: 'flex', visibility: 'hidden',
          
          '&:hover': { display: 'flex', opacity: 1 }
          
          
        }} className='categories-modal'>
          <div sx={{
            width: '100%', borderRadius: '15px', boxShadow: '0 0 15px #ddd', display: 'flex', justifyContent: 'space-evenly', padding: 2, '&:hover': { display: 'flex', opacity: 1 }

          }}>

            <div sx={{
              flexBasis: '23%',
              paddingTop: 3, margin: 0

            }}>
              <h6 sx={{
                width: '100%', margin: 0, paddingBottom: 1,
                position: 'relative', cursor: 'pointer',
                fontSize: '20px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '35px',
                  left: 0,
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#ddd',
                },
              }}>Men's</h6>
              <ul sx={{
                listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: 3, width: '100%', padding: 0, marginTop: 3,
              }}>
                {['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'].map((item) => (
                  <li key={item} sx={{
                    cursor: 'pointer', '&:hover': {
                      color: 'secondary',
                    },
                  }}>{item}</li>
                ))}
              </ul>
              <div sx={{
                width: '100%',
                marginTop: '30px', marginBottom: '10px'
              }}>
                <img src={mens_banner} alt="mens-banner" sx={{
                  borderRadius: '5px', width: '100%', cursor: 'pointer'
                }} />
              </div>
            </div>
            <div sx={{
              flexBasis: '23%',
              paddingTop: 3, margin: 0

            }}>
              <h6 sx={{
                width: '100%', margin: 0, paddingBottom: 1,
                position: 'relative',
                fontSize: '20px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '35px',
                  left: 0,
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#ddd',


                },
              }}>Women's</h6>
              <ul sx={{
                listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: 3, width: '100%', padding: 0, marginTop: 3,
              }}>
                {['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'].map((item) => (
                  <li key={item} sx={{
                    cursor: 'pointer', '&:hover': {
                      color: 'secondary',
                    },
                  }}>{item}</li>
                ))}
              </ul>
              <div sx={{
                width: '100%',
                marginTop: '30px', marginBottom: '10px'
              }}>
                <img src={mens_banner} alt="mens-banner" sx={{
                  borderRadius: '5px', width: '100%', cursor: 'pointer'
                }} />
              </div>
            </div>
            <div sx={{
              flexBasis: '23%',
              paddingTop: 3, margin: 0

            }}>
              <h6 sx={{
                width: '100%', margin: 0, paddingBottom: 1,
                position: 'relative',
                fontSize: '20px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '35px',
                  left: 0,
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#ddd',


                },
              }}>Men's</h6>
              <ul sx={{
                listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: 3, width: '100%', padding: 0, marginTop: 3,
              }}>
                {['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'].map((item) => (
                  <li key={item} sx={{
                    cursor: 'pointer', '&:hover': {
                      color: 'secondary',
                    },
                  }}>{item}</li>
                ))}
              </ul>
              <div sx={{
                width: '100%',
                marginTop: '30px', marginBottom: '10px'
              }}>
                <img src={mens_banner} alt="mens-banner" sx={{
                  borderRadius: '5px', width: '100%', cursor: 'pointer'
                }} />
              </div>
            </div>
            <div sx={{
              flexBasis: '23%',
              paddingTop: 3, margin: 0

            }}>
              <h6 sx={{
                width: '100%', margin: 0, paddingBottom: 1,
                position: 'relative',
                fontSize: '20px',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '35px',
                  left: 0,
                  width: '100%',
                  height: '1px',
                  backgroundColor: '#ddd',


                },
                '&:hover': {
                  color: 'secondary',
                },
              }}>Men's</h6>
              <ul sx={{
                listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: 3, width: '100%', padding: 0, marginTop: 3,
              }}>
                {['Formal', 'Casual', 'Sports', 'Jacket', 'Sunglasses'].map((item) => (
                  <li key={item} sx={{
                    cursor: 'pointer', '&:hover': {
                      color: 'secondary',
                    },
                  }}>{item}</li>
                ))}
              </ul>
              <div sx={{
                width: '100%',
                marginTop: '30px', marginBottom: '10px'
              }}>
                <img src={mens_banner} alt="mens-banner" sx={{
                  borderRadius: '5px', width: '100%', cursor: 'pointer'
                }} />
              </div>
            </div>

          </div>
        </div>
        <li sx={{
          cursor: 'pointer', position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
          '&:hover > .men-modal': {
            visibility: 'visible',
            opacity: 1,
            transition: 'width 0.3s ease',
          },
        }}>MEN'S
          <ul className='men-modal' sx={{
            position: 'absolute',
            top: '25px', background: '#fff', zIndex: 1, fontWeight: 400,
            padding: 4, opacity: 0,
            color: 'primary', flexDirection: 'column', gap: 3, border: '2px solid #ebedef', width: '200px', listStyleType: 'none', borderRadius: '10px', display: 'flex', visibility: 'hidden'

          }}>
            {['Leather Jackets', 'Shorts & Jeans', 'Boots', 'T-Shirt', 'Shoes'].map((item) => (
              <li key={item} sx={{ cursor: 'pointer' }}>{item}</li>
            ))}
          </ul>
        </li>
        <li sx={{
          cursor: 'pointer', position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
          '&:hover > .women-modal': {
            visibility: 'visible',
            opacity: 1,
            transition: 'width 0.3s ease',
          },
        }}>WOMEN'S
          <ul className='women-modal' sx={{
            position: 'absolute',
            top: '25px', background: '#fff', zIndex: 1, fontWeight: 400,
            padding: 4, opacity: 0,
            color: 'primary', flexDirection: 'column', gap: 3, border: '2px solid #ebedef', width: '200px', listStyleType: 'none', borderRadius: '10px', display: 'flex', visibility: 'hidden'

          }}>
            {['Stilletos', 'Scarf', 'Earrings', 'Dress'].map((item) => (
              <li key={item} sx={{ cursor: 'pointer' }}>{item}</li>
            ))}
          </ul>
        </li>
        <li sx={{
          cursor: 'pointer', position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
          '&:hover > .perfume-modal': {
            visibility: 'visible',
            opacity: 1,
            transition: 'width 0.3s ease',
          },
        }}>PERFUME
          <ul className='perfume-modal' sx={{
            position: 'absolute',
            top: '25px', background: '#fff', zIndex: 1, fontWeight: 400,
            padding: 4, opacity: 0,
            color: 'primary', flexDirection: 'column', gap: 3, border: '2px solid #ebedef', width: '200px', listStyleType: 'none', borderRadius: '10px', display: 'flex', visibility: 'hidden'

          }}>
            {['Floral Elegance', 'Mystic Amber', 'Ocean Breeze', 'Velvet Rose'].map((item) => (
              <li key={item} sx={{ cursor: 'pointer' }}>{item}</li>
            ))}
          </ul>
        </li>
        <li sx={{
          cursor: 'pointer', position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
          '&:hover > .jewelry-modal': {
            visibility: 'visible',
            opacity: 1,
            transition: 'width 0.3s ease',
          },
        }}>
          JEWELRY
          <ul className='jewelry-modal' sx={{
            position: 'absolute',
            top: '25px', background: '#fff', zIndex: 1, fontWeight: 400,
            padding: 4, opacity: 0,
            color: 'primary', flexDirection: 'column', gap: 3, border: '2px solid #ebedef', width: '200px', listStyleType: 'none', borderRadius: '10px', display: 'flex', visibility: 'hidden'

          }}>
            {['Necklace', 'Gold Bangle', 'Diamond Ring', 'Bracelets'].map((item) => (
              <li key={item} sx={{ cursor: 'pointer' }}>{item}</li>
            ))}
          </ul>
        </li>
        <li sx={{
          cursor: 'pointer', position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}>BLOG</li>
        <li sx={{
          cursor: 'pointer', position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '35px',
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: 'secondary',
            transition: 'width 0.3s ease',
          },
          '&:hover': {
            color: 'secondary',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}>OFFERS</li>
      </ul>

      <div className="slider-container">
        <Slider {...settings}>

          <div sx={{
            width: '50%', margin: 'auto',
            '@media screen and (max-width: 768px)': {

            },
          }}>
            <img sx={{
              width: '90%', borderRadius: '15px',
              height: '400px',

              objectFit: 'cover', objectPosition: 'bottom', margin: 'auto',
              '@media screen and (max-width: 768px)': {
                maxHeight: '300px',
                marginTop: 2
              },
              '@media screen and (max-width: 425px)': {
                maxHeight: '200px',
                marginTop: 2
              },

            }} src={elon_banner_2} alt="banner-img" />
          </div>
          <div sx={{
            width: '50%', margin: 'auto',
            '@media screen and (max-width: 768px)': {

            },
          }}>
            <img sx={{
              width: '90%', borderRadius: '15px',
              height: '400px',

              objectFit: 'cover', objectPosition: 'bottom', margin: 'auto',
              '@media screen and (max-width: 768px)': {
                maxHeight: '300px',
                marginTop: 2
              },
              '@media screen and (max-width: 425px)': {
                maxHeight: '200px',
                marginTop: 2
              },

            }} src={elon_banner_1} alt="banner-img" />
          </div>
          <div sx={{
            width: '50%', margin: 'auto',
            '@media screen and (max-width: 768px)': {

            },
          }}>
            <img sx={{
              width: '90%', borderRadius: '15px',
              height: '400px',

              objectFit: 'cover', objectPosition: 'bottom', margin: 'auto',
              '@media screen and (max-width: 768px)': {
                maxHeight: '300px',
                marginTop: 2
              },
              '@media screen and (max-width: 425px)': {
                maxHeight: '200px',
                marginTop: 2
              },

            }} src={elon_banner_3} alt="banner-img" />
          </div>
          <div sx={{
            width: '50%', margin: 'auto',
            '@media screen and (max-width: 768px)': {

            },
          }}>
            <img sx={{
              width: '90%', borderRadius: '15px',
              height: '400px',

              objectFit: 'cover', objectPosition: 'bottom', margin: 'auto',
              '@media screen and (max-width: 768px)': {
                maxHeight: '300px',
                marginTop: 2
              },
              '@media screen and (max-width: 425px)': {
                maxHeight: '200px',
                marginTop: 2
              },

            }} src={elon_banner} alt="banner-img" />
          </div>


        </Slider>
      </div>

      <div sx={{
        width: '90%', margin: 'auto', marginTop: 4, display: 'flex', gap: '28px', overflowX: 'auto', 
        '@media screen and (max-width: 1024px)': {
          gap: 2,
        },
        '@media screen and (max-width: 768px)': {
          gap: 4,
        },
        marginBottom: 30, paddingBottom: '10px'
      }}>

        <div sx={{
          border: '1px solid #ddd',

          paddingTop: 3, paddingLeft: 3, paddingBottom: 1, paddingRight: 3,

          borderRadius: '10px',

          minWidth: '300px',

          '@media screen and (max-width: 768px)': {
            minWidth: '46%'
          },
          '@media screen and (max-width: 425px)': {
            width: '100%',

          },

          display: 'flex', justifyContent: 'space-between'
        }}>
          <div sx={{ display: 'flex', gap: 2 }}>
            <div sx={{
              width: '60px', height: '60px', background: '#ddd', borderRadius: '10px', border: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}>
              <img src={dress} alt="" sx={{ width: '80%', }} />
            </div>
            <div sx={{ fontSize: '14px', boxSizing: 'border-box', padding: 0, }}>
              <p sx={{ fontWeight: 'bold', marginTop: 1 }}>DRESS</p>
              <p sx={{ color: 'secondary', cursor: 'pointer' }}>Show All</p>
            </div>
          </div>
          <div sx={{ fontSize: '13px' }} >(600)</div>
        </div>

        <div sx={{
          border: '1px solid #ddd',

          paddingTop: 3, paddingLeft: 3, paddingBottom: 1, paddingRight: 3,

          borderRadius: '10px',

          minWidth: '300px',

          '@media screen and (max-width: 768px)': {
            minWidth: '46%'
          },
          '@media screen and (max-width: 425px)': {
            width: '100%',
            display: 'none'
          },

          display: 'flex', justifyContent: 'space-between'
        }}>
          <div sx={{ display: 'flex', gap: 2 }}>
            <div sx={{
              width: '60px', height: '60px', background: '#ddd', borderRadius: '10px', border: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}>
              <img src={coat} alt="" sx={{ width: '80%', }} />
            </div>
            <div sx={{ fontSize: '14px', boxSizing: 'border-box', padding: 0, }}>
              <p sx={{ fontWeight: 'bold', marginTop: 1 }}>DRESS</p>
              <p sx={{ color: 'secondary', cursor: 'pointer' }}>Show All</p>
            </div>
          </div>
          <div sx={{ fontSize: '13px' }} >(600)</div>
        </div>


        <div sx={{
          border: '1px solid #ddd',

          paddingTop: 3, paddingLeft: 3, paddingBottom: 1, paddingRight: 3,

          borderRadius: '10px',

          minWidth: '300px',

          '@media screen and (max-width: 768px)': {
            minWidth: '46%'
          },
          '@media screen and (max-width: 425px)': {
            width: '100%',
            display: 'none'
          },

          display: 'flex', justifyContent: 'space-between'
        }}>
          <div sx={{ display: 'flex', gap: 2 }}>
            <div sx={{
              width: '60px', height: '60px', background: '#ddd', borderRadius: '10px', border: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}>
              <img src={shorts} alt="" sx={{ width: '80%', }} />
            </div>
            <div sx={{ fontSize: '14px', boxSizing: 'border-box', padding: 0, }}>
              <p sx={{ fontWeight: 'bold', marginTop: 1 }}>DRESS</p>
              <p sx={{ color: 'secondary', cursor: 'pointer' }}>Show All</p>
            </div>
          </div>
          <div sx={{ fontSize: '13px' }} >(600)</div>
        </div>


        <div sx={{
          border: '1px solid #ddd',

          paddingTop: 3, paddingLeft: 3, paddingBottom: 1, paddingRight: 3,

          borderRadius: '10px',

          minWidth: '300px',

          '@media screen and (max-width: 768px)': {
            minWidth: '46%'
          },
          '@media screen and (max-width: 425px)': {
            width: '100%',
            display: 'none'
          },

          display: 'flex', justifyContent: 'space-between'
        }}>
          <div sx={{ display: 'flex', gap: 2 }}>
            <div sx={{
              width: '60px', height: '60px', background: '#ddd', borderRadius: '10px', border: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}>
              <img src={shorts} alt="" sx={{ width: '80%', }} />
            </div>
            <div sx={{ fontSize: '14px', boxSizing: 'border-box', padding: 0, }}>
              <p sx={{ fontWeight: 'bold', marginTop: 1 }}>DRESS</p>
              <p sx={{ color: 'secondary', cursor: 'pointer' }}>Show All</p>
            </div>
          </div>
          <div sx={{ fontSize: '13px' }} >(600)</div>
        </div>
        <div sx={{
          border: '1px solid #ddd',

          paddingTop: 3, paddingLeft: 3, paddingBottom: 1, paddingRight: 3,

          borderRadius: '10px',

          minWidth: '300px',

          '@media screen and (max-width: 768px)': {
            minWidth: '46%'
          },
          '@media screen and (max-width: 425px)': {
            width: '100%',
            display: 'none'
          },

          display: 'flex', justifyContent: 'space-between'
        }}>
          <div sx={{ display: 'flex', gap: 2 }}>
            <div sx={{
              width: '60px', height: '60px', background: '#ddd', borderRadius: '10px', border: '1px solid #ddd', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}>
              <img src={shorts} alt="" sx={{ width: '80%', }} />
            </div>
            <div sx={{ fontSize: '14px', boxSizing: 'border-box', padding: 0, }}>
              <p sx={{ fontWeight: 'bold', marginTop: 1 }}>DRESS</p>
              <p sx={{ color: 'secondary', cursor: 'pointer' }}>Show All</p>
            </div>
          </div>
          <div sx={{ fontSize: '13px' }} >(600)</div>
        </div>

      </div>


    </section>
  )
}

export default Banner
