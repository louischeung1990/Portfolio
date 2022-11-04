import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_14bobew",
        form.current,
        YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <div className="contact-cnt">
      <h1>Contact Me!</h1>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <p>Name</p>
        <input className='contact-field' type="text" name="name" placeholder="Name" />
        <p>Email</p>
        <input className='contact-field' type="email" name="email" placeholder="Email Address" />
        <p>Subject</p>
        <input className='contact-field' type="text" name="subject" placeholder="Subject" />
        <p>Message</p>
        <textarea className='contact-textarea' name="message" />
        <input className='contact-submit' type="submit" value="Send" />
      </form>
    </div>
  );
};
