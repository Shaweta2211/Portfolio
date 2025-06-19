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
        <li><button onClick={() => setActiveComponent("certificate")}>Certificate</button></li>
        <li><button onClick={() => setActiveComponent("contact")}>Contact</button></li>
        <li><a href="/Shaweta_CV.pdf" download className="btn">Download CV</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
