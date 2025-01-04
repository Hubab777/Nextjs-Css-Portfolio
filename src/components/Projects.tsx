import React from 'react';
import Heading from './Heading';
import Card from './Card';
import '../style/projects.css'; 

const data = [
  {
    id: 0,
    title: 'Web Calculator',
    desc: 'A simple Web Calculator which can be used to perform basic arithmetic operations',
    img: '/web-calculator.png',
    tags: ['HTML', 'CSS', 'Typescript', 'Node'],
  },
  {
    id: 1,
    title: 'GIAIC Card Clone',
    desc: 'A clone of ID card of Governor Initiative for Artificial Intelligence, WEB 3.0 & Metaverse',
    img: '/card-project.png',
    tags: ['HTML', 'Tailwind CSS', 'Next.js', 'Node'],
  },
  {
    id: 2,
    title: 'Static Resume',
    desc: 'A static resume that contains personal information, education, experience, and skills',
    img: '/resume.png',
    tags: ['HTML', 'CSS', 'TypeScript', 'Node'],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <Heading title="My Projects" />

      <div className="projects-grid">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
