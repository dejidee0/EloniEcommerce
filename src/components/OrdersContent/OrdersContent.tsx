// import { Box, Text, Button } from "theme-ui";
// import { useState, useEffect } from "react";

// const OrdersContent = () => {
//   const [popupAccepted, setPopupAccepted] = useState(false);

//   useEffect(() => {
//     const isAccepted = localStorage.getItem("popupAccepted");
//     if (isAccepted) {
//       setPopupAccepted(true);
//     }
//   }, []);

//   // const items = [
//   //   {
//   //     name: "",
//   //     description: "A complete overview of your activities.",
//   //     price: "$49.99",
//   //     img: "bag.png",
//   //   },
//   //   {
//   //     name: "",
//   //     description: "Manage your tasks efficiently.",
//   //     price: "$29.99",
//   //     img: "cloth-1.jpg",
//   //   },
//   //   {
//   //     name: "",
//   //     description: "User management module.",
//   //     price: "$19.99",
//   //     img: "shoes.png",
//   //   },
//   //   {
//   //     name: "",
//   //     description: "Communicate with team members.",
//   //     price: "$9.99",
//   //     img: "shoePair.jpg",
//   //   },
//   //   {
//   //     name: "",
//   //     description: "",
//   //     price: "",
//   //     img: "dress.png",
//   //   },
//   //   {
//   //     name: "",
//   //     description: "",
//   //     price: "",
//   //     img: "hat.jpg",
//   //   },
//   //   {
//   //     name: "",
//   //     description: "",
//   //     price: "",
//   //     img: "glasses.png",
//   //   },
//   // ];

//   return (
//     <>
//       {!popupAccepted && (
//         <Box
//           sx={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//           }}
//         ></Box>
//       )}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "100vh",
//           justifyContent: "center",
//           boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//           borderRadius: "8px",
//           backgroundColor: "#fff",
//           bg: "background",
//           px: [3, 4],
//         }}
//       >
//         <Text
//           as="div"
//           sx={{
//             mb: 4,
//             fontSize: [2, 3],
//             fontWeight: "bold",
//             ml: 3,
//             padding: 2,
//             margin: "2",
//           }}
//         >
//           Orders
//         </Text>
//         <Box
//           sx={{
//             background: "white",
//             color: "black",
//             display: "flex",
//             flexDirection: ["column", "row"],
//             // justifyContent: "space-between",
//             mb: 3,
//           }}
//         >
//           <Button
//             sx={{
//               bg: "white",
//               color: "#000",
//               fontWeight: "bold",
//               ":hover": {
//                 bg: "white",
//                 color: "#000",
//                 cursor: "pointer",
//               },
//               mb: [2, 0],
//             }}
//           >
//             ONGOING/DELIVERED(0)
//           </Button>
//           <Button
//             sx={{
//               bg: "white",
//               color: "#000",
//               fontWeight: "bold",
//               ":hover": {
//                 bg: "white",
//                 color: "#000",
//                 cursor: "pointer",
//               },
//             }}
//           >
//             CANCELLED/RETURNED(0)
//           </Button>
//         </Box>
//         <Box as="ul" sx={{ listStyle: "none", p: 0 }}>
//           {items.map((item, index) => (
//             <Box
//               as="li"
//               key={index}
//               sx={{
//                 mb: 2,
//                 fontSize: [2, 0],
//                 display: "flex",
//                 flexDirection: ["column", "row"],
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 p: [2, 3],
//                 bg: "#f9f9f9",
//                 ":not(:last-child)": {
//                   mb: 2,
//                 },
//                 ":hover": {
//                   bg: "#e0e0e0",
//                 },
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: ["column", "row"],
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     marginRight: "16px",
//                   }}
//                 />
//                 {/* <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: ["center", "flex-start"],
//                     justifyContent: "center",
//                     mt: [2, 0],
//                   }}
//                 >
//                   <Text sx={{ fontWeight: "bold" }}>{item.name}</Text>
//                   <Text>{item.description}</Text>
//                   <Text sx={{ color: "green" }}>{item.price}</Text>
//                 </Box> */}
//               {/* </Box>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   mt: [2, 0],
//                 }}
//               >
//                 <Button
//                   sx={{
//                     fontWeight: "bold",
//                     bg: "white",
//                     color: "#000",
//                     fontStyle: "bold",
//                     ":hover": {
//                       color: "#000",
//                       cursor: "pointer",
//                     },
//                   }}
//                 >
//                   SEE DETAILS
//                 </Button>
//               </Box>
//             </Box>
//           ))}
//         </Box> */}
//       </Box>
//     </>
//   );
// };

// export default OrdersContent;
