const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Building the <span className="text-indigo-600">Future</span> With React.
      </h1>
      <p className="mt-6 text-lg text-slate-600">
        I'm developer specializing in modern web interfaces using Tailwind CSS
        and Vite
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="#projects"
          className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
