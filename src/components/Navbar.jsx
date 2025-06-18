import React, { useState } from "react";
import "../assets/css/style.css";

import { Home } from "../Pages/Home"; // <-- Add this line
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Certificates } from "../components/Certficates";
import Contact from "../components/Contact";

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("home"); // Default to home

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />; // Render Home component
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "certificate":
        return <Certificates />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <ul className="nav-links">
          <li>
            <button
              onClick={() => setActiveComponent("home")}
              className={activeComponent === "home" ? "active" : ""}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("about")}
              className={activeComponent === "about" ? "active" : ""}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("skills")}
              className={activeComponent === "skills" ? "active" : ""}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("experience")}
              className={activeComponent === "experience" ? "active" : ""}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("certificate")}
              className={activeComponent === "certificate" ? "active" : ""}
            >
              Certificate
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent("contact")}
              className={activeComponent === "contact" ? "active" : ""}
            >
              Contact
            </button>
          </li>
          <li>
            <a href="/cv.pdf" download className="btn">
              Download CV
            </a>
          </li>
        </ul>
      </nav>

      {/* Render the selected section below the navbar */}
      <div className="section-container">{renderComponent()}</div>
    </>
  );
};

export default Navbar;
