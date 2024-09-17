import { Box, Select } from 'theme-ui';
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import { theme } from '@/Theme/theme';

const HeaderTop = () => {

 return (
  <Box className="header-top" sx={{
   ...theme.containers.headerTop
 }}
 >
   <Box sx={{
     // width: '100vw',
     ...theme.containers.container,
   }}>
     <SocialLinks />
     <Box className="header-top-actions" sx={{
       display: 'flex',
       flexDirection: 'row',
       height: 33,
       // justifyContent: 'space-evenly',
       color: '#000',
       gap: 10
     }}>
       <Select defaultValue="currency">
         <option value="USD" label="$US dollar">USD</option>
         <option value="NGN" label="₦Naira">NGN</option>
         <option value="EUR" label="€Euro">EUR</option>
         <option value="JPY" label="¥Japanese Yen">JPY</option>
         <option value="GBP" label="£Pound sterling">GBP</option>
       </Select>
       <Select
         defaultValue="language"
         arrow={
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="currentcolor"
             style={{
               marginLeft: '-28px',
               alignSelf: 'center',
               pointerEvents: 'none',
             }}
           >
             <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
           </svg>
         }
       >
         <option value="en-US">English - EN</option>
         <option value="es-ES">español - ES</option>
         <option value="de-DE">Deutsch - DE</option>
         <option value="ar-AR">العربية- AR</option>
         <option value="zh-CN">中文 (简体) - ZH</option>
         <option value="fr">Français</option>
       </Select>
     </Box>
   </Box>
 </Box>
 )
}

export default HeaderTop