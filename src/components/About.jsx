import React from "react";
import "../assets/css/style.css";


export const About = () => {
  return (
    <section className="about-hero">
      <div className="about-container ">
        

        <div className="about-main">
          {/* Left Section */}
          <div className="about-left">
            <h4>Hello, I’m</h4>
            <h1>Shaweta Sharma</h1>
            <h2>Frontend Web Developer</h2>
            <p>
              I design and develop engaging, accessible, and responsive websites using modern web technologies. With hands-on experience in the MERN stack, I turn creative ideas into real-world applications.
            </p>
            <div className="about-buttons">
              <a href="/public/Shaweta Resume (2) (1).pdf" className="btn glass" download>
                📄 Download CV
              </a>
              <a
                href="mailto:shawetapan2211@gmail.com"
                target="_blank"
                className="btn solid"
              >
                🚀 Hire Me
              </a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};
