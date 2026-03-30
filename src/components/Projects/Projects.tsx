const projectList = [
  { id: 1, name: "E-Commerce App", desc: "React + TS + Tailwind" },
  { id: 2, name: "SaaS Dashboard", desc: "Complex Grid Layouts" },
  { id: 3, name: "AI Chat Interface", desc: "Framer Motion & Tailwind" },
];
const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((p) => (
          <div
            key={p.id}
            className="group p-8 border border-slate-100 rounded-3xl bg-slate-50 hover:shadow-2xl hover:-translate-y-2 tranition-all duration-300"
          >
            <div className="h-40 bg-indigo-100 rounded-2xl mb-4 flex justify-center items-center group-hover:bg-indigo-200 transition-colors">
              <span className="text-4xl">💻</span>
            </div>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-slate-500 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
