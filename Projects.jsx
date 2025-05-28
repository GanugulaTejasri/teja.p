import React from 'react';
 // Link to your CSS styles
import { HashRouter as Router } from "react-router-dom";

const projectData = [
  {
    title: "Telegram Mini App",
    image: "https://res.cloudinary.com/dpgznywjo/image/upload/v1748327767/ChatGPT_Image_May_27_2025_12_07_25_PM_oyyruc.png", // place in public/images/
    description: "Built a chat/game integration system using MERN stack and blockchain support.",
    link: "https://www.linkedin.com/posts/tejasri-ganugula-98801a274_telegram-miniapps-webdevelopment-activity-7324268337138409472-Q7nP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELsGfgBReEN5ewmeKv_PyUtk7tM4dsraW4"
  },
  {
    title: "Student Performance Predictor",
    image: "https://res.cloudinary.com/dpgznywjo/image/upload/v1748339772/Student_Performance_Predictor_Concept_1_fqcyik.png",
    description: "Python-based regression analysis tool for academic performance prediction.",
    link: "https://github.com/GanugulaTejasri/Education-rural"
  },
  {
    title: "Portfolio Website",
    image: "https://res.cloudinary.com/dpgznywjo/image/upload/v1748339934/Portfolio_Website_Design_in_Progress_yph7nv.png",
    description: "Personal responsive portfolio built with React and custom CSS.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className='page'>
    <div className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">— Projects Done —</p>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-img-circle">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-button">View Project</a>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Projects;
