/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../src/Theme/theme.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/SignIn/SignIn";
import SignUp from "@/pages/SignUp/SignUp";
import UsersDashboard from "@/pages/Dashboard/UsersDashboard/UsersDashboard";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard/AdminDashboard";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
<<<<<<< HEAD
import Otp from "@/pages/Otp/Otp.tsx";
=======
import OtpPage from "./pages/OtpPage/OtpPage.tsx";
>>>>>>> 3768d45da8e1d30bdb0dd99e9ddf4257d2407099

export default function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
        <Route path='/' element={<UsersDashboard />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/otp" element={<Otp />} />
=======
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/otp-page" element={<OtpPage />} />
>>>>>>> 3768d45da8e1d30bdb0dd99e9ddf4257d2407099
          <Route
            path="/users-dashboard"
            element={
              <PrivateRoute roleRequired="user">
                <UsersDashboard />
              </PrivateRoute>
            }
          />
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
