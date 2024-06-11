import React from 'react';
import { Link } from 'react-router-dom';
import menuImg from '../images/menuimage.png'

const DashboardHeader = () => {
  return (
    <header className="Dashboard_header">
      <div className="navbar">
        {/* Logo linked to Home */}
        <Link to="/"  className="logo">ART GENERATOR</Link>
        <nav className="dashboard_nav">
          <ul>
            <li className='active'>
            Text to image
            </li>
            <li>
            Image to image

            </li>
            <li>
            AI Avatar
            </li>
            <li>
            Face Swap
            </li>
          </ul>
        </nav>
      </div>
      
      <img src={menuImg} alt="MenuImage" />
    </header>
  );
}

export default DashboardHeader;
