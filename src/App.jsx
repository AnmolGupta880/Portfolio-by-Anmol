import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";  
import Skills from "./components/SkillCard";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements"; 
import ContactForm from "./components/ContactForm";  
import Footer from "./components/Footer"


function App() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative min-h-screen  bg-gray-900 text-white">
      <Navbar />

      {/* Background Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "none", outModes: "out" },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center h-screen">
        <Hero />
      </div>

      {/* Skills Section */}
      <div className="relative z-10">
        <Skills />
      </div>

      {/* Projects Section */}
      <div className="relative z-10">
        <Projects />
      </div>

      {/* Achievements Section */}
      <div className="relative z-10">
        <Achievements />
      </div>

      {/* ✅ Contact Section - Added Below Achievements */}
      <div className="relative z-10">
        <ContactForm />
      </div>
      <div className="relative z-10 ">
        <Footer/>      </div>
    </div>
  );
}

export default App;
