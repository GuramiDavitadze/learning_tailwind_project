import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex top-0 z-10 items-center justify-between p-4 bg-white border-b border-slate-200 sticky">
      <div className="text-xl font-bold text-indigo-600">DevLogo</div>

      <div className="hidden md:flex gap-6 text-slate-600 font-medium">
        <a href="#hero" className="hover:text-indigo-600 transition">
          Home
        </a>
        <a href="#projects" className="hover:text-indigo-600 transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-indigo-600 transition">
          Contact
        </a>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
      >
        {isOpen ? <div>Close</div> : <div>Open</div>}
      </button>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:scale-95 transition-all">
        Get Started
      </button>
      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden w-3xs bg-white border-b border-slate-200 p-4 space-y-4 absolute right-0 top-0`}
      >
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="block text-slate-600 font-medium"
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => setIsOpen(false)}
          className="block text-slate-600 font-medium"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="block text-slate-600 font-medium"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
