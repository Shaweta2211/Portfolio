import React from "react";
import "../assets/css/style.css";

import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import bootstrapIcon from "../assets/images/bootstrap.jpeg";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.jpeg";
import nodeIcon from "../assets/images/node.png";
import expressIcon from "../assets/images/express.png";
import mongoIcon from "../assets/images/mongodb.png";
import gitIcon from "../assets/images/git.jpeg";
import githubIcon from "../assets/images/github.png";

export const Skills = () => {
  const skillsData = [
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS3", icon: cssIcon },
    { name: "Bootstrap5", icon: bootstrapIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React.js", icon: reactIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
  ];

  return (
    <section className="skills-section">
      <div className="skills-header ">
        <div className="skills-left">
          <p className="skills-subtitle">🔴 My Skills</p>
          <h2 className="skills-title">Skills That Drive Results</h2>
        </div>
        <div className="skills-right">
          <p>
            With a strong foundation in front-end technologies like HTML, CSS,
            JavaScript, and React.js, I create responsive, user-friendly
            interfaces that enhance the user experience. My backend expertise
            with Node.js, Express.js, and MongoDB allows me to build full-stack
            applications that are fast, scalable, and efficient. I also leverage
            Git and GitHub for version control and collaborative development,
            ensuring clean, maintainable code across projects.
          </p>
        </div>
      </div>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
