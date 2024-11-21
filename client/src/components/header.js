const menuLinks = [
    "Home",
    "Products",
    "Blogs",
    "About Us"
];

const headers = () => {
    return (
        <header className=" flex ">
            <div className="l-container flex items-center  justify-between">
                <a
                    href="/"
                    className=" space-x-0 text-3xl h-{35px}  flex  items-center gap-2.5 pr-14 "
                >
                    <img src="src\logo\Logo.svg" alt="Logo" width={37} height={37} />

                    <span className="">Furnitech</span>
                </a>
                <ul className=" flex items-start justify-center px gap-10">
                    {menuLinks.map((link) => (
                        <li key={link}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>



            </div>

        </header >

    )
}
export default headers