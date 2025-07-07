import React from "react";
import styled, { keyframes } from "styled-components";

// Project Data
const projects = [
  {
    title: "ReFokus.com Clone",
    description: "Replicated the Refokus website with smooth scrolling & animations.",
    tech: "React, Tailwind CSS, GSAP, Locomotive Scroll, Framer Motion",
    deploy: "https://refokus-clone.vercel.app",
  },
  {
    title: "Shield",
    description: "Women safety app with SOS alerts, location tracking, and IoT integration.",
    tech: "Java, XML, IoT (ESP8266)",
    deploy: "",
  },
  {
    title: "MarketPulse",
    description: "Developed a real-time stock insights platform integrating live stock updates, market trends, and financial news using APIs",
    tech: "React, Tailwind CSS, Axios, APIs (Alpha Vantage/Finnhub/Twelve Data)",
    deploy: "https://marketpulse123.netlify.app/",
  },
];

// Animation
const shadowAnimation = keyframes`
  0% { box-shadow: 0px 0px 5px rgba(56, 189, 248, 0.2); }
  50% { box-shadow: 10px 20px 30px rgba(56, 189, 248, 0.6); }
  100% { box-shadow: 0px 0px 5px rgba(56, 189, 248, 0.2); }
`;

// Outer wrapper to maintain layout + size
const CardWrapper = styled.div`
  width: 320px;
`;

// Make the <a> full size inside wrapper
const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

// Card Design
const StyledCard = styled.div`
  width: 100%;
  padding: 20px;
  background: #1e293b;
  color: white;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  animation: ${shadowAnimation} 5s infinite ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  .ping {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1;
  }
`;

const Projects = () => {
  return (
    <div id="projects" className="text-center py-20 bg-gray-800">
      <h2 className="text-4xl font-bold text-white mb-6">My Projects</h2>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <CardWrapper key={index}>
            <StyledLink
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              import React from "react";

const Projects = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Project 1: Example Project with Live Demo */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">AeroGuide</h2>
        <p className="mb-4">
          A comprehensive guide platform for aspiring pilots. Includes DGCA exam
          roadmap, cadet and CPL program breakdown, flying schools, and training flow.
        </p>

        {/* ✅ Live Demo Button (as requested) */}
        <a
          href="https://your-project-demo-link.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          >
            Live Demo
          </button>
        </a>
      </div>

      {/* Project 2: Shield (unchanged, no button added here) */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Shield (Women Safety App)</h2>
        <p>
          An Android app built with Java and IoT integration. Features include SOS alerts,
          location tracking, mental health assistance, and Firebase real-time data.
        </p>
      </div>
    </div>
  );
};

export default Projects;

            >
              <StyledCard>
                <div className="ping">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <p className="text-gray-400 mt-2 text-sm">Tech: {project.tech}</p>
              </StyledCard>
            </StyledLink>
          </CardWrapper>
        ))}
      </div>
    </div>
  );
};

export default Projects;
