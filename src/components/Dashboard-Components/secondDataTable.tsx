import React from 'react';
import { Box } from 'theme-ui';
import { FaPlus } from 'react-icons/fa';

interface OrderData {
  orderId: string;
  date: string;
  product: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  paymentType: string;
  status: string;
}

const SecondDataTable: React.FC = () => {
  const tableData: OrderData[] = [
    { orderId: '#RB5625', date: '29 April 2024', product: 'product-1(1)', customerName: 'Anna M. Hines', email: 'anna.hines@mail.com', phone: '(+1)-555-1564-261', address: 'Burr Ridge/Illinois', paymentType: 'Credit Card', status: 'Completed' },
    { orderId: '#RB9652', date: '25 April 2024', product: 'product-4', customerName: 'Judith H. Fritsche', email: 'judith.fritsche@mail.com', phone: '(+57)-305-5579-759', address: 'SULLIVAN/Kentucky', paymentType: 'Credit Card', status: 'Completed' },
    { orderId: '#RB5984', date: '25 April 2024', product: 'product-5', customerName: 'Peter T. Smith', email: 'peter.smith@mail.com', phone: '(+33)-655-5187-93', address: 'Yreka/California', paymentType: 'PayPal', status: 'Completed' },
    { orderId: '#RB3625', date: '21 April 2024', product: 'product-6', customerName: 'Emmanuel J. Delcid', email: 'emmanuel.delcid@mail.com', phone: '(+30)-693-5553-637', address: 'Atlanta/Georgia', paymentType: 'PayPal', status: 'Processing' },
    { orderId: '#RB8652', date: '18 April 2024', product: 'product-1(2)', customerName: 'William J. Cook', email: 'william.cook@mail.com', phone: '(+91)-855-5446-150', address: 'Rosenberg/Texas', paymentType: 'Credit Card', status: 'Completed' },
  ];

  return (
    <Box
      sx={{
        margin: "20px",
        width: "98%",
        height: "500px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "center",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        fontSize: '12px', // Set the base font size to 12px
        color: '#5d7186', // Applied specified color for text
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: "-50px", paddingLeft: "10px", paddingRight: "10px" }}>
        <Box sx={{ padding: '15px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px', color: '#5d7186' }}>Recent Orders</Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            backgroundColor: "#FFE8E6",
            textAlign: 'left',
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: "10px"
          }}
        >
          <FaPlus color="#ff6c2f" style={{ marginRight: '8px' }} />
          <a href="#" style={{ color: '#ff6c2f' }}>Create Order</a>
        </Box>
      </Box>

      <Box sx={{ overflowX: 'auto', width: '100%' }}> {/* Add this Box for horizontal scrolling */}
        <Box as="table" sx={{ width: '100%', borderCollapse: 'collapse', backgroundColor: "white", alignSelf: "center" }}>
          <Box as="thead">
            <Box as="tr">
              {['Order ID', 'Date', 'Product', 'Customer Name', 'Email ID', 'Phone No.', 'Address', 'Payment Type', 'Status'].map((header, index) => (
                <Box as="th" key={index} sx={{ padding: '15px', backgroundColor: "rgba(0, 0, 0, 0.05)", textAlign: 'left', fontWeight: 'bold', fontSize: '14px', color: '#5d7186' }}>{header}</Box>
              ))}
            </Box>
          </Box>

          <Box as="tbody">
            {tableData.map((row, index) => (
              <Box as="tr" key={index}>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.orderId}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.date}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.product}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.customerName}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.email}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.phone}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.address}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: '#5d7186' }}>{row.paymentType}</Box>
                <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', textAlign: 'left', color: row.status === 'Completed' ? 'green' : 'orange' }}>{row.status}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SecondDataTable;
