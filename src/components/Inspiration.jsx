import React from 'react';
import Card from './Card';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import image5 from '../images/image5.png';
import image6 from '../images/image6.png';
import image7 from '../images/image7.png';
import image9 from '../images/image9.png';
import image10 from '../images/image10.png';
import image11 from '../images/image11.png';
import image12 from '../images/image12.png';
import image13 from '../images/image13.png';





const inspirations = [
  { imageSrc: image1, text: 'A painting of a woman with long hairs' },
  { imageSrc: image2, text: 'A painting of a woman with long hairs' },
  { imageSrc: image3, text: 'A painting of a woman with long hairs' },
  { imageSrc: image4, text: 'A painting of a woman with long hairs' },
  { imageSrc: image5, text: 'A painting of a woman with long hairs' },
  { imageSrc: image6, text: 'A painting of a woman with long hairs' },
  { imageSrc: image7, text: 'A painting of a woman with long hairs' },
  { imageSrc: image9, text: 'A painting of a woman with long hairs' },
  { imageSrc: image10, text: 'A painting of a woman with long hairs' },
  { imageSrc: image11, text: 'A painting of a woman with long hairs' },
  { imageSrc: image12, text: 'A painting of a woman with long hairs' },
  { imageSrc: image13, text: 'A painting of a woman with long hairs' },

];

const InspirationGrid = () => {
  return (
    <section className="inspirations">
      <h2>Inspirations</h2>
      <div className="categories">
        <button className="category-btn active">Realistic</button>
        <button className="category-btn">Science Fiction</button>
        <button className="category-btn">Cartoon</button>
        <button className="category-btn">Anime</button>
        <button className="category-btn">Oil Painting</button>
        <button className="category-btn">Landscape</button>
      </div>
      <div className="image_section">
        {inspirations.map((inspiration, index) => (
          <Card key={index} imageSrc={inspiration.imageSrc} text={inspiration.text} />
        ))}
      </div>
    </section>
  );
}

export default InspirationGrid;