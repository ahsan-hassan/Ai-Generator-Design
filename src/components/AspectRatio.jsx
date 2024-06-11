import React from 'react';
import RatioData from './RatioData';


const AspectRatio = () => {
  return (

    <div className='aspect-ratio-card'>
      {RatioData.map(({ icon: IconComponent , ratio, active }, index) => (
        <div key={index} className="icon-text-wrapper">
          <div className={`icon-text-button ${active ? 'active' : ''}`}>
            <IconComponent className="icon" />
            <div className="ratio">{ratio}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AspectRatio;
