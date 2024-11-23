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
import AdminProductList from "./pages/productList/Admin/page.tsx";
import UserProductList from "./pages/productList/User/page.tsx";


// import './App.css'

import BlogForm from "@/pages/BlogForm/BlogForm.tsx";
import Payment from "./components/Payment/Payment.tsx";
// import BecomeASeller from "./components/BecomeASeller/BecomeASeller.tsx";
import SellerSignUp from "./pages/SellersSignUpFlow/SellerForm/SellerSignUp.tsx";
import EmailVerification from "./pages/SellersSignUpFlow/EmailVerification/EmailVerification.tsx";
import EmailForm from "./pages/SellersSignUpFlow/EmailForm/EmailForm.tsx";
import SellerPersonalInformation from "./pages/SellersSignUpFlow/PersonalInformation/PersonalInformation.tsx";
import ShopInformation from "./pages/SellersSignUpFlow/ShopInformation/ShopInformation.tsx";
import AdminLayout from "./components/AdminLayout.tsx";
import AdminForm from "./components/AddProduct.tsx";
import AddProduct from "./components/AddProduct.tsx";

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
            {/* <Route path="/payment" element={<Payment />} /> */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/my-account" element={<UsersDashboard />} />
            <Route path="/address-book" element={<AddressBook />} />
            <Route path="/my-account" element={<MyAccount />} />
            <Route path="/address-book" element={<AddressBook />} />
            <Route path="/blog-form" element={<BlogForm />} />
            {/* NEWLY ADDED ROUTES */}
            <Route path="/product_list" element={<UserProductList />} />
            <Route
              path="/admin/*"
              element={
                <PrivateRoute roleRequired="admin">
                  <AdminLayout />
                </PrivateRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="product-add" element={<AddProduct />} />
              <Route path="product-list" element={<AdminProductList />} />
            </Route>


            <Route
              path="/payment"
              element={
                <PrivateRoute roleRequired="user">
                  <Payment />
                </PrivateRoute>
              }
            />
            <Route
              path="/become-a-seller"
              element={
                // <PrivateRoute roleRequired="user">
                //  <BecomeASeller />
                <SellerSignUp />
                // </PrivateRoute>
              }
            />
            <Route
              path="/seller-signup"
              element={
                // <PrivateRoute roleRequired="user">
                //  <BecomeASeller />
                <EmailForm />
                // </PrivateRoute>
              }
            />
            <Route
              path="/seller/verification"
              element={
                // <PrivateRoute roleRequired="user">
                //  <BecomeASeller />
                <EmailVerification />
                // </PrivateRoute>
              }
            />
            <Route
              path="/seller/personal-info"
              element={
                // <PrivateRoute roleRequired="user">
                //  <BecomeASeller />
                <SellerPersonalInformation />
                // </PrivateRoute>
              }
            />
            <Route
              path="/seller/shop-info"
              element={
                // <PrivateRoute roleRequired="user">
                //  <BecomeASeller />
                <ShopInformation />
                // </PrivateRoute>
              }
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeUIProvider>
  );
}
