import React from "react";
import shawetaresume from "../assets/ShawetaResume.pdf"


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
        <li><a href={shawetaresume} download className="btn">Download CV</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import shawetaresume from "../assets/ShawetaResume.pdf";

// const Navbar = ({ setActiveComponent }) => {
//   const [isNavCollapsed, setIsNavCollapsed] = useState(true);

//   const handleToggle = () => {
//     setIsNavCollapsed(!isNavCollapsed);
//   };

//   const handleClick = (component) => {
//     setActiveComponent(component);
//     setIsNavCollapsed(true); // collapse after click (mobile UX)
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">MyPortfolio</a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           aria-controls="navbarSupportedContent"
//           aria-expanded={!isNavCollapsed}
//           aria-label="Toggle navigation"
//           onClick={handleToggle}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`} id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleClick("home")}>Home</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleClick("about")}>About</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleClick("skills")}>Skills</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleClick("experience")}>Experience</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleClick("certificate")}>Certificates</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleClick("project")}>Projects</button>
//             </li>
//             <li className="nav-item">
//               <button className="nav-link btn" onClick={() => handleClick("contact")}>Contact</button>
//             </li>
//             <li className="nav-item">
//               <a href={shawetaresume} download className="nav-link btn btn-primary text-white">
//                 Download CV
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
