import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Social from "./components/Social";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Etc from "./components/Etc";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavBar />
          <Social />
        </header>
        <div className="Content">
          <Intro />
          <About />
          <Projects />
          <Technologies />
          <Etc />
          <div className="Contact__Component">
            <Contact />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
