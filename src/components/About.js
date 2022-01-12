import React, { Component } from "react";
import ProfilePic from "./assets/profile_pic.png";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <section className="About" id="About">
        <h2>about</h2>
        <p>
          Currently living in San Diego, CA, I am finishing up my course work as
          a full stack developer with LEARN Academy. I am a big fan of
          automation and leaving the busy to machines and freeing up time for
          people to do things only people can do. I my love for coding started
          with good old fashion batch scripting and quickly moved over to
          Python. Now I'm learing JavaScript and Ruby and loving every moment of
          it.
        </p>
        <img
          className="About__ProfilePic"
          src={ProfilePic}
          alt="Kirk's Profile Pic"
        />
      </section>
    );
  }
}
