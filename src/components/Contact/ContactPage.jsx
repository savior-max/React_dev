import React, { useEffect, useRef } from "react";
import Contact from "./Contact";
import "./ContactPage.css";

const ContactPage = ({ onSubmit, res }) => {
  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  });
  return (
    <div className="contactpage ">
      <div className="contactoverlay py-5">
        <Contact
          onSubmit={onSubmit}
          res={res}
          nameRef={nameRef}
          btn="outline-light"
        />
      </div>
    </div>
  );
};

export default ContactPage;
