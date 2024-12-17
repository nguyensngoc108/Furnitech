// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handlePersonIconClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };
  const handleBlogClick = () => {
    navigate("/blog");
  };

  const handleProductsClick = () => {
    navigate("/products");
  };

  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <a href="/" className="flex items-center">
        <img src="./assets/Cir.svg" alt="Logo" className="w-9 h-9" />
        <span className="ml-3 text-black font-DM Sans text-2xl font-extrabold tracking-wider leading-normal">
          Furnitech
        </span>
      </a>
      {/* Menu list */}
      <ul
        className=" 
                flex items-start  px gap-10  pl-[188px] pr-[188px] 
                text-[18px]  font-bold leading-[30px]
                transition-all duration-300 ease-out 
                text-brown-1000
            "
      >
        <li>
          <a href="/" class="hover:text-brown">
            Home
          </a>
        </li>
        <li>
          <a onClick={handleProductsClick} class="hover:text-brown">
            Products
          </a>
        </li>
        <li>
          <a onClick={handleBlogClick} class="hover:text-brown">
            Blogs
          </a>
        </li>
        <li>
          <a onClick={handleAboutClick} class="hover:text-brown">
            About Us
          </a>
        </li>
      </ul>

      {/* Buttom list */}
      <ul>
        <li
          className=" 
                    flex justify-end items-center gap-6 w-{50px} h-{50px} pr-0 
                    cursor-default md:cursor-pointer
                    fill-brown-400
                "
        >
          <a onClick={handlePersonIconClick}>
            <img src="./assets/person.svg" alt="person" />
          </a>
          <a onClick={handleCartClick}>
            <img src="./assets/shopping.svg" alt="store" />
          </a>
        </li>
        {user && (
          <button
            onClick={onLogout}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Header;
