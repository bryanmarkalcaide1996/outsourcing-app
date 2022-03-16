import "./ContactUs.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_USER_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PROFILE_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (

    <section className="contact-section">
      <form ref={form} className="form" onSubmit={sendEmail}>
        <h1 className="suggestion">Have suggestions?</h1>
        <input
          autoComplete="off"
          type="text"
          placeholder="Full Name"
          name="user_name"
          className="contact-input"
        />
        <input
          autoComplete="off"
          type="email"
          placeholder="Email"
          name="user_email"
          className="contact-input"
        />
        <input
          autoComplete="off"
          type="text"
          placeholder="Subject"
          name="user_subject"
          className="contact-input"
        />
        <textarea
          name="message"
          rows="10"
          placeholder="Your message"
          className="contact-input"
        />
        <input
          autoComplete="off"
          type="button"
          value="Send"
          className="contact-input"
        />
      </form>
    </section>
  );
};

export default ContactUs;
