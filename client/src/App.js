// src/App.js
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from './utils/toast';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/header';
import Checkout from './pages/Checkout.js';

const Layout = lazy(() => import('./layout/Layout.js'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Login = lazy(() => import('./pages/Login'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const Register = lazy(() => import('./pages/Register'));
const ForgetPassword = lazy(() => import('./pages/ForgotPassword.js'));
const ResetPassword = lazy(() => import('./pages/ResetPassword.js'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const SingleProductPage = lazy(() => import('./pages/SingleProductPage.js')); // Import SingleProductPage
const Cart = lazy(() => import('./pages/Cart.js'));
const ShippingDetails = lazy(() => import('./pages/ShippingDetails.js'));

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');
    if (userId && userName) {
      setUser({ _id: userId, name: userName });
    }
  }, []);

  const handleLogin = (user) => {
    console.log('User logged in:', user);
    localStorage.setItem('userId', user._id);
    localStorage.setItem('token', user.token);
    localStorage.setItem('userName', user.name);
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    setUser(null);
    console.log('User logged out');
  };

  return (
    <Router>
      <ToastContainer />
      <AccessibleNavigationAnnouncer />
      <Header user={user} onLogout={handleLogout} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:productId" element={<SingleProductPage />} /> {/* Add route for SingleProductPage */}
          <Route path="/profile" element={<PrivateRoute component={UserProfile} />} />
          <Route path="/" element={<Navigate to="/landing" />} />
          <Route path="*" element={<Navigate to="/landing" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<ShippingDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;