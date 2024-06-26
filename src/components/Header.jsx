import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        {/* Logo linked to Home */}
        <Link to="/"  className="logo">ART GENERATOR</Link>
        <nav className="nav">
          <ul>
            {/* Link to TextToImage Page */}
            <li><Link to="/text">Photo Editing Tools</Link></li>
            <li>AI Tools</li>
            <li>Support</li>
          </ul>
        </nav>
      </div>
      
      <button className="sign-in">Sign In</button>
    </header>
  );
}

export default Header;
