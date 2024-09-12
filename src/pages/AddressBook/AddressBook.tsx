import AddressForm from "@/components/AddressForm/AddressForm";
import Cookies from "@/components/Cookies/Cookies";
import Header from "@/components/Header/Header";
import Recommend from "@/components/Recommend/Recommend";
import WishListBar from "@/components/WishListBar/WishListBar";
import { Box } from "theme-ui";

const AddressBook: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: [3, 4],
          padding: [2, 4],
        }}
      >
        <Box sx={{ flex: ["1 0 100%", "1 0 30%"] }}>
          <WishListBar />
        </Box>

        <Box sx={{ flex: ["1 0 100%", "1 0 60%"] }}>
          <AddressForm />
        </Box>
      </Box>
      <Cookies />
      <Recommend />
    </>
  );
};

export default AddressBook;

// import AddressForm from "@/components/AddressForm/AddressForm";
// import Cookies from "@/components/Cookies/Cookies";
// import Header from "@/components/Header/Header";
// import Recommend from "@/components/Recommend/Recommend";
// import WishListBar from "@/components/WishListBar/WishListBar";
// import { Box } from "theme-ui";

// const AddressBook: React.FC = () => {
//   return (
//     <>
//       <Header />
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: ["column", "column", "row"], // Stack on mobile, row on larger screens
//           justifyContent: "space-between",
//           alignItems: "flex-start",
//           gap: [3, 4], // Adjust the gap for responsiveness
//           padding: [3, 4], // Adjust padding for smaller and larger screens
//           maxWidth: "1200px", // Set a max width for large screens
//           margin: "0 auto", // Center the layout on larger screens
//         }}
//       >
//         {/* WishListBar on the left, taking full width on small screens */}
//         <Box
//           sx={{
//             flex: ["1 0 100%", "1 0 100%", "1 0 30%"], // Full width on mobile and tablet, 30% on desktop
//             mb: [4, 4, 0], // Add bottom margin on small screens
//           }}
//         >
//           <WishListBar />
//         </Box>

//         {/* AddressForm on the right, taking full width on small screens */}
//         <Box
//           sx={{
//             flex: ["1 0 100%", "1 0 100%", "1 0 60%"], // Full width on mobile and tablet, 60% on desktop
//           }}
//         >
//           <AddressForm />
//         </Box>
//       </Box>
//       <Cookies />
//       <Recommend />
//     </>
//   );
// };

// export default AddressBook;
