import React from 'react';
import InspirationGrid from './Inspiration';

const Main = () => {
  return (
    <main className="main">
      <h1>AI Art Generator</h1>
      <p className="description">Create awe-inspiring masterpieces effortlessly and explore the endless possibilities of AI generated art. Enter a prompt, and choose a style, AI art generator bring your ideas to life!</p>
      <div className="input-container">
        <input type="text" placeholder="Enter prompt here..." />
        <button className="generate_btn">Generate</button>
      </div>
      <InspirationGrid />
    </main>
  );
}

export default Main;