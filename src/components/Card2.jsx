import React from 'react';

const Card2 = ({ imageSrc, text }) => {
  return (
    <div className="card2">
      <img src={imageSrc} alt="Inspiration" />
      <p>{text}</p>   
      <div class="overlay"></div>
      {/* NOTE: I m using the variable so we can populate different data as the data on design was same. */}
    </div>
  );
}

export default Card2;