import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Register from "./pages/Register";
import Header from "./components/header";
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
        <Route path="/product" element={<Productpage />} />
      </Routes>
    </>
  );
};

export default App;
