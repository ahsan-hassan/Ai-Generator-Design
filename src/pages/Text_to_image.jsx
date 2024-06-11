import React from 'react';
import Sidebar from '../components/Sidebar';
import ImagePreview from '../components/ImagePreview';
import DashboardHeader from '../components/DashboardHeader';
import RightBar from '../components/Controls';
import Footer from '../components/Footer';

// import Controls from './Controls';

const TextToImage = () => {
  return (
    <div>
        <DashboardHeader/>
        <div className="main-content">
            <Sidebar />
            <ImagePreview />
            <RightBar/>
            <Footer />
        </div>
    </div>
    
  );
};

export default TextToImage;