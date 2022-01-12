import React, { Component } from "react";
import { navBarLinks } from "./navBarLinks.js";
import hamburger from "./assets/navbar_hamburger.svg";
import close from "./assets/navbar_close.svg";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburger: true,
    };
  }
  handleClick = () => {
    this.setState({ hamburger: !this.state.hamburger });
  };
  render() {
    return (
      <nav className="NavBar">
        <a href="#top">
          <h1 className="NavBar__Logo__Wrapper">
            <span className="NavBar__Logo__KIR">KIR</span>
            <span className="NavBar__Logo__K1">K</span>
            <span className="NavBar__Logo__K2">K</span>
            <span className="NavBar__Logo_W">W</span>
            <span className="NavBar__Logo__ANG">ANG</span>
          </h1>
        </a>
        <ul
          tabIndex="-1"
          className={
            this.state.hamburger
              ? "NavBar__Links__Wrapper"
              : "NavBar__Menu__Vertical"
          }
        >
          {navBarLinks.map((navLink, idx) => {
            return (
              <li
                className={
                  this.state.hamburger ? "NavBar__TextRow" : "NavBar__TextMenu"
                }
                key={idx}
              >
                <a href={navLink.href}>{navLink.label}</a>
              </li>
            );
          })}
        </ul>
        <input
          type="image"
          className={
            this.state.hamburger ? "NavBar__Hamburger" : "NavBar__Close"
          }
          onClick={this.handleClick}
          src={this.state.hamburger ? hamburger : close}
          alt="Hamburger Menu Icon"
        ></input>
      </nav>
    );
  }
}
