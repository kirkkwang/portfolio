import React, { Component } from "react";
import { socialLinks } from "./socialLink";
import "./Social.css";

export default class Social extends Component {
  render() {
    return (
      <aside className="Social">
        {socialLinks.map((social, idx) => {
          return (
            <a href={social.href} target="_blank" rel="noreferrer" key={idx}>
              <img
                className={social.className}
                src={social.src}
                alt={social.alt}
              />
            </a>
          );
        })}
      </aside>
    );
  }
}
