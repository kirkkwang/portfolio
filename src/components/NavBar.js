import React, { Component } from "react";
import { navBarLinks } from "./navBarLinks.js";
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
        <label>
          <input
            className={
              this.state.hamburger ? "NavBar__Hamburger" : "NavBar__Close"
            }
            type="submit"
            name="image"
            onClick={this.handleClick}
            alt="Hamburger Menu Icon"
          />
          {this.state.hamburger ? (
            <svg
              className="NavBar__Hamburger__SVG"
              width="36"
              viewBox="0 0 36 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z" />
            </svg>
          ) : (
            <svg
              className="NavBar__Close__SVG"
              width="26"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 2.41714L21.5829 0L12 9.58286L2.41714 0L0 2.41714L9.58286 12L0 21.5829L2.41714 24L12 14.4171L21.5829 24L24 21.5829L14.4171 12L24 2.41714Z" />
            </svg>
          )}
        </label>
      </nav>
    );
  }
}
