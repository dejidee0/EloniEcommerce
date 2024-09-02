/** @jsxImportSource theme-ui */
import { Box } from 'theme-ui';

const NewProduct = () => {
  return (
    <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px'
  }}
>
  <Box sx={{
    gridColumn: '2/3', border: '1px solid black'
  }}>
    <h4 sx={{
      borderBottom: '1px solid gray', paddingBottom: '5px'
    }}>Latest Arrivals</h4>
  </Box>
  <Box sx={{
    gridColumn: '3/4', border: '1px solid black'
  }}>
    <h4>Latest Arrivals</h4>
  </Box>
  <Box sx={{
    gridColumn: '4/5', border: '1px solid black'
  }}>
    <h4>Latest Arrivals</h4>
  </Box>
</Box>
  )
}

export default NewProduct;
