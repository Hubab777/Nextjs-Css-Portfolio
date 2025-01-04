'use client';

import React from 'react';
import Heading from './Heading';
import { LuGraduationCap } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineGithub } from "react-icons/ai";
import '../style/about.css';

const About = () => {
  return (
    <div id="about" className="about-container">
      <Heading title="About Me" />
      <div className="about-grid">
        {/* Image Section */}
        <div className="about-image">
          <img src="/about-me.png" alt="About Me" />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <div className="about-info">
            {/* Icons and Titles */}
            <div className="about-icons">
              <div className="about-icon-item">
                <LuGraduationCap className="about-icon" />
                Qualification
              </div>
              <div className="about-icon-item">
                <GrUserExpert className="about-icon" />
                Experience
              </div>
              <div className="about-icon-item">
                <MdMenuBook className="about-icon" />
                Certification
              </div>
              <div className="about-icon-item">
                <SiHyperskill className="about-icon" />
                Interest
              </div>
              <div className="about-icon-item">
                <FaLinkedin className="about-icon" />
                Linkedin Link
              </div>
              <div className="about-icon-item">
                <AiOutlineGithub className="about-icon" />
                GitHub Link
              </div>
            </div>

            {/* Colons */}
            <div className="about-colons">
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
              <div>:</div>
            </div>

            {/* Details */}
            <div className="about-details">
              <div>B.S in Food Science & Technology</div>
              <div>Internship at United King Foods</div>
              <div>Pursuing AI, Web3.0 & Metaverse Course</div>
              <div>Teaching, Cooking, Web Development</div>
              <div>
                <a
                  href="https://www.linkedin.com/in/hubab-ikram-02b8741b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  www.linkedin.com
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/your-github-Hubab777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  www.github.com
                </a>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="about-description" data-aos="zoom-in" >
            <p>
              Hi! My name is Hubab Ikram. I am a passionate Front-end Web developer dedicated to
              building engaging and dynamic user experiences. With a keen eye for design and a love for clean, efficient code, I bring ideas to life
              through responsive, accessible, and visually appealing web interfaces. I thrive on transforming complex problems into intuitive,
              user-friendly solutions, continuously learning and adapting to new technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
