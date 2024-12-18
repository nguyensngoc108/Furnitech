import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Header = ({ user, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scrolling...", window.scrollY);
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log("Scrolled state changed:", scrolled);
  }, [scrolled]);

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 transition-all duration-300 fixed top-0 left-0 right-0 z-10 px-60 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <a href="/" className="flex items-center">
        <img src="./assets/Cir.svg" alt="Logo" className="w-9 h-9" />
        <span className="ml-3 text-black ont-dm-sans text-2xl font-extrabold tracking-wider leading-normal">
          Furnitech
        </span>
      </a>
      <div className="flex items-center justify-center gap-10 px-6 py-2 text-[20px] font-bold leading-[30px] text-brown-1000 font-dm-sans transition-all duration-300 ease-out">
        <a href="/" className="hover:text-brown">
          Home
        </a>
        <a onClick={handleProductsClick} className="hover:text-brown">
          Products
        </a>
        <a onClick={handleBlogClick} className="hover:text-brown">
          Blogs
        </a>
        <a onClick={handleAboutClick} className="hover:text-brown">
          About Us
        </a>
      </div>

      <div className="flex items-center gap-6 pr-0">
        <a onClick={handlePersonIconClick} className="cursor-pointer">
          <img
            src="./assets/person.svg"
            alt="person"
            className="w-[50px] h-[50px]"
          />
        </a>

        <a onClick={handleCartClick} className="cursor-pointer">
          <img
            src="./assets/shopping.svg"
            alt="shopping cart"
            className="w-[50px] h-[50px]"
          />
        </a>

        {user && (
          <div className="flex items-center">
            <Button text="Log Out" onClick={onLogout} className="px-6 py-3" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
