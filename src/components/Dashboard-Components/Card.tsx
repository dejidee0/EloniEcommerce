import React from 'react';
import { Icon } from '@iconify/react';
import { Box} from 'theme-ui';


interface CardProps {
  iconName: string,
  cardTitle: string,
  cardValue: number;
  percentageChange: number;
  timePeriod: string;
}

const OrderCard: React.FC<CardProps> = ({ iconName, cardTitle, cardValue, percentageChange, timePeriod }) => {
  return (
    // <Box sx={{backgroundColor: "#f8f9fa;"}}>
     


    <Box sx={{marginBottom:"25px"}}>
      <Box className="card overflow-hidden" sx={{display:"flex", justifyContent:"center"}}>
      <Box className="card-body" sx={{
        background: "white",
        height:["150px", "150px"],
        width:["90%", "380px",],
        borderRadius:"15px",
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.07)',
       
        }}>
          <Box>
        <Box className="row" sx={{display: "flex", flexDirection:"row", justifyContent: "space-between",  padding:"20px",}}>
          <Box className="col-6">
            <Box className="avatar-md bg-soft-primary rounded" sx={{
              height:"50px",
              width:"50px",
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              borderRadius:"10px",
              backgroundColor:"#ffd5c5"}}>
              <Icon icon={iconName} className="avatar-title fs-32 text-primary" style={{height:"30px", width:"30px", color: "#ff6c2f"}} />
            </Box>
          </Box> 
          <Box className="col-6 text-end" sx={{display:"flex", flexDirection:"column", justifyContent:"flex-end"}} >
            <p className="text-muted mb-0 text-truncate" style={{ color:"#596473", fontSize:"13px" }}>{cardTitle}</p>
            <h3 className="text-dark mt-1 mb-0" style={{alignSelf:"flex-end"}} >{cardValue.toLocaleString()}</h3>
          </Box>
        </Box>
        <Box className="card-footer py-2 bg-light bg-opacity-50" >
        <Box className="d-flex align-items-center justify-content-between" sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            marginTop:"10px",
            backgroundColor:"#f8f9fa",
            paddingLeft:"20px",
            paddingRight:"20px",
            paddingTop:'10px',
            paddingBottom:"10px",
            borderRadius:"10px 0px"
          }}>
          <Box >
            <span className={`text-${percentageChange > 0 ? 'success' : 'danger'}`}>
            <Icon
                icon="ic:baseline-arrow-drop-down" // This icon represents a downward arrow
                className="avatar-title fs-32 text-primary"
                style={{
                  height: "30px",
                  width: "30px",
                  color: "#22c55e",
                  marginBottom:"-10px",
                  marginRight:"-5px",
                  transform: "rotate(180deg)" 
                }}
              />
              <strong className={`bx ${percentageChange > 0 ? 'bxs-up-arrow' : 'bxs-down-arrow'} fs-12`} style={{color: "#22c55e", paddingRight:"10px", fontSize:"12px"}}>{Math.abs(percentageChange)}%</ strong> 
            </span>
            <span className="text-muted ms-1 fs-12" style={{color: "#323a46", fontSize:"12px"}}>{timePeriod}</span>
          </Box>
          <a href="#!" className="text-reset fw-semibold fs-12" style={{color: "#28303f", fontSize:"12px", fontWeight:"bold", paddingTop:"5px"}}>View More</a>
        </Box>
      </Box> 
      </Box>
      
    </Box>
    </Box>
    </Box>

   
    
  );
};

export default OrderCard;
