// src/components/header.js

import { useState } from "react"


const headers = ({ className, href, onClick, children, px }) => {

    return (

        <nav className="
         w-[1920px] h-[114px] px-[350px]  justify-between  inline-flex items-center   py-[32px] l-container 
         md:bg-top bg-center
         ">
            <a
                href="/"
                className="  
                w-[261.31px] h-[34.35px] pr-[56.31px] justify-start items-center inline-flex   
            ">

                <div className="self-stretch py-px justify-start items-center gap-2.5 inline-flex" >
                    <img src="./assets/Cir.svg" alt="Logo" width={37} height={37} />

                    <span className="
                    text-black  font-DM Sans text-[32px] font-extrabold tracking-wide
                ">
                        Furnitech
                    </span>
                </div>
            </a>
            <ul
                className=" 
                h-[30px] justify-start items-start gap-10 inline-flex font-DM Sans font-normal leading-[30px]
                transition-all duration-300 ease-out 
                text-brown-1000
            ">
                <li><a href="#Home" class="hover:text-brown">Home</a></li>
                <li><a href="#Products" class="hover:text-brown" >Products</a></li>
                <li><a href="#Blogs" class="hover:text-brown">Blogs</a></li>
                <li><a href="#About Us" class="hover:text-brown">About Us</a></li>
            </ul>

            <ul>
                <li className=" 
                     h-[50px] justify-end items-center gap-6 inline-flex 
                    
                    cursor-default md:cursor-pointer
                ">

                    <a
                        href="/"
                        className="w-[50px] h-[50px] relative "

                    >
                        <img src="./assets/search.svg" alt="find"
                            className="
                            w-[50px] h-[50px] rounded-full
                            bg-[#f9f7f1]        
                            " />

                    </a>
                    <a
                        href="/"
                    >
                        <img src="./assets/person.svg" alt="person" className="fill-brown-400" />
                    </a>
                    <a
                        href="/"
                    >
                        <img src="./assets/shopping.svg" alt="store" className="fill-brown-400" />
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




    )
}
export default headers