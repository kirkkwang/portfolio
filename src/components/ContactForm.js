import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgedarol");
  if (state.succeeded) {
    return <p>Thanks for the message!</p>;
  }
  return (
    <form className="ContactForm" onSubmit={handleSubmit}>
      <div className="ContactForm__Input__FirstName">
        <label className="ContactForm__Label__FirstName">first name</label>
        <input id="first-name" type="first-name" name="first-name" />
      </div>
      <div className="ContactForm__Input__LastName">
        <label className="ContactForm__Label__LastName">last name</label>
        <input id="last-name" type="last-name" name="last-name" />
      </div>

      <div className="ContactForm__Input__Email">
        <label className="ContactForm__Label__Email" htmlFor="email">
          email
        </label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="ContactForm__TextArea__Message">
        <label className="ContactForm__Label__Message" htmlFor="message">
          message
        </label>
        <textarea id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        className="ContactForm__Submit"
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </button>
    </form>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
