import React from "react";
import "../assets/css/style.css";

export const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container ">
        <h3 className="experience-heading">💼 Experience</h3>

        <div className="experience-card">
          <h4>🚀 MERN Stack Intern</h4>
          <h5>Rackron Technologies Pvt Ltd</h5>
          <p className="experience-duration">January 2025 – June 2025</p>
          <p>
            During my internship at Rackron Technologies, I worked on real-world web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). I contributed to both frontend and backend development, implemented RESTful APIs, and helped design dynamic user interfaces. This experience enhanced my understanding of full-stack development, version control (Git), and collaborative teamwork in an Agile environment.
          </p>
        </div>
      </div>
    </section>
  );
};
