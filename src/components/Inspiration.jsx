import React from 'react';
import Card from './Card';
import inspirations from './Data'


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