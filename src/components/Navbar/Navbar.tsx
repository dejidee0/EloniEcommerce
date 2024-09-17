/** @jsxImportSource theme-ui */
import mens_banner from '@/assets/mens-banner.jpg';
import { theme } from '@/Theme/theme';

const Navbar = () => {

 return (
  <ul sx={{
   ...theme.navigation
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
    paddingLeft: 5, paddingRight: 5, position: 'absolute', top: '25px', left: 0, zIndex: 2, background: '#fff', opacity: 0, display: 'flex', visibility: 'hidden',

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
 )
}

export default Navbar