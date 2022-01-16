import React from "react";
import "./mobile.css";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div
        className="close-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i className="fi fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <i className="fi fi-rr-edit-alt option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#Skills">
            <i className="fi fi-rr-laptop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="Experience">
            <i className="fi fi-rr-briefcase option-icon"></i>Experience
          </a>
        </div>
        <div className="mobile-option">
          <a href="Contact">
            <i className="fi fi-rr-user option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
