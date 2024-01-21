import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
      <div className="px-[8vw]">
        <section className="relative">
          <Navbar />
        </section>
        <section>
          <Hero />
        </section>
        <section className="my-20">
          <About />
        </section>
        <section className="my-20">
          <Projects />
        </section>
        <section className="my-20">
          <Skills />
        </section>
        <section className="my-20">
          <Contact />
        </section>
      </div>
        <section className="mt-20">
          <Footer />
        </section>
    </div>
  );
}

export default App;
