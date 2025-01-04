import React from 'react';
import '../style/heading.css';

interface PropsType {
  title: string;
}

const Heading: React.FC<PropsType> = ({ title }) => {
  return (
    <div className="heading-container">
      <div className="heading-title">{title}</div>
    </div>
  );
};

export default Heading;
