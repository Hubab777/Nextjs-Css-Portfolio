'use client';
import React from 'react';
import Heading from './Heading';
import '../style/skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-container">
      <Heading title="Skills" />
      <div className="skill-grid">
        <div className="skill-item">
          <p data-aos="zoom-in">HTML</p>
          <div className="skill-bar-background">
            <div className="skill-bar-progress" style={{ width: '90%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <p data-aos="zoom-in">CSS</p>
          <div className="skill-bar-background">
            <div className="skill-bar-progress" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <p data-aos="zoom-in">TypeScript</p>
          <div className="skill-bar-background">
            <div className="skill-bar-progress" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <p data-aos="zoom-in">Next.js</p>
          <div className="skill-bar-background">
            <div className="skill-bar-progress" style={{ width: '80%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <p data-aos="zoom-in">Tailwind CSS</p>
          <div className="skill-bar-background">
            <div className="skill-bar-progress" style={{ width: '70%' }}></div>
          </div>
        </div>

        <div className="skill-item">
          <p data-aos="zoom-in">React</p>
          <div className="skill-bar-background">
            <div className="skill-bar-progress" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
