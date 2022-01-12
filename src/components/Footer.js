import React, { Component } from "react";
import { socialLinks } from "./socialLink";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="Footer__Social">
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
        </div>
        <p className="Blurb">established 2021</p>
      </footer>
    );
  }
}
