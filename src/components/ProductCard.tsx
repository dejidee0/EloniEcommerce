/** @jsxImportSource theme-ui */
import { Box, Heading, Text, Button, Image, Flex } from 'theme-ui';
import cloth from "@/assets/cloth-1.jpg"
import CustomCard from './CustomCard';

const ProductCard = () => {
  return (
    <CustomCard width={365} height={729}>
      {/* Image Section */}
      <Box
        sx={{
          backgroundColor: '#f4f5f9',
          borderRadius: '12px',
          padding: 3,
        }}
      >
        <Image
          src={cloth}
          sx={{
            width: '100%',
            borderRadius: '8px',
          }}
          alt="Product"
        />
      </Box>

      {/* Text and Details Section */}
      <Box mt={3}>
        {/* Title */}
        <Heading as="h3" sx={{ fontSize: 4, mb: 2 }}>
          Men Black Slim Fit T-shirt{' '}
          <Text as="span" sx={{ color: 'gray', fontSize: 2 }}>
            (Fashion)
          </Text>
        </Heading>

        {/* Price Section */}
        <Text sx={{ fontSize: 3, color: 'gray', textDecoration: 'line-through' }}>
          $100
        </Text>{' '}
        <Text sx={{ fontSize: 4, fontWeight: 'bold', color: 'secondary' }}>
          $80
        </Text>{' '}
        <Text as="span" sx={{ color: 'green', fontSize: 2 }}>
          (30% Off)
        </Text>

        {/* Size Section */}
        <Box mt={3}>
          <Heading as="h4" sx={{ fontSize: 3, mb: 2 }}>
            Size:
          </Heading>
          <Flex sx={{ gap: 2 }}>
            {['S', 'M', 'XL', 'XXL'].map((size, index) => (
              <Box
                key={index}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '8px',
                  bg: size === 'M' ? 'gray' : '#f4f5f9',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: size === 'M' ? 'white' : 'text',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                {size}
              </Box>
            ))}
          </Flex>
        </Box>

        {/* Colors Section */}
        <Box mt={3}>
          <Heading as="h4" sx={{ fontSize: 3, mb: 2 }}>
            Colors:
          </Heading>
          <Flex sx={{ gap: 2 }}>
            {['#2c3e50', '#f1c40f', '#ecf0f1', '#e74c3c'].map((color, index) => (
              <Box
                key={index}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bg: color,
                  cursor: 'pointer',
                }}
              />
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Action Buttons */}
      <Flex mt={4} sx={{ gap: 3, justifyContent: 'space-between' }}>
        <Button
          sx={{
            flex: 1,
            borderRadius: '8px',
            bg: 'white',
            color: 'primary',
            border: '1px solid #ccc',
            '&:hover': { bg: '#f7f7f7' },
          }}
        >
          Create Product
        </Button>
        <Button
          sx={{
            flex: 1,
            borderRadius: '8px',
            bg: 'secondary',
            color: 'white',
          }}
        >
          Cancel
        </Button>
      </Flex>
    </CustomCard>
  );
};

export default ProductCard;
