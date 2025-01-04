import React from 'react';
import Image from 'next/image';
import '../style/card.css'; 

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div className="card-container" data-aos="zoom-in">
      {/* Image Section */}
      <div className="card-image">
        <Image src={img} width={350} height={350} alt={title} />
      </div>

      {/* Content Section */}
      <div className="card-content">
        {/* Title */}
        <div className="card-title">{title}</div>
        {/* Description */}
        <div className="card-desc">{desc}</div>
        {/* Tags */}
        <div className="card-tags">
          {tags.map((el) => (
            <span className="tags" key={el}>
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
