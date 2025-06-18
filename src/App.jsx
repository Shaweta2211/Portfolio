import Navbar from "./components/Navbar";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
    <Navbar/>
    
      <Home />
    </>
  );
}

export default App;




// import React, { useState } from "react";
// import Navbar from "./components/Navbar";
// import { Home } from "./Pages/Home";
// import { About } from "./components/About";
// import { Skills } from "./components/Skills";
// import { Experience } from "./components/Experience";
// import { Certificates } from "./components/Certficates";
// import Contact from "./components/Contact";

// const App = () => {
//   const [activeComponent, setActiveComponent] = useState("about");

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "home":
//         return<Home />;
//       case "about":
//         return <About />;
//       case "skills":
//         return <Skills />;
//       case "experience":
//         return <Experience />;
//       case "certificate":
//         return <Certificates />;
//       case "contact":
//         return <Contact />;
//       default:
//         return <About />;
//     }
//   };

//   return (
//     <div>
//       <Navbar setActiveComponent={setActiveComponent} />
//       <div className="content">
//         {renderComponent()}
//       </div>
//     </div>
//   );
// };

// export default App;

