import ContactForm from "./ContactForm";
export const contactFormInputfields = [
  {
    label: "first name",
    value: `${this.state.firstName}`,
    onchange: `${this.handleFirstNameChange}`,
  },
  {
    label: "last name",
    value: `${this.state.lastName}`,
    onchange: `${this.handleLastNameChange}`,
  },
  {
    label: "email",
    value: `${this.state.email}`,
    onchange: `${this.handleEmailChange}`,
  },
];
