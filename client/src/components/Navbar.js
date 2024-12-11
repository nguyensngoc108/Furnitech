// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user, onLogout }) {
  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      {user ? (
        <div className="user-menu">
          <span>{user.name}</span>
          <div className="dropdown">
            <Link to="/orders">Orders</Link>
            <Link to="/cart">Cart</Link>
            <button onClick={onLogout}>Logout</button>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;