import React, { Component } from "react";
import "./Intro.css";

export default class Intro extends Component {
  render() {
    return (
      <main className="Intro">
        <p className="Intro__LineOne">
          Hey there, I'm <span className="KIRK">KIRK</span>!
        </p>
        <p className="Intro__LineTwo">I am a developer who:</p>
        <ul className="Intro__LineThree">
          <li>works hard at effective communication</li>
          <li>actively engages in continuing my education</li>
          <li>never turns someone away who needs a little guidance</li>
          <li>gets results by putting the utmost respect into each project</li>
        </ul>
      </main>
    );
  }
}
