import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterData from './FooterData';

const Footer = () => {
  const [activeItem, setActiveItem] = useState('Home'); // Initial active item is 'Home'

  const handleItemClick = (text) => {
    setActiveItem(text); // Update active item on click
  };

  return (
    <div className="footer-container">
        <div className='footer'>
          {FooterData.map(({ icon: IconComponent, text }, index) => (
            <div key={index} className="footer-item" onClick={() => handleItemClick(text)}>
              {text === 'Home' ? (
                <Link to="/" className={`footer-item-content ${activeItem === text ? 'active' : ''}`}>
                  <IconComponent className="footer-icon" />
                  <div className="footer-text">{text}</div>
                </Link>
              ) : text === 'Create' ? (
                <Link to="/text" className={`footer-item-content ${activeItem === text ? 'active' : ''}`}>
                  <IconComponent className="footer-icon" />
                  <div className="footer-text">{text}</div>
                </Link>
              ) : (
                <Link to="/mycreations" className={`footer-item-content ${activeItem === text ? 'active' : ''}`}>
                  <IconComponent className="footer-icon" />
                  <div className="footer-text">{text}</div>
                </Link>
              )}
            </div>
          ))}
        </div>
    </div>

  );
}

export default Footer;
