import React from "react";
import "./projectsPage.css";
import projectsData from "./ProjectsData.js";

const ProjectsPage = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="project_details">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <h5 className="project-category">{project.category}</h5>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3 className="project-title">{project.title}</h3>

            {/* Description */}
            <ul className="project-description">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            {/* ✅ Tools Used Section */}
            <div className="tools-section">
              <h4>🛠 Tools Used</h4>
              <div className="tools-list">
                {project.tools.map((tool, index) => (
                  <span key={index} className="tool-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
