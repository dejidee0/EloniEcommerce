/** @jsxImportSource theme-ui */
import { Box, Flex, Text, Link, Image, Grid } from 'theme-ui';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" sx={{ backgroundColor: '#192A41', padding: [4, 2], color: '#FFFFFF' }}>
      {/* Main Footer Sections */}
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'row'],
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Popular Categories */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold', color: '#FFFFFF' }}>
            Popular Categories
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Electronics & Gadgets', 'Fashion & Apparel', 'Home & Garden', 'Beauty & Personal Care', 'Sports & Outdoors'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: '#FFFFFF', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: '#6C757D' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Products */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold', color: '#FFFFFF' }}>
            Products
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Smart TV', 'Laptop Stand', 'Portable Charger', 'Skinny Jeans', 'Denim Jacket'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: '#FFFFFF', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: '#6C757D' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Our Company */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold', color: '#FFFFFF' }}>
            Our Company
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Return & Refund Policy', 'Shipping & Delivery Guidelines', 'Privacy & Data Protection', 'Payment & Billing Terms', 'Secure Payment'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: '#FFFFFF', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: '#6C757D' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Services */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold', color: '#FFFFFF' }}>
            Services
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['ShopEase', 'TrendCrate', 'FitFinder', 'QuickGift', 'FlashFinds'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: '#FFFFFF', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: '#6C757D' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Contact */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold', color: '#FFFFFF' }}>
            Contact
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Flex sx={{ alignItems: 'center', marginBottom: 2 }}>
                <FaMapMarkerAlt style={{ marginRight: '8px', color: '#FFFFFF' }} />
                <Text sx={{ color: '#FFFFFF' }}>Lagos, Nigeria</Text>
              </Flex>
            </li>
            <li>
              <Flex sx={{ alignItems: 'center', marginBottom: 2 }}>
                <FaPhoneAlt style={{ marginRight: '8px', color: '#FFFFFF' }} />
                <Text sx={{ color: '#FFFFFF' }}>+2348062907833</Text>
              </Flex>
            </li>
            <li>
              <Flex sx={{ alignItems: 'center' }}>
                <FaEnvelope style={{ marginRight: '8px', color: '#FFFFFF' }} />
                <Link href="mailto:Codemonktech1@Gmail.Com" sx={{ color: '#FFFFFF', textDecoration: 'none', '&:hover': { color: '#6C757D' } }}>
                  Codemonktech1@Gmail.Com
                </Link>
              </Flex>
            </li>
          </ul>
        </Box>

        {/* Make Money With Eloni */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] , marginRight: 1}}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold', color: '#FFFFFF' }}>
          Make Money With Eloni
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            
            <li>
              <Flex sx={{ alignItems: 'center', marginBottom: 2 }}>
                 <Link href="/become-a-seller" sx={{ color: '#FFFFFF', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: '#6C757D' } }}>
                  Become a Seller
                </Link>
                <Text sx={{ color: '#FFFFFF' }}></Text>
              </Flex>
            </li>
         
          </ul>
        </Box>
      </Flex>

      {/* Payment Icons and Copyright */}
      <Box sx={{ borderTop: '1px solid #6C757D', paddingTop: 4, marginTop: 4 }}>
        <Flex
          sx={{
            flexDirection: ['column', 'column'],
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            flexWrap: 'wrap',
            textAlign: 'center'
          }}
        >
          {/* Payment Icons */}
          <Grid
            gap={3}
            columns={[4, 4]}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {[
              { src: '/images/mastercard.jpg', alt: 'Mastercard' },
              { src: '/images/payoneer.jpg', alt: 'Payoneer' },
              { src: '/images/applepay.jpg', alt: 'Apple Pay' },
              { src: '/images/stripe.jpg', alt: 'Stripe' },
              { src: '/images/paypal.jpg', alt: 'PayPal' },
              { src: '/images/visa.jpg', alt: 'Visa' },
              { src: '/images/skrill.png', alt: 'Skrill' },
              { src: '/images/googlepay.jpg', alt: 'Google Pay' },
            ].map((icon) => (
              <Image
                key={icon.alt}
                src={icon.src}
                sx={{
                  width: ['60px', '50px'],
                  height: 'auto',
                  marginX: '10px', // Equal margin on both sides
                  borderRadius: '8px', // Adjust this value to match the original design
                }}
                alt={icon.alt}
              />
            ))}
          </Grid>

          {/* Copyright */}
          <Text sx={{ textAlign: 'center', color: '#ddd', fontSize: '0.813rem', paddingTop: 2, fontWeight: '500', textTransform: 'capitalize', letterSpacing: 1.2, marginTop: 20 }}>
            Copyright © Codemonktech All Rights Reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
