import React from "react";
import "./Body.css";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="about">
        <About />
      </section>
    </div>
  );
}

export default Body;
