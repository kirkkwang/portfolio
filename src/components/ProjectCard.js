import React, { Component } from "react";
import { projectLinkIcon } from "./projectCardLinks";
import { projectGithubIcon } from "./projectCardLinks";
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
            <svg
              className="ProjectCard__ProjectLinkIcon"
              alt="New Window Project Link"
              role="image"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={projectLinkIcon[0]} />
              <path d={projectLinkIcon[1]} />
            </svg>
          </a>
          <a href={this.props.githubLink} target="_blank" rel="noreferrer">
            <svg
              className="ProjectCard__ProjectGithubIcon"
              alt="New Window GitHub Link"
              role="image"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d={projectGithubIcon}
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }
}
