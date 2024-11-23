/** @jsxImportSource theme-ui */
import { Box, Input, Label, Select, Textarea, Flex, Button } from 'theme-ui';

const ProductInformation = () => {
  const sizes = ['XS', 'S', 'M', 'XL', 'XXL', '3XL'];
  const colors = [
    { value: 'navy', color: '#1a237e' },
    { value: 'yellow', color: '#fdd835' },
    { value: 'gray', color: '#9e9e9e' },
    { value: 'orange', color: '#ff5722' },
    { value: 'green', color: '#4caf50' },
    { value: 'red', color: '#f44336' },
    { value: 'teal', color: '#009688' },
    { value: 'blue', color: '#2196f3' },
  ];

  return (
    <Box sx={{ p: 4, maxWidth: '1200px', mx: 'auto' }}>
      <Box sx={{ fontSize: 3, fontWeight: 'bold', mb: 4, color: 'primary' }}>
        Product Information
      </Box>

      <Box sx={{ display: 'grid', gap: 4 }}>
        {/* First Row */}
        <Flex sx={{ gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Product Name</Label>
            <Input placeholder="Items Name" sx={{ borderColor: 'gray.2' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Product Categories</Label>
            <Select defaultValue="" sx={{ borderColor: 'gray.2' }}>
              <option value="" disabled>Choose a categories</option>
              <option>Category 1</option>
              <option>Category 2</option>
            </Select>
          </Box>
        </Flex>

        {/* Second Row */}
        <Flex sx={{ gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Brand</Label>
            <Input placeholder="Brand Name" sx={{ borderColor: 'gray.2' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Weight</Label>
            <Input placeholder="In gm & kg" sx={{ borderColor: 'gray.2' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Gender</Label>
            <Select defaultValue="" sx={{ borderColor: 'gray.2' }}>
              <option value="" disabled>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Unisex</option>
            </Select>
          </Box>
        </Flex>

        {/* Size Section */}
        <Box>
          <Label sx={{ mb: 2, color: 'gray.6' }}>Size :</Label>
          <Flex sx={{ gap: 2 }}>
            {sizes.map((size) => (
              <Button
                key={size}
                variant="outline"
                sx={{
                  py: 2,
                  px: 3,
                  bg: 'gray.1',
                  border: '1px solid',
                  borderColor: 'gray.3',
                  color: 'gray.7',
                  cursor: 'pointer',
                  '&:hover': {
                    bg: 'primary',
                    color: 'white'
                  }
                }}
              >
                {size}
              </Button>
            ))}
          </Flex>
        </Box>

        {/* Colors Section */}
        <Box>
          <Label sx={{ mb: 2, color: 'gray.6' }}>Colors :</Label>
          <Flex sx={{ gap: 2 }}>
            {colors.map((color) => (
              <Box
                key={color.value}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  bg: color.color,
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: 'gray.2',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  }
                }}
              />
            ))}
          </Flex>
        </Box>

        {/* Description */}
        <Box>
          <Label sx={{ mb: 2, color: 'gray.6' }}>Description</Label>
          <Textarea
            placeholder="Short description about the product"
            rows={6}
            sx={{ borderColor: 'gray.2' }}
          />
        </Box>

        {/* Bottom Row */}
        <Flex sx={{ gap: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Tag Number</Label>
            <Input placeholder="#******" sx={{ borderColor: 'gray.2' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Stock</Label>
            <Input placeholder="Quantity" sx={{ borderColor: 'gray.2' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Label sx={{ mb: 2, color: 'gray.6' }}>Tag</Label>
            <Flex sx={{ gap: 2, alignItems: 'center' }}>
              <Button
                variant="outline"
                sx={{
                  bg: 'orange',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: 3,
                  py: 2,
                  borderRadius: 4
                }}
              >
                Fashion
                <Box as="span" sx={{ cursor: 'pointer' }}>×</Box>
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductInformation;