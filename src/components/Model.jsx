import React from 'react';

const Model = ({ imageModel, text , heading, active }) => {
  return (
    <div className={`model_card ${active ? 'active' : ''}`}>
        <div className='model_data'>
            <h5>{text}</h5>  
            <h4>{heading}</h4>
        </div>
      <img src={imageModel} alt="Model" />
    </div>
  );
}

export default Model;