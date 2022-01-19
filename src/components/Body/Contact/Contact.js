import React from "react";
import "./Contact.css";
import Separator from "../../../Common/Separator/Separator";
import SocialContact from "../../../Common/Social-Contact/SocialContact";
function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platforms</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../Assets/resume.pdf")}>
            <i className="fi fi-rr-cloud-download"></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
