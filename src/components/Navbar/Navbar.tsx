const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-slate-200">
      <div className="text-xl font-bold text-indigo-600">DevLogo</div>

      <div className="hidden md:flex gap-6 text-slate-600 font-medium">
        <a href="#" className="hover:text-indigo-600 transition">
          Home
        </a>
        <a href="#" className="hover:text-indigo-600 transition">
          Projects
        </a>
        <a href="#" className="hover:text-indigo-600 transition">
          Contact
        </a>
      </div>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer active:scale-95 transition-all">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
