import React from 'react';
import textImage from '../images/texttoimage.png';

const ImagePreview = () => {
  return (
    <div className="image-preview">
      <img src={textImage} alt="Preview" />
    </div>
  );
};

export default ImagePreview;