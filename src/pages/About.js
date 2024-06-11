import React ,{ Componet} from 'react';
import "./About.css";
import s4229 from "../assets/s4229.jpg"; // Use your actual file name here

const About = () => {
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <img 
            className="profile_image"
            src={4229}
            alt="Profile Pic"
          />
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Simone Ware </div>
          <div className="brief_description">
            <p>My name is Símone Ware, and I am a rising junior at the New York Institute of Technology, majoring in Computer Science with a focus on Cloud Engineering</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

