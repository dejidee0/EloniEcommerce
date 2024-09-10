/** @jsxImportSource theme-ui */

interface ProductProps {
  img: string;
  productName: string;
  productCategory: string;
  productPrice: string;
  discount?: string; // Optional
}

const Product: React.FC<ProductProps> = ({ img, productName, productCategory, productPrice, discount }) => {
  return (
    <div
      sx={{
        border: '1px solid #ddd',
        display: 'flex',
        gap: 3,
        alignItems: 'center',
        borderRadius: '10px',
        height: '100px',

        width: '320px',
        
        '@media screen and (max-width: 620px)': {
          
          minWidth: '100%',
          
        },
      }}
    >
      <div
        sx={{
          width: '80px',
          paddingTop: 2, paddingLeft: 3,
        }}
      >
        <img src={img} alt="product" sx={{ width: '100%' }} />
      </div>
      <div sx={{ padding: 0 }}>
        <div sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
          <span sx={{ whiteSpace: 'nowrap', marginBottom: 1, fontWeight: 800, color: '#333' }}>
            {productName}
          </span>
          <span>{productCategory}</span>
        </div>
        <div sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
          <span sx={{ color: 'secondary', fontWeight: 800 }}>${productPrice}</span>
          {discount && (
            <span
              sx={{
                fontWeight: 300,
                textDecoration: 'line-through',
                color: 'gray',
              }}
            >
              ${discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
