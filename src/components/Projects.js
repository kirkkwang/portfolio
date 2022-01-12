import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { projectCardLinks } from "./projectCardLinks";
import "./Projects.css";

export default class Projects extends Component {
  render() {
    return (
      <section className="Projects" id="Projects">
        <h2>projects</h2>
        <p>
          My goal with these projects are not only to showcase what I have done,
          but also how far I've come. Of course with any project, when I look
          back I think, "oh now that I know this concept, I could have used it
          here". What's important to me is documenting how I used to do things
          and comparing it to the way I would do it now, and also in the future.
          I strive to always be learning and always be growing.
        </p>
        <div className="ProjectCard__Cards">
          {projectCardLinks.map((project, idx) => {
            return (
              <ProjectCard
                title={project.title}
                desc={project.desc}
                img={project.img}
                alt={project.alt}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
                key={idx}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
