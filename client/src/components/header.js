// src/components/header.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Headers = ({ className, href, onClick, children, px }) => {
  // const [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const handlePersonIconClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav
      className="
         flex justify-between items-center   py-[32px] l-container 
         md:bg-top bg-center
         "
    >
      <a
        href="/"
        className="  
                flex h-[34.349px] pr-[56.314px] items-center    
            "
      >
        <img src="./assets/Cir.svg" alt="Logo" width={37} height={37} />

        <span
          className="
                    text-black  font-DM Sans text-2xl font-extrabold tracking-wider leading-normal
                "
        >
          Furnitech
        </span>
      </a>
      <ul
        className=" 
                flex items-start  px gap-10  pl-[188px] pr-[188px] 
                text-[18px]  font-bold leading-[30px]
                transition-all duration-300 ease-out 
                text-brown-1000
            "
      >
        <li>
          <a href="#Home" class="hover:text-brown">
            Home
          </a>
        </li>
        <li>
          <a href="#Products" class="hover:text-brown">
            Products
          </a>
        </li>
        <li>
          <a href="#Blogs" class="hover:text-brown">
            Blogs
          </a>
        </li>
        <li>
          <a href="#About Us" class="hover:text-brown">
            About Us
          </a>
        </li>
      </ul>

      <ul>
        <li
          className=" 
                    flex justify-end items-center gap-6 w-{50px} h-{50px} pr-0 fill-brown-400 bg-brown-400
                    cursor-default md:cursor-pointer
                "
        >
          {/* <a
                        href="/"
                    //     onClick={() => setOpen(!open)}
                    // >
                    //     <img src="./assets/search.svg" name={`${open ? 'close' : 'search'}`} alt="find" className="fill-brown-400 bg-brown-400" />
                    </a> */}
          <a onClick={handlePersonIconClick}>
            <img
              src="./assets/person.svg"
              alt="person"

            />
          </a>
          <a onClick={handleCartClick}>
            <img
              src="./assets/shopping.svg"
              alt="store"

            />
          </a>
        </li>
      </ul>

      {/* Search nav */}
      {/* <ul
                classname={`
                md:hidden bg-brown-400 absolute w-full h-full bottom-0 py-24 pl-4
                duration-300 ${open ? 'left-0' : 'left-[100%]'}
                `}
            >

            </ul> */}
    </nav>
  );
};
export default Headers;
