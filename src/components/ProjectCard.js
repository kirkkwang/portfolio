import React, { Component } from "react";
import linkIcon from "./assets/project_link.svg";
import githubIcon from "./assets/project_github.svg";
import "./ProjectCard.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="ProjectCard">
        <a href={this.props.projectLink} target="_blank" rel="noreferrer">
          <img
            className="ProjectCard__Img"
            src={this.props.img}
            alt={this.props.alt}
          />
        </a>
        <h3>
          <a className="ProjectCard__Title" href={this.props.projectLink}>
            {this.props.title}
          </a>
        </h3>
        <p>{this.props.desc}</p>
        <div className="ProjectCard__Links">
          <a href={this.props.projectLink} target="_blank" rel="noreferrer">
            <img
              className="ProjectCard__ProjectLinkIcon"
              src={linkIcon}
              alt="New Window Project Link"
            />
          </a>
          <a href={this.props.githubLink} target="_blank" rel="noreferrer">
            <img
              className="ProjectCard__ProjectGithubIcon"
              src={githubIcon}
              alt="New Window Project Link"
            />
          </a>
        </div>
      </div>
    );
  }
}
