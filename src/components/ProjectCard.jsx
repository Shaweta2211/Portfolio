import React from "react";

export const ProjectCard = ({ title, icon, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>
        <span>{icon}</span>
        {title}
      </h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};
