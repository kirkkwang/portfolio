import React, { Component } from "react";
import { techLogos } from "./techLogos.js";
import "./Technologies.css";

export default class Technologies extends Component {
  render() {
    return (
      <section className="Technologies" id="Technologies">
        <h2>technologies</h2>
        <p>
          Listed here are the technologies that I am most familiar with. I am a
          quick learner and definitely want to play with more.
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
