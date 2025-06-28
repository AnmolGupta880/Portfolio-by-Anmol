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
    deploy: "https://shield-women-safety-app.vercel.app",
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

// Make the link block-level
const StyledLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
`;

// Styled Card
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
  position: relative;
  z-index: 0;
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
          <StyledLink
            key={index}
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledCard>
              {/* Ping Effect */}
              <div className="ping">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span>
              </div>

              {/* Project Info */}
              <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <p className="text-gray-400 mt-2 text-sm">Tech: {project.tech}</p>
            </StyledCard>
          </StyledLink>
        ))}
      </div>
    </div>
  );
};

export default Projects;
