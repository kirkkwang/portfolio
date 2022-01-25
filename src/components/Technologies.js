import React, { Component } from "react";
import { techLogos } from "./techLogos.js";
import "./Technologies.css";

export default class Technologies extends Component {
  render() {
    return (
      <section className="Technologies" id="Technologies">
        <h2>technologies</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="Technologies__Logos">
          {techLogos.map((path, idx) => {
            return (
              <div>
                <svg
                  viewBox="0 0 72 72"
                  xmlns="http://www.w3.org/2000/svg"
                  key={idx}
                  role="image"
                >
                  <path d={path.d} />
                </svg>
                <br />
                {path.text}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
