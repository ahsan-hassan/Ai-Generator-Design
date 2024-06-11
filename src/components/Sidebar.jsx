import React from 'react';
import inspirations from './Data';
import Card2 from './Card2';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>My Creations</h2>
      <div className="image_section">
        {inspirations.slice(0, 4).map((inspiration, index) => (
          <Card2 key={index} imageSrc={inspiration.imageSrc} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;