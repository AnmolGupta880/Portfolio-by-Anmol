import React from "react";
import styled, { keyframes } from "styled-components";

// Skill Data
const skills = [
  { name: "HTML", level: "Intermediate", color: "#000000" }, // HTML Orange
  { name: "Tailwind CSS", level: "Intermediate", color: "#000000" }, // Tailwind Blue
  { name: "React.js", level: "Intermediate", color: "	#000000" },
   { name: "Express", level: "Intermediate", color: "#000000" },// React Light Blue
  { name: "Python", level: "Intermediate", color: "#000000" }, // Python Blue
  { name: "Java", level: "Basic", color: "#000000" }, // Java Orange
  { name: "SQL", level: "Basic", color: "#000000" }, 
   { name: "Wordpress", level: "Basic", color: "#000000" },// SQL Blue
];

const SkillCard = ({ name, level, color }) => {
  return (
    <CardWrapper color={color}>
      <StyledCard color={color}>
        <div className="content">
          <h3 className="text-lg font-bold">{name}</h3>
          <span className="level">{level}</span>
        </div>
      </StyledCard>
    </CardWrapper>
  );
};

export const Skills = () => {
  return (
    <StyledWrapper>
      <h2 className="title">My Skills</h2>
      <p className="subtitle">Technologies I'm proficient in</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </StyledWrapper>
  );
};

// Glowing Animation Effect
const glowAnimation = keyframes`
  0% { background-position: 0% 50%; opacity: 0.8; }
  50% { background-position: 100% 50%; opacity: 1; }
  100% { background-position: 0% 50%; opacity: 0.8; }
`;

// Glow Effect Wrapper
const CardWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(0, 255, 255, 0.4), rgba(255, 0, 255, 0.5));
    background-size: 400% 400%;
    animation: ${glowAnimation} 4s ease infinite;
    z-index: -1;
    opacity: 1;
    filter: blur(35px);
  }
`;

const StyledCard = styled.div`
  width: 180px;
  height: 150px;
  background: ${(props) => props.color};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;
  color: white;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 15px;
  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.2);

  .level {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.2);
    padding: 5px 10px;
    border-radius: 5px;
  }

  /* Hover Effect */
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px ${(props) => props.color}, 0px 0px 40px rgba(59, 130, 246, 0.5); /* Stronger blue glow */
  }
`;

const StyledWrapper = styled.div`
  text-align: center;
  padding: 50px 20px;
  background: #101820;

  .title {
    font-size: 32px;
    font-weight: bold;
    color: white;
  }

  .subtitle {
    color: #bbb;
    margin-bottom: 20px;
  }

  .skills-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export default Skills;
