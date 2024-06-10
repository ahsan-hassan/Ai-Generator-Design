import React from 'react';

const Header = () => {
  return (
    <header className="header">
    <div class="navbar">
      <div className="logo">ART GENERATOR</div>
        <nav className="nav">
          <ul>
            <li>Photo Editing Tools</li>
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