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
    <div className="overflow-x-hidden relative">
      {/* Page-level seamless background blobs — sit behind everything */}
      <div className="pointer-events-none fixed top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-main/5 blur-[140px] -z-10" />
      <div className="pointer-events-none fixed bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-purple-300/10 blur-[120px] -z-10" />

      <Navbar />

      <div className="px-[5vw] lg:px-[7vw]">
        <section className="pt-0">
          <Hero />
        </section>

        <section className="py-24">
          <About />
        </section>

        <section className="py-24">
          <Projects />
        </section>

        <section className="py-24">
          <Skills />
        </section>

        <section className="py-24">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
