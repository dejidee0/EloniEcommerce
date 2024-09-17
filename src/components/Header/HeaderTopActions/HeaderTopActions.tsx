import { theme } from "@/Theme/theme"
import { Box, Select } from "theme-ui"

const currencies = [
 { value: 'USD', label: '$US dollar' },
 { value: 'NGN', label: '₦Naira' },
 { value: 'EUR', label: '€Euro' },
 { value: 'JPY', label: '¥Japanese Yen' },
 { value: 'GBP', label: '£Pound sterling' },
];

const languages = [
 { value: 'en-US', label: 'English - EN' },
 { value: 'es-ES', label: 'español - ES' },
 { value: 'de-DE', label: 'Deutsch - DE' },
 { value: 'ar-AR', label: 'العربية- AR' },
 { value: 'zh-CN', label: '中文 (简体) - ZH' },
 { value: 'fr', label: 'Français' },
];

const HeaderTopActions = () => {

 return (
  <Box
   className='headerTopActions'
   sx={{
    ...theme.headerTop.headerTopActions
   }}>
   <Select
    className="select"
    sx={{ ...theme.headerTop.headerTopActions.select }}
    defaultValue="currency">
    {currencies.map((currency) => (
     <option key={currency.value} value={currency.value} label={currency.label}>
      {currency.value}
     </option>
    ))}
   </Select>

   <Select
    className="select"
    sx={{ ...theme.headerTop.headerTopActions.select }}
    defaultValue="language"
    // arrow={
    //  <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="currentcolor"
    //   style={{
    //    marginLeft: '-28px',
    //    alignSelf: 'center',
    //    pointerEvents: 'none',
    //   }}
    //  >
    //   <path d="M7.41 7.84l4.59 4.58 4.59-4.58 1.41 1.41-6 6-6-6z" />
    //  </svg>
    // }
   >
    {languages.map((lang) => (
     <option key={lang.value} value={lang.value}>
      {lang.label}
     </option>
    ))}
   </Select>

  </Box>
 )
}

export default HeaderTopActions