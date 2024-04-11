import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 
  let Links = [
    { name: "Acerca de mí", link: "/" },
    { name: "Servicios", link: "/" },
    { name: "FAQ", link: "/" },
    { name: "Experiencia", link: "/" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white border-b border-gray-200 transition duration-200 ease-in">
      <div className=" md:px-10 py-4 px-7 md:flex justify-between items-center">
        {/* logo here */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <span className="font-bold">CareEPinga</span>
        </div>

        {/* Menu icons */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-8 top-6 cursor-pointer"
        >
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>

        {/* nav links here*/}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-16" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="font-semibold my-7 md:my-0 md:ml-7">
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
          <button className="btn bg-[#E6A4B4] text-white py-1 px-3 md:ml-8 rounded-lg">
            Contáctame
          </button>
        </ul>
      </div>
    </div>
    // <header
    //   className={`sticky top-0 z-20 px-6 sm:px-4 lg:px-8 py-4 ${
    //     isScrolled
    //       ? "bg-white shadow-md border-b border-gray-200 transition duration-200 ease-in"
    //       : "bg-transparent transition duration-200 ease-out"
    //   }`}
    // >
    //   <nav className="max-w-[1200px] md:flex items-center justify-between px-8 mx-auto">
    //     <a
    //       href="/"
    //       className="flex text-center flex-row gap-1 font-bold sm:text-lg"
    //     >
    //       <h2>Brenda Perales</h2>
    //       <h2>Psicología</h2>
    //     </a>
    //     <div className="flex items-center gap-4 lg:gap-5">
    //       <button
    //         className="p-2 text-sm text-dark-700 rounded-lg md:hidden"
    //         onClick={showNavBar}
    //       >
    //         { isOpen ? (
    //           <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //           >
    //               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    //           </svg>
    //         ) : (
    //           <AiOutlineClose />
    //         )}
    //       </button>
    //       {Links.map((link) => (
    //         <a href={link.link} className="hover:opacity-60 duration-600">
    //           {link.name}
    //         </a>
    //       ))}
    //     </div>
    //   </nav>
    // </header>
  );
}

export default Navbar;
