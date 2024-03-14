import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiFillHome, AiOutlineUnorderedList, AiOutlineUser, AiOutlineContacts } from "react-icons/ai";

const Navbar = ({ aboutRef, servicesRef, contactRef, projectRef, ourplansRef }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the navbar if the screen size becomes larger
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs only once on component mount

  /* Auto mate scrolling */
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setNav(false); // Close the navbar after scrolling
  };

  return (
    <div class="fixed rounded-md -top-10 pt-10 left-1/2 transform -translate-x-1/2 z-10 flex justify-between items-center h-24 max-w-screen w-full px-4 bg-[#000000] text-white">
      <h1 className="w-full text-3xl font-bold text-[#b54b9f] cursor-pointer hover:text-gray-400 transition-colors duration-300">
        Saika Nepal
      </h1>
      <ul className=" hidden md:flex ">
        <li
          className="p-4 flex items-center hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(aboutRef)}
        >
          <AiFillHome size={20} className=" mr-1" /> Home
        </li>
        <li
          className="p-4 flex items-center hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(servicesRef)}
        >
          <AiOutlineUnorderedList className=" mr-1" size={20} /> Services
        </li>
        <li
          className="p-4 flex items-center hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(projectRef)}
        >
          <AiOutlineUser className=" mr-1" size={20} /> Career
        </li>
        <li
          className="p-4 flex items-center hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(contactRef)}
        >
          <AiOutlineContacts className=" mr-1" size={20} /> Contact
        </li>
        <li
          className="p-4 flex items-center hover:text-[#b54b9f] cursor-pointer transition-colors duration-300"
          onClick={() => scrollToRef(ourplansRef)}
        >
          <AiOutlineMenu size={20} className=" mr-1" /> Plans
        </li>
      </ul>
      {/* Toggle to display menu */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed  z-10 left-0 max-h-max top-10 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out      duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#b54b9f] m-4  hover:text-gray-400 transition-colors duration-300 cursor-pointer">
          Saika Nepal
        </h1>
        <li
          className="p-4 bg-[#000300] border-b border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(aboutRef)}
        >
          <AiFillHome className=" mr-1"  size={20} /> Home
        </li>
        <li
          className="p-4 bg-[#000300] border-b border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(contactRef)}
        >
          <AiOutlineContacts className=" mr-1"  size={20} /> Contact
        </li>
        <li
          className="p-4 border-b bg-[#000300] border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300 flex items-center"
          onClick={() => scrollToRef(servicesRef)}
        >
          <AiOutlineUnorderedList className=" mr-1"  size={20} /> Our Services
        </li>
        <li className="p-4 border-b bg-[#000300] border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300 flex items-center" onClick={() => scrollToRef(projectRef)}>
          <AiOutlineUser size={20} className=" mr-1"  /> Career
        </li>
        <li className="p-4 border-b bg-[#000300] border-gray-600 hover:text-[#b54b9f] cursor-pointer transition-colors duration-300 flex items-center" onClick={() => scrollToRef(ourplansRef)}>
          <AiOutlineMenu size={20} className=" mr-1"  /> Our Plans
        </li>
      </ul>
    </div>
  );
};

export default Navbar;