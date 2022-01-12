import React, { Component } from "react";
import "./Contact.css";
import ContactForm from "./ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <section>
        <h2 id="Contact">contact</h2>
        <p className="Contact__Blurb">Hey, wanna collaborate?</p>
        <ContactForm />
      </section>
    );
  }
}
