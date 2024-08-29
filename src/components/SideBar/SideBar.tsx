
/** @jsxImportSource theme-ui */
import React from 'react';
import { Box,} from 'theme-ui';
import { IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './css/style.css';
import BestSellers from './BestSellers';
import Dress from '../../assets/dress.png'
import bag from '../../assets/bag.png'
import glasses from '../../assets/glasses.png'
import cosmetics from '../../assets/cosmetics.png'
import perfume from '../../assets/perfume.png'
import jewerly from '../../assets/jewelry.png'
import shoe from '../../assets/shoes.png'

const SideBar: React.FC = () => {
  return (
    <Box sx={{
      marginLeft: "30px",
      display: ["none","flex"],
      flexDirection: 'column',
      width: '400px',
    }}>
    <Box className="sidebar-category" sx={{
      marginTop: 3,
      marginLeft: '65px',
    }}>
        
    <h2 className="sidebar-title">Category</h2>
       
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
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '110px',
            }}>
              <img src={Dress} height={25} width={25}/>
            <h3 className="sidebar-title">Clothes</h3>
            </Box>
            <IonIcon icon={add} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            marginTop: 3,
            fontSize: 20,
          }}/>
          
        </Box>
        <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '400px',
            padding: 2,
            marginTop: -4,
            }}>
            <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '110px',
            }}>
              <img src={shoe} height={25} width={25}/>
            <h3 className="sidebar-title">Footwear</h3>
            </Box>
            <IonIcon icon={add} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            marginTop: 3,
            fontSize: 20,
          }}/>
          
        </Box>
        
        <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '400px',
            padding: 2,
            marginTop: -4,
            }}>
            <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '110px',
            }}>
              <img src={jewerly} height={25} width={25}/>
            <h3 className="sidebar-title">Jewelry</h3>
            </Box>
            <IonIcon icon={add} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            marginTop: 3,
            fontSize: 20,
          }}/>
          
        </Box>
        <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '400px',
            padding: 2,
            marginTop: -4,
            }}>
            <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '110px',
            }}>
              <img src={perfume} height={25} width={25}/>
            <h3 className="sidebar-title">Perfume</h3>
            </Box>
            <IonIcon icon={add} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            marginTop: 3,
            fontSize: 20,
          }}/>
          
        </Box> 
        <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '400px',
            padding: 2,
            marginTop: -4,
            }}>
            <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '110px',
            }}>
              <img src={cosmetics} height={25} width={25}/>
            <h3 className="sidebar-title">Cosmetics</h3>
            </Box>
            <IonIcon icon={add} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            marginTop: 3,
            fontSize: 20,
          }}/>
          
        </Box>           
        <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '400px',
            padding: 2,
            marginTop: -4,
            }}>
            <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '110px',
            }}>
              <img src={glasses} height={25} width={25}/>
            <h3 className="sidebar-title">Glasses</h3>
            </Box>
            <IonIcon icon={add} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            marginTop: 3,
            fontSize: 20,
          }}/>
          
        </Box>
        <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '400px',
            padding: 2,
            marginTop: -4,
            }}>
            <Box className="sidebar-top" sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '110px',
            }}>
              <img src={bag} height={25} width={25}/>
            <h3 className="sidebar-title">Bags</h3>
            </Box>
            <IonIcon icon={add} role="img" aria-label="logo facebook" sx={{
            color: '#000',
            padding: '1',
            marginTop: 3,
            fontSize: 20,
          }}/>
          
        </Box>     
        
    </Box>
    <BestSellers/>
    </Box>
    
    
  )
}

export default SideBar;
