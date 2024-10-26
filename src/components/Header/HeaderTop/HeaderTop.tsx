import { Box } from 'theme-ui';
import SocialLinks from '@/components/SocialLinks/SocialLinks'
import { theme } from '@/Theme/theme';
import { Helmet } from 'react-helmet-async';
import HeaderTopActions from '@/components/Header/HeaderTopActions/HeaderTopActions';

const HeaderTop = () => {

  return (
    <>
    {/* Helmet for SEO optimization */}
<Helmet>
    <meta name="description" content="Welcome to EloniEcommerce, your trusted online store. Explore our wide range of top-quality products with fast shipping and exceptional customer service." />
    <meta name="keywords" content="EloniEcommerce, online store, ecommerce, best deals, quality products, top brands, fast shipping, customer service" />
    <meta property="og:title" content="Welcome to EloniEcommerce | Shop the Best Deals Online" />
    <meta property="og:description" content="Experience seamless shopping at EloniEcommerce. Shop top-quality products across categories with fast delivery and great customer support." />
</Helmet>

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
    </>
  )
}

export default HeaderTop