import React from "react";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Certificates } from "../components/Certficates";
import Contact from "../components/Contact";

export const Home = () => {
  return (
    <>
 
      <About />
      <Skills />
      <Experience />
      <Certificates />
      <Contact />
    </>
  );
};
