import { Box } from 'theme-ui';
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import { theme } from '@/Theme/theme';
import HeaderTopActions from '@/components/Header/HeaderTopActions/HeaderTopActions';

const HeaderTop = () => {

  return (
    <Box className="headerTop" sx={{
      ...theme.headerTop
    }}

    >
      <Box 
        className='container' 
        sx={{ 
          ...theme.container,
          ...theme.headerTop.container }}>
        <SocialLinks />
        <HeaderTopActions />
      </Box>
    </Box>
  )
}

export default HeaderTop