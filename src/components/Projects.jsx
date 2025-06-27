import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import "../assets/css/style.css"

export const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Personal Portfolio",
      icon: "💼",
      description: "A sleek personal portfolio built with React and styled components.",
      // image: "/images/portfolio.png",
      link: "https://github.com/Shaweta2211/Portfolio"
    },
    {
      id: 2,
      title: "Rentify – Rental Website",
      icon: "🏠",
      description: "A MERN stack property rental platform for listing, browsing, and renting properties.",
      // image: "/images/rentify.png",
      link: "https://github.com/Shaweta2211/Rentify-Rental-Property-Website"
    },
    {
      id: 3,
      title: "Ecomus – E-Commerce Website",
      icon: "🛒",
      description: "A feature-rich e-commerce site built with React and integrated shopping cart.",
      // image: "/images/ecomus.png",
      link: "https://github.com/Shaweta2211/Ecommerce-Website"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>🚀 My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              icon={project.icon}
              description={project.description}
              // image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
