import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TextToImage from '../pages/Text_to_image';
import '../styles.css';

function App() {
  return (
    
    <BrowserRouter>


      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/text" element={<TextToImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
