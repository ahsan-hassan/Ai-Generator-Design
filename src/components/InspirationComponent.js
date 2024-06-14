import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchInspiration } from './apiService';

const InspirationGrid = () => {
  const [inspirations, setInspirations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInspiration = async () => {
      try {
        const data = await fetchInspiration();
        setInspirations(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getInspiration();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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


// Use this Code in Inspiration.jsx to Run Api 