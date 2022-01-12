import React, { Component } from "react";
import "./ContactForm.css";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    };
  }

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <form className="ContactForm" onSubmit={handleSubmit}>
        <div className="ContactForm__Input__FirstName">
          <label className="ContactForm__Label__FirstName">first name</label>
          <input type="text" onChange={handleChange("firstName")} />
        </div>
        <div className="ContactForm__Input__LastName">
          <label className="ContactForm__Label__LastName">last name</label>
          <input type="text" onChange={handleChange("lastName")} />
        </div>
        <div className="ContactForm__Input__Email">
          <label className="ContactForm__Label__Email">email</label>
          <input type="text" onChange={handleChange("email")} />
        </div>
        <div className="ContactForm__TextArea__Message">
          <label className="ContactForm__Label__Message">message</label>
          <textarea onChange={handleChange("message")}></textarea>
        </div>
        <button>submit</button>
      </form>
    );
  }
}
