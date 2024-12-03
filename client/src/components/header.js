// src/components/header.js

const menuLinks = [
    "Home",
    "Products",
    "Blogs",
    "About Us"
];

const headers = ({ className, href, onClick, children, px }) => {
    return (

        <div className="
         flex justify-between items-center   py-[32px] l-container 
         ">
            <a
                href="/"
                className="  
                flex h-[34.349px] pr-[56.314px] items-center    
            ">
                <img src="./assets/Cir.svg" alt="Logo" width={37} height={37} />

                <span className="
                    text-black  font-DM Sans text-2xl font-extrabold tracking-wider leading-normal
                ">
                    Furnitech
                </span>
            </a>
            <ul className=" 
                flex items-start  px gap-10  pl-[188px] pr-[188px] 
                text-[18px]  font-bold leading-[30px]
                transition-colors hover:text-color-brown
            ">
                {menuLinks.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>

            <ul>
                <li className=" 
                    flex justify-end items-center gap-6 w-{50px} h-{50px} pr-0 fill-brown-400 bg-brown-400
                    
                ">

                    <a
                        href="/"
                    >
                        <img src="./assets/search.svg" alt="find" className="fill-brown-400 bg-brown-400" />
                    </a>
                    <a
                        href="/"
                    >
                        <img src="./assets/person.svg" alt="person" className="fill-brown-400 bg-brown-400" />
                    </a>
                    <a
                        href="/"
                    >
                        <img src="./assets/shopping.svg" alt="store" className="fill-brown-400 bg-brown-400" />
                    </a>
                </li>
            </ul>


        </div>



    )
}
export default headers