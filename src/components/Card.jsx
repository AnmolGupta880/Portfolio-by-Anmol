import React from "react";
import styled from "styled-components";

// Skill Data
const skills = [
  { name: "HTML", color: "#F16529" }, // Orange
  { name: "Tailwind CSS", color: "#06B6D4" }, // Cyan
  { name: "React.js", color: "#61DBFB" }, // Blue
  { name: "Python", color: "#FFD43B" }, // Yellow
  { name: "Java", color: "#007396" }, // Dark Blue
  { name: "SQL", color: "#4479A1" }, // Blue
];

const Card = () => {
  return (
    <StyledWrapper>
      <h2 className="title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="card" style={{ backgroundColor: skill.color }}>
            <div className="border" />
            <div className="content">
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </StyledWrapper>
  );
};

// Styled Components for Custom Styles
const StyledWrapper = styled.div`
  text-align: center;
  padding: 50px;
  background: black;
  color: white;

  .title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .card {
    width: 140px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .card:hover {
    transform: scale(1.1);
  }

  .border {
    position: absolute;
    inset: 5px;
    border: 2px solid white;
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
  }

  .card:hover .border {
    opacity: 1;
    inset: 0;
  }

  .content {
    z-index: 2;
    font-size: 1rem;
    font-weight: bold;
  }

  .skill-name {
    color: white;
  }
`;

export default Card;
