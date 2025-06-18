import React from "react";
import "../assets/css/style.css";

// Reusable ExperienceCard component
const ExperienceCard = ({ title, company, duration, description }) => {
  return (
    <div className="experience-card">
      <h4>{title}</h4>
      <h5>{company}</h5>
      <p className="experience-duration">{duration}</p>
      <p>{description}</p>
    </div>
  );
};

// Main Experience component
export const Experience = () => {
  const experienceList = [
    {
      title: "🚀 MERN Stack Intern",
      company: "Rackron Technologies Pvt Ltd",
      duration: "January 2025 – June 2025",
      description:
        "During my internship at Rackron Technologies, I worked on real-world web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I contributed to both frontend and backend development, implemented RESTful APIs, and helped design dynamic user interfaces. This experience enhanced my understanding of full-stack development, version control (Git), and collaborative teamwork in an Agile environment.",
    },
    // You can add more experiences here in the future
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">
        <h3 className="experience-heading">💼 Experience</h3>

        {experienceList.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </div>
    </section>
  );
};
