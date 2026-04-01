import { MdArrowOutward } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";
// flex items-center grow justify-between
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <nav className="shadow-md rounded-xl md:shadow-none md:rounded-none w-full py-3">
      <div className="flex justify-between items-center h-13 max-w-6xl w-[90%] mx-auto ">
        <div className="font-bold text-3xl">Area</div>
        <div
          className={`${isOpen ? "flex" : "hidden"} flex-col w-full h-100 bg-white fixed absolute top-17 left-0 z-10 md:items-center md:grow md:justify-between md:static`}
        >
          <div className="hidden md:block"></div>
          <div className="flex flex-col items-center gap-10">
            <a href="#">Benefits</a>
            <a href="#">Specifications</a>
            <a href="#">How-to</a>
            <a href="#">Contact Us</a>
          </div>
          <button className="flex items-center mx-auto mt-5 border  px-2 py-2 rounded-full bg-[#485C11] text-white cursor-pointer">
            <span>Learn More</span>
            <MdArrowOutward className="text-xs color-white" />
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <IoIosMenu className="text-3xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
