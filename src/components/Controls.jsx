import React from 'react';
import DataType from './DateType';
import Card3 from './Card3';
import AspectRatio from './AspectRatio';
import { FaAngleDown } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Model from './Model';
import ModelData from './ModelData';



const Controls = () => {
  return (
    <div className="controls">
      <textarea placeholder="Describe what you want to create"></textarea>
      <div className="settings">
        <p>Additional settings</p>
        <FaAngleDown className="angledown"/>
      </div>
        <div className="aspect-ratio">
          <h4>Aspect Ratio <IoMdInformationCircleOutline  className="info_icon"/></h4>
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
          <div className='mode-heading'>
            <h4>Models & Styles </h4>
            <IoMdInformationCircleOutline className="info_icon"/>
          </div>

          <div className="model-type">
          {ModelData.map((ModelData, index) => (
            <Model key={index} imageModel={ModelData.imageModel} text={ModelData.text} heading={ModelData.heading} active={ModelData.active} />
          ))}
          </div>
        </div>

        <div className="styles">
          {DataType.map((DataType, index) => (
            <Card3 key={index} imageType={DataType.imageType}  />
          ))}
        </div>

      
      <button className="generateTexttoImage-btn">Generate</button>
    </div>
  );
};

export default Controls;
