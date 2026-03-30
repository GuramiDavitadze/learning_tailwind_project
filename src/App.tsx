import { Navbar, Hero, Contact, Projects } from "./components";
function App() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>© {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
