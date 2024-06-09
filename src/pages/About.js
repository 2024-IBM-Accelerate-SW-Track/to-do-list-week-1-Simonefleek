import React from "react";
import "./About.css";
import profilePic from "../assets/profile_pic_name.jpg"; // Replace with your actual file name

const About = () => (
  <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profilePic}
          alt="Profile Pic"
        />
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Simone Ware</div>
        <div className="brief_description">
          My name is Símone Ware, and I am a rising junior at the New York Institute of Technology, majoring in Computer Science with a focus on Cloud Engineering.
        </div>
      </div>
    </div>
  </div>
);

export default About;
