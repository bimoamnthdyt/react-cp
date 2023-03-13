import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6 text-white">
      <h1 className="w-full text-3xl font-bold text-white">Darkcode.id</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Products</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[65%] h-full border-r border-r-gray-700 bg-[#000300] ease-in-out duration-700 text-[#C0C0C0]" : "fixed left-[-100%]"}>
        <ul className="uppercase p-8">
          <li className="p-7 ">Home</li>
          <li className="p-7 ">Products</li>
          <li className="p-7 ">Resource</li>
          <li className="p-7">About</li>
          <li className="p-7">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
