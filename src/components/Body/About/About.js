import React from "react";
import "./About.css";
import codingPhoto from "../../../Assets/Coding.png";
import SocialContact from "../../../Common/Social-Contact/SocialContact";
function About() {
  return (
    <div className="about">
      <div className="about__top">
        <div className="about__info">
          Hello World ! I am
          <br /> <span className="info__name">Mohit Gupta</span>
          <br /> I love experimenting With Web.
        </div>
        <div className="about__photo">
          <img src={codingPhoto} alt="coding" className="picture" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
