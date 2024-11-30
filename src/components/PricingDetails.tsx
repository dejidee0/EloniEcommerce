/** @jsxImportSource theme-ui */
import { Box, Flex, Input, Label, Button } from 'theme-ui';
import { DollarSign, Percent, FileText } from 'lucide-react'; // Using Lucide icons

const PricingDetails = () => {
    return (
        <Box sx={{ p: 4, maxWidth: '1200px', mx: 'auto' }}>
            {/* Header */}
            <Box sx={{ fontSize: 3, fontWeight: 'bold', mb: 4, color: 'primary' }}>
                Pricing Details
            </Box>

            {/* Input Fields */}
            <Flex sx={{ gap: 4, mb: 6 }}>
                {/* Price */}
                <Box sx={{ flex: 1 }}>
                    <Label sx={{ mb: 2, color: 'gray.6' }}>Price</Label>
                    <Flex sx={{
                        position: 'relative',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            left: 3,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'gray.5'
                        }}>
                            <DollarSign size={16} />
                        </Box>
                        <Input
                            placeholder="000"
                            sx={{
                                pl: '40px',
                                borderColor: 'gray.2',
                                '&:focus': {
                                    borderColor: 'primary',
                                    outline: 'none'
                                }
                            }}
                        />
                    </Flex>
                </Box>

                {/* Discount */}
                <Box sx={{ flex: 1 }}>
                    <Label sx={{ mb: 2, color: 'gray.6' }}>Discount</Label>
                    <Flex sx={{
                        position: 'relative',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            left: 3,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'gray.5'
                        }}>
                            <Percent size={16} />
                        </Box>
                        <Input
                            placeholder="000"
                            sx={{
                                pl: '40px',
                                borderColor: 'gray.2',
                                '&:focus': {
                                    borderColor: 'primary',
                                    outline: 'none'
                                }
                            }}
                        />
                    </Flex>
                </Box>

                {/* Tax */}
                <Box sx={{ flex: 1 }}>
                    <Label sx={{ mb: 2, color: 'gray.6' }}>Tax</Label>
                    <Flex sx={{
                        position: 'relative',
                        alignItems: 'center'
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            left: 3,
                            display: 'flex',
                            alignItems: 'center',
                            color: 'gray.5'
                        }}>
                            <FileText size={16} />
                        </Box>
                        <Input
                            placeholder="000"
                            sx={{
                                pl: '40px',
                                borderColor: 'gray.2',
                                '&:focus': {
                                    borderColor: 'primary',
                                    outline: 'none'
                                }
                            }}
                        />
                    </Flex>
                </Box>
            </Flex>

            {/* Buttons */}
            <Flex sx={{ justifyContent: 'flex-end', gap: 3, mt: 4 }}>
                <Button
                    variant="outline"
                    sx={{
                        px: 4,
                        py: 2,
                        bg: 'transparent',
                        color: 'primary',
                        border: '1px solid',
                        borderColor: 'primary',
                        borderRadius: 'default',
                        cursor: 'pointer',
                        '&:hover': {
                            bg: 'primary',
                            color: 'white'
                        }
                    }}
                >
                    Create Product
                </Button>
                <Button
                    sx={{
                        px: 4,
                        py: 2,
                        bg: 'orange',
                        color: 'white',
                        border: 'none',
                        borderRadius: 'default',
                        cursor: 'pointer',
                        '&:hover': {
                            bg: 'darken.orange'
                        }
                    }}
                >
                    Cancel
                </Button>
            </Flex>
        </Box>
    );
};

export default PricingDetails;