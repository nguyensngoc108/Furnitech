import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import Header from "./components/header";
import ShippingDetails from "./pages/ShippingDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Productpage from "./pages/Productpage";

const App = () => {
  return (
    <>
      <div className="justify-between items-center  font-DM Sans ">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<ShippingDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<Productpage />} />
      </Routes>
    </>
  );
};

export default App;
