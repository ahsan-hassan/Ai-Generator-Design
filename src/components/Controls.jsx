import React from 'react';
import DataType from './DateType';
import Card3 from './Card3';
import AspectRatio from './AspectRatio';
import { FaAngleDown } from "react-icons/fa";


const Controls = () => {
  return (
    <div className="controls">
      <textarea placeholder="Describe what you want to create"></textarea>
      <div className="settings">
        <p>Additional settings</p>
        <FaAngleDown className="angledown"/>
      </div>
        <div className="aspect-ratio">
          <AspectRatio />
        </div>
        <div className='ratiotype'>
          <p>Square</p>
          <p>Potrait</p>
          <p>Post</p>
          <p>Reel</p>
          <p>Cover</p>
        </div>

        <hr style={{marginTop:10}}></hr>
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
      
      <button className="generate-btn">Generate</button>
    </div>
  );
};

export default Controls;
