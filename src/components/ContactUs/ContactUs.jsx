import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-cnt">
      <h1>Contact Me!</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <p>Name</p>
        <input className='contact-field' type="text" name="user_name" placeholder="Name" />
        <p>Email</p>
        <input className='contact-field' type="email" name="user_email" placeholder="Email" />
        <p>Message</p>
        <textarea className='contact-textarea' name="message" />
        <input className='contact-submit' type="submit" value="Send" />
      </form>
    </div>
  );
};
