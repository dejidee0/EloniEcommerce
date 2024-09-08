/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../src/Theme/theme.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/SignIn/SignIn";
import SignUp from "@/pages/SignUp/SignUp";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard/AdminDashboard";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Otp from "./pages/Otp/Otp.tsx";
import UsersDashboard from "./pages/Dashboard/UsersDashboard/UsersDashboard.tsx";
import WishList from "./pages/WishList/WishList.tsx";

export default function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersDashboard />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/otp-page" element={<Otp />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute roleRequired="admin">
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeUIProvider>
  );
}
