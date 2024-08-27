/** @jsxImportSource theme-ui */
import { Box, Flex, Text, Link, Image } from 'theme-ui';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" sx={{ backgroundColor: 'background', padding: [4, 5], color: 'text' }}>
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
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold' }}>
            Popular Categories
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Electronics & Gadgets', 'Fashion & Apparel', 'Home & Garden', 'Beauty & Personal Care', 'Sports & Outdoors'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: 'text', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: 'primary' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Products */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold' }}>
            Products
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Smart TV', 'Laptop Stand', 'Portable Charger', 'Skinny Jeans', 'Denim Jacket'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: 'text', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: 'primary' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Our Company */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold' }}>
            Our Company
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Return & Refund Policy', 'Shipping & Delivery Guidelines', 'Privacy & Data Protection', 'Payment & Billing Terms', 'Secure Payment'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: 'text', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: 'primary' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Services */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold' }}>
            Services
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['ShopEase', 'TrendCrate', 'FitFinder', 'QuickGift', 'FlashFinds'].map((item) => (
              <li key={item}>
                <Link href="#" sx={{ color: 'text', textDecoration: 'none', marginBottom: 2, display: 'block', '&:hover': { color: 'primary' } }}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Box>

        {/* Contact */}
        <Box sx={{ flex: '1 1 200px', marginBottom: [4, 4, 0] }}>
          <Text as="h4" sx={{ fontSize: 2, marginBottom: 3, fontWeight: 'bold' }}>
            Contact
          </Text>
          <ul sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li>
              <Flex sx={{ alignItems: 'center', marginBottom: 2 }}>
                <FaMapMarkerAlt style={{ marginRight: '8px' }} />
                <Text sx={{ color: 'text' }}>Lagos, Nigeria</Text>
              </Flex>
            </li>
            <li>
              <Flex sx={{ alignItems: 'center', marginBottom: 2 }}>
                <FaPhoneAlt style={{ marginRight: '8px' }} />
                <Text sx={{ color: 'text' }}>+2348062907833</Text>
              </Flex>
            </li>
            <li>
              <Flex sx={{ alignItems: 'center' }}>
                <FaEnvelope style={{ marginRight: '8px' }} />
                <Link href="mailto:Codemonktech1@Gmail.Com" sx={{ color: 'text', textDecoration: 'none', '&:hover': { color: 'primary' } }}>
                  Codemonktech1@Gmail.Com
                </Link>
              </Flex>
            </li>
          </ul>
        </Box>
      </Flex>

      {/* Payment Icons and Copyright */}
      <Box sx={{ borderTop: '1px solid', borderColor: 'muted', paddingTop: 4, marginTop: 4 }}>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            flexWrap: 'wrap',
            textAlign: 'center'
          }}
        >
          {/* Payment Icons */}
          <Flex sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 3, marginBottom: [3, 0], padding: [2, 3] }}>
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
              <Image key={icon.alt} src={icon.src} sx={{ width: 40, height: 'auto' }} alt={icon.alt} />
            ))}
          </Flex>

          {/* Copyright */}
          <Text sx={{ textAlign: 'center', color: 'muted', fontSize: 1, paddingTop: 2 }}>
            © Codemonktech All Rights Reserved.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
