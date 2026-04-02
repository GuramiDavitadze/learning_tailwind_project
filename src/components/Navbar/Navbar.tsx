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
        <div className={`hidden md:flex items-center grow justify-between`}>
          <div className="hidden md:block"></div>
          <div className="flex items-center gap-10">
            <a href="#">Benefits</a>
            <a href="#">Specifications</a>
            <a href="#">How-to</a>
            <a href="#">Contact Us</a>
          </div>
          <button className="flex items-center px-2 py-2 rounded-full bg-[#485C11] text-white cursor-pointer">
            <span>Learn More</span>
            <MdArrowOutward className="text-xs color-white" />
          </button>
        </div>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoMdClose className="text-3xl" />
          ) : (
            <IoIosMenu className="text-3xl" />
          )}
        </button>
        <div
          className={`${isOpen ? "flex" : "hidden"} md:hidden items-center grow justify-between absolute top-16 left-0 flex-col bg-white w-full`}
        >
          <div className="hidden md:block"></div>
          <div className="flex flex-col gap-10 w-[90%]">
            <div className="w-full bg-black bg-slate-300  h-[1px]"></div>
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              Benefits
            </a>
            <div className="w-full bg-black bg-slate-300  h-[1px]"></div>
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              Specifications
            </a>
            <div className="w-full bg-black bg-slate-300  h-[1px]"></div>
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              How-to
            </a>
            <div className="w-full bg-black bg-slate-300  h-[1px]"></div>
            <a href="#" onClick={() => setIsOpen(!isOpen)}>
              Contact Us
            </a>
          </div>
          <button className="flex items-center mt-10 px-2 py-2 rounded-full bg-[#485C11] text-white cursor-pointer">
            <span>Learn More</span>
            <MdArrowOutward className="text-xs color-white" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
