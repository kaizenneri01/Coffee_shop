import React from "react";
import "./contact-us-styles.css";

const ContactUs = () => {
  return (
    <div className="contact__container">
      <div className="contact__title">CONTACT US</div>
      <div className="contact__box">
        <form className="contact__form">
          <label>
            Name :<input type="text" name="name" />
          </label>
          <label>
            Email :<input type="text" name="name" />
          </label>
          <label>
            Subject :<input type="text" name="name" />
          </label>
          <label className="contact__textbox">
            Message:
            <textarea
              name="textmessage"
              placeholder="Type your Message"
            ></textarea>
          </label>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
