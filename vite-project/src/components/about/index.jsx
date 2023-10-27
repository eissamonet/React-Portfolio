import React from 'react';
import {Col} from 'react-bootstrap';
import profilePicture from '../../assets/profilepicture.jpeg';

function About() {
    return(
    <section className="title">
        <div className="row justify-content-center" id="about-container">
        <Col lg = "4" md = "6" sm = "12">
        <center><img src={profilePicture} className= "profile-picture" alt="eissa-profile"/></center>
        <p className="name">Eissa Purnell</p>
        <p className="title">Full Stack Web Developer</p>
        <h2 className="description">About Me</h2>
            <p>Hi, I'm Eissa! I am a Full Stack Web Developer with a background in psychology and social work. I am passionate about creating applications that are accessible to all users. I am a team player, and I am always looking for opportunities to learn and grow as a developer.</p>
        </Col>
        </div>
    </section>
    )}    

    export default About;
