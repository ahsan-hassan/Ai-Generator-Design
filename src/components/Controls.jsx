import React from 'react';
import DataType from './DateType';
import Card3 from './Card3';

const Controls = () => {
  return (
    <div className="controls">
      <textarea placeholder="Describe what you want to create"></textarea>
      <div className="settings">
        <p>Additional settings</p>
        <div className="aspect-ratio">
          <h4>Aspect Ratio</h4>
          <button>1:1</button>
          <button>2:3</button>
          <button>3:2</button>
          <button>4:3</button>
        </div>
        <div className="models-styles">
          <h4>Models & Styles</h4>
          <div className="model-style">
            <button>Realistic</button>
            <button>Disney</button>
          </div>
          <div className="styles">
            {DataType.map((DataType, index) => (
              <Card3 key={index} imageType={DataType.imageType}  />
            ))}
          </div>
        </div>
      </div>
      <button className="generate-btn">Generate</button>
    </div>
  );
};

export default Controls;
