import React from "react";

const Navbar = ({ setActiveComponent }) => {
  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className="nav-links">
        <li><button onClick={() => setActiveComponent("home")}>Home</button></li>
        <li><button onClick={() => setActiveComponent("about")}>About</button></li>
        <li><button onClick={() => setActiveComponent("skills")}>Skills</button></li>
        <li><button onClick={() => setActiveComponent("experience")}>Experience</button></li>
        <li><button onClick={() => setActiveComponent("certificate")}>Certificates</button></li>
        <li><button onClick={() => setActiveComponent("project")}>Projects</button></li>
        <li><button onClick={() => setActiveComponent("contact")}>Contact</button></li>
        <li><a href="/public/Shaweta Resume (2) (1).pdf" download className="btn">Download CV</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
