import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const DashboardHeader = () => {
  return (
    <header className="header">
      <div className="navbar">
        {/* Logo linked to Home */}
        <Link to="/"  className="logo">ART GENERATOR</Link>
        <nav className="nav">
          <ul>
            <li>
                Image to text
            </li>
          </ul>
        </nav>
      </div>
      
      <button className="sign-in">Sign In</button>
    </header>
  );
}

export default DashboardHeader;
