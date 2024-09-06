/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../src/Theme/theme.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/SignIn/SignIn";
import SignUp from "@/pages/SignUp/SignUp";
import UsersDashboard from "@/pages/Dashboard/UsersDashboard/UsersDashboard";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard/AdminDashboard";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import OtpPage from "./pages/OtpPage/OtpPage.tsx";

export default function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/otp-page" element={<OtpPage />} />
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
