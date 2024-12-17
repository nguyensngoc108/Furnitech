// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handlePersonIconClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleProductsClick = () => {
    navigate('/products');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <a href="/" className="flex items-center">
        <img src="./assets/Cir.svg" alt="Logo" className="w-9 h-9" />
        <span className="ml-3 text-black font-DM Sans text-2xl font-extrabold tracking-wider leading-normal">
          Furnitech
        </span>
      </a>
      <div className="flex items-center space-x-4">
        <button onClick={handleProductsClick} className="px-4 py-2 bg-green-500 text-white rounded-md">
          Products
        </button>
        <div onClick={handlePersonIconClick} className="cursor-pointer">
          <img src="./assets/person-icon.svg" alt="Person Icon" className="w-6 h-6" />
        </div>
        <div onClick={handleCartClick} className="cursor-pointer">
          <img src="./assets/cart-icon.svg" alt="Cart Icon" className="w-6 h-6" />
        </div>
        {user && (
          <button onClick={onLogout} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;