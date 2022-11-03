import React from "react";
import Louis from "../../images/Louis.jpg";
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="background-about">
      <br></br>
      <div className="about-cnt">
        <div className="photo-cnt">
          <img src={Louis} alt='Louis'/>
        </div>
        <div className="about-me">
          <h1>Louis Cheung</h1>
          <h2>Full-Stack Developer</h2>
          <p>I am a software developer with experience in engineering and research. I have a life-long 
            passion for learning, and combined with a track record of collaborative work with 
            professionals from varying backgrounds, I'm excited to work with you to build solutions 
            and drive disruptive and innovative change. Nothing excites me more than the technical challenge 
            posed to me, and to be able to share in the tribulations, joy and triumph with others during 
            this process.
          </p>
          <span>
            <a href='https://linkedin.com/in/louis-cheung-dev/' target='_blank'>
              <img src={linkedin} alt='LinkedIn logo' />
            </a>
            <a href='https://github.com/louischeung1990' target='_blank'>
              <img src={github} alt='GitHub logo' />
            </a>
          </span>
        </div>
        <div className="about-skills">
          <h2>Tech Stacks</h2>
          <p>MERN Stack - MongoDB, Express, React, Node.js</p>
          <p>Python/Django/PostgreSQL</p>
          <p>JavaScript/HTML/CSS</p>
          <h2>Frameworks and Libraries</h2>
          <p>React: Redux and Styled-components</p> 
          <p>AWS S3, socket.io</p>
          <p>API integration: Leaflet maps
            and geocoding, PokeAPI </p>
          <h2>Deployment</h2>
          <p>Github, Heroku</p>
        </div>
      </div>
    </div>
  );
}
