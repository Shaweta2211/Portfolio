import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Home } from "./Pages/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Certificates } from "./components/Certficates";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home");

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "experience":
        return <Experience />;
      case "certificate":
        return <Certificates />;
        case "project":
          return <Projects />
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
