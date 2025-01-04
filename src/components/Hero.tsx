"use client";
import React from "react";
import Navbar from "./Navbar";
import "../style/hero.css";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const handleClick = () => {
    const resumeUrl = "https://hackathon-milestones-sable.vercel.app/";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="hero"
      className="hero-container"
      style={{
        backgroundImage: "url(/profile.jpg)",
        backgroundSize: "30%",
        backgroundPosition: "right 100px top 100px",
      }}
    >
      <Navbar />
      <div className="hero-content">
        <div className="hero-text">
          <div>
            <p className="hero-name">ℑ a𝔪</p>
            <p className="hero-name">ℌ𝔲𝔟𝔞𝔟</p>
            <p className="hero-name">ℑ𝓀𝔯𝔞𝔪</p>
          </div>
          <div className="divider"></div>
          <div className="hero-description">
            <h3 className="type-animation">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  1000,
                  "Food Technologist",
                  1000,
                  "UI/UX Web Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
                className="highlight"
              />
            </h3>
            <div className="hero-subtext" data-aos="zoom-in">
              <p>Fusing strategy and creativity to create experiences that resonate.</p>
              <p>Thriving on complexity, delivering simplicity with impact.</p>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="resume-button"
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
