// DataTable.tsx
import React from 'react';
import { Box, Flex } from 'theme-ui';

interface PageData {
  pagePath: string;
  pageViews: number;
  exitRate: string; 
}

const DataTable: React.FC = () => {
  const tableData: PageData[] = [
    { pagePath: 'larkon/ecommerce.html', pageViews: 465, exitRate: '4.4%' },
    { pagePath: 'larkon/dashboard.html', pageViews: 426, exitRate: '20.4%' },
    { pagePath: 'larkon/chat.html', pageViews: 254, exitRate: '12.25%' },
    { pagePath: 'larkon/auth-login.html', pageViews: 3369, exitRate: '5.2%' },
    { pagePath: 'larkon/email.html', pageViews: 985, exitRate: '64.2%' },
    { pagePath: 'larkon/social.html', pageViews: 653, exitRate: '2.4%' },
    { pagePath: 'larkon/blog.html', pageViews: 478, exitRate: '1.4%' },
  ];

  return (
    <Box
      sx={{
        margin: "10px",
        width: "100%",
        height: "600px",
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
    
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginBottom:"-50px", paddingLeft:"10px", paddingRight:"10px"}}>
         
            <Box  sx={{ padding: '15px', textAlign: 'left', fontWeight: 'bold', fontSize: '14px', color: '#5d7186' }}>Top Pages</Box>
            <Box  sx={{ padding: '15px', backgroundColor: "#FFE8E6", textAlign: 'left', fontWeight: 'bold', fontSize: '14px', borderRadius:"10px" }}><a href="#" style={{color: '#ff6c2f'}}>View All</a></Box>
        
        </Box>
      <Box as="table" sx={{ width: '100%', borderCollapse: 'collapse', backgroundColor: "white", alignSelf: "center" }}>
        
        <Box as="thead">
          <Box as="tr">
            <Box as="th" sx={{ padding: '15px', backgroundColor: "rgba(0, 0, 0, 0.05)", textAlign: 'left', fontWeight: 'bold', fontSize: '14px', color: '#5d7186' }}>Page Path</Box>
            <Box as="th" sx={{ padding: '15px', backgroundColor: "rgba(0, 0, 0, 0.05)", textAlign: 'left', fontWeight: 'bold', fontSize: '14px', color: '#5d7186' }}>Page Views</Box>
            <Box as="th" sx={{ padding: '15px', backgroundColor: "rgba(0, 0, 0, 0.05)", textAlign: 'left', fontWeight: 'bold', fontSize: '14px', color: '#5d7186' }}>Exit Rate</Box>
          </Box>
        </Box>
        <Box as="tbody">
          {tableData.map((row, index) => (
            <Box as="tr" key={index}>
              <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>{row.pagePath}</Box>
              <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>{row.pageViews}</Box>
              <Box as="td" sx={{ padding: '15px', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>{row.exitRate}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default DataTable;