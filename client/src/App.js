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
import About from "./pages/About";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<ShippingDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product" element={<Productpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
};

export default App;
