import React, { useState, useRef } from "react";

import emailjs from "emailjs-com";

import "../styles/contact.css";

function ContactUs() {
  // for email status notifications
  const [buttonValid, setButtonValid] = useState(false);

  // for getting data from form tag
  const form = useRef();

  // form inputs
  const inputs = [
    { type: "text", name: "from_name", placeHolder: "NAME" },
    { type: "text", name: "title", placeHolder: "SUBJECT" },
    { type: "email", name: "from_email", placeHolder: "EMAIL" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    if (buttonValid) {
      //   emailjs.sendForm("", "", form.current, "").then((result) => {
      //     if (result.text === "OK") {
      //       form.current[1].value = "";
      //       form.current[3].value = "";
      //     } else {
      //     }
      //   });
    }
  };

  const formHandler = () => {
    if (
      form.current[0].value &&
      form.current[1].value &&
      form.current[2].value &&
      form.current[3].value
    ) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  };

  return (
    <>
      <div className="contact-page">
        <section className="email-section">
          <h2>Contact me</h2>
          <p>
            IF YOU WANT OT KNOW ANYTHING ABOUT SHOES OR KNOW ABOUT OUR COMPOANY
          </p>
          <form
            ref={form}
            className="form-section"
            onChange={formHandler}
            onSubmit={sendEmail}
          >
            {inputs.map((input, index) => (
              <input
                type={input.type}
                placeholder={input.placeHolder}
                name={input.name}
                key={index}
                required
              />
            ))}
            <textarea placeholder="TEXT" name="message" />
            <button type="submit" className={buttonValid ? "valid" : "invalid"}>
              SEND
            </button>
          </form>
        </section>
        <section className="landing-section">
        </section>
      </div>
    </>
  );
}

export default ContactUs;
