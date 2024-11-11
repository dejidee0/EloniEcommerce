
import React from 'react';
import Header from '@/components/Dashboard-Components/Header';
// import NotificationDropdown from '@/components/Dashboard-Components/NotificationDropdown';
import PerformanceChart from '@/components/Dashboard-Components/PerformanceChart';
import ConversionsChart from '@/components/Dashboard-Components/ConversionsChart';
import OrderCard from '@/components/Dashboard-Components/Card';
import { Box } from 'theme-ui'; // Assuming you're using theme-ui or adapt as needed
import SecondDataTable from '@/components/Dashboard-Components/secondDataTable';
import DataTable from '@/components/Dashboard-Components/DataTable';
import Sidebar from '@/components/Dashboard-Components/SideBar/Sidebar';
const AdminDashboard: React.FC = () => {
  return (
    <Box sx={{backgroundColor: "#faf8f6;"}}>
        <Sidebar/>
      <Header />
      {/* <NotificationDropdown /> */}
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent: "space-between",
            marginTop: "-15px"
        }}>
       
        <Box sx={{
            width:["", "87%"],
            marginLeft: ["", "240px"]
        // border: "1px solid black",
        }}>
      <Box
      sx={{
        display: "flex",
        // flexDirection: ["column", "column", "row"],
        '@media screen and (min-width: 401px) and (max-width: 1080px)': {
          width: '100%',
          flexDirection: 'column',
        },
        justifyContent:"space-around",
        // border: "1px solid black",
        alignItems:"center"
      }}
    >
        
      <Box
      sx={{
        display: "flex",
        flexDirection: ["column", "column"],
        // border: "1px solid black",
        width: "100%",

      }}
    >
      <Box sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            width: "100%",
            justifyContent: ["center", "space-around"],
            padding: "0px",
          }}>
            <OrderCard iconName='bx:bxs-backpack' cardTitle='Deals' cardValue={976} percentageChange={2.3} timePeriod="Last Week" />
            <OrderCard iconName='bx:bx-dollar-circle' cardTitle='Booked Revenue' cardValue={123.6} percentageChange={2.3} timePeriod="Last Month" />
          </Box>
          <Box sx={{
          width: ["100%", "100%", "100%"],
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          // border: "1px solid black",
          
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            width: "100%",
            justifyContent: ["center", "space-around"],
            padding: "0px",
          }}>
            <OrderCard iconName='solar:cart-5-bold-duotone' cardTitle='Total Orders' cardValue={13647} percentageChange={2.3} timePeriod="Last Week" />
            <OrderCard iconName='bx:bx-award' cardTitle='New Leads' cardValue={9526} percentageChange={8.1} timePeriod="Last Month" /> 
          </Box>
          
          

        </Box>
       
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            width: ["90%", "90%"], 
            justifyContent: ["space-around", "center"],
            borderRadius:"15px",
            // border:"1px solid black",
            
          }}>
            <PerformanceChart />
          </Box>
          
      
      </Box>
      <Box sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            width: "100%", 
            justifyContent: ["center"],
            alignItems:"center",
            alignSelf:"center",
            
          }}>
      <Box sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            width: ["90%", "98%"], 
            justifyContent: ["center"],
            margin: "0px",
            alignItems:"center",
            alignSelf:"center",
            borderRadius:"15px",
            // border:"1px solid black",
            
          }}>
            <ConversionsChart conversionRate={65.2} />
            <DataTable/>
          </Box>
      </Box>
      
          <Box sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            width: ["90%", "100%"], 
            justifyContent: ["space-around"],
            borderRadius:"15px"
            // border:"1px solid black",
            
          }}>
            <SecondDataTable/>
          </Box>
      

      <Box as="main" sx={{ p: 4 }}>
      </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
