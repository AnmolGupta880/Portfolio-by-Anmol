import React from "react";
import styled, { keyframes } from "styled-components";

// Project Data
const projects = [
  {
    title: "ReFokus.com Clone",
    description: "Replicated the Refokus website with smooth scrolling & animations.",
    tech: "React, Tailwind CSS, GSAP, Locomotive Scroll, Framer Motion",
  },
  {
    title: "Shield",
    description: "Women safety app with SOS alerts, location tracking, and IoT integration.",
    tech: "Java, XML, IoT (ESP8266)",
  },
  {
    title:"MarketPulse",
    description: "Developed a real-time stock insights platform integrating live stock updates, market trends, and financial news using APIs",
       tech: "React, Tailwind CSS, Axios, APIs (Alpha Vantage/Finnhub/Twelve Data)"
    deploy: "https://refokus-clone.vercel.app",  },
];

// Box-Shadow Animation
const shadowAnimation = keyframes`
  0% { box-shadow: 0px 0px 5px rgba(56, 189, 248, 0.2); }
  50% { box-shadow: 10px 20px 30px rgba(56, 189, 248, 0.6); }
  100% { box-shadow: 0px 0px 5px rgba(56, 189, 248, 0.2); }
`;

// Styled Project Card
const StyledCard = styled.div`
  width: 320px;
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
  position: relative; /* For ping animation */
  animation: ${shadowAnimation} 5s infinite ease-in-out; /* Box-Shadow Animation */

  &:hover {
    transform: scale(1.05);
  }
`;

const Projects = () => {
  return (
    <div  id="projects" className="text-center py-20 bg-gray-800">
      <h2 className="text-4xl font-bold text-white mb-6">My Projects</h2>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <StyledCard key={index}>
            {/* Animated Ping Effect */}
            <div className="absolute top-4 right-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
              </span>
            </div>
            

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-300 mt-2">{project.description}</p>

            {/* Technologies Used */}
            <p className="text-gray-400 mt-2 text-sm">Tech: {project.tech}</p>
          </StyledCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
