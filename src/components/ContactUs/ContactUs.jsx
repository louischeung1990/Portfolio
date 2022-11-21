import React, { useRef } from "react";
import "./ContactUs.css";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_YOUR_SERVICE_ID, 
      process.env.REACT_APP_YOUR_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          // console.log(result.text)
          setAlertContent({
            heading: "Thank you for contacting me.", 
            message: "I will respond to your message as soon as I can."
          })
          setShowAlert(true);
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
        <textarea className='contact-textarea' name="message" placeholder="Your message" />
        <input className='contact-submit' type="submit" value="Send" />
      </form>
    </div>
  );
};
