/** @jsxImportSource theme-ui */
import { ThemeUIProvider } from "theme-ui";
import { theme } from "../src/Theme/theme.tsx";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "@/pages/SignIn/SignIn";
import SignUp from "@/pages/SignUp/SignUp";
import AdminDashboard from "@/pages/Dashboard/AdminDashboard/AdminDashboard";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import Otp from "./pages/Otp/Otp.tsx";
import UsersDashboard from "./pages/Dashboard/UsersDashboard/UsersDashboard.tsx";
import WishList from "./pages/WishList/WishList.tsx";
import store from "./store/store.ts";
import CartList from "./components/Cart/CartList.tsx";

import Orders from "./pages/Orders/Orders.tsx";
import MyAccount from "./pages/MyAccount/MyAccount.tsx";
import AddressBook from "./pages/AddressBook/AddressBook.tsx";

export default function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/" element={<UsersDashboard />} />
            <Route path="/otp-page" element={<Otp />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<CartList />} />
            <Route path="/orders" element={<Orders />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/address-book" element={<AddressBook />} />
            <Route
              path="/admin-dashboard"
              element={
                <PrivateRoute roleRequired="admin">
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeUIProvider>
  );
}
