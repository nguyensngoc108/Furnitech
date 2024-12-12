// src/App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Orders from './components/Orders';
import Cart from './components/Cart';
import Logout from './components/Logout';
// import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (userId && token) {
      // Fetch user data from the server using the token
      // For simplicity, we'll just set a dummy user object
      setUser({ _id: userId, name: 'John Doe' });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar user={user} onLogout={handleLogout} />
      <header className="App-header">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;