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
                <svg
                  className={social.className}
                  alt={social.alt}
                  role="image"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d={social.d1} />
                  <path fill-rule="evenodd" clip-rule="evenodd" d={social.d2} />
                  <path d={social.d3} />
                </svg>
              </a>
            );
          })}
        </div>
        <p className="Blurb">established 2021</p>
      </footer>
    );
  }
}
