import React from 'react';
import Sidebar from '../components/Sidebar';
import ImagePreview from '../components/ImagePreview';
import DashboardHeader from '../components/DashboardHeader';
import RightBar from '../components/Controls';

// import Controls from './Controls';

const TextToImage = () => {
  return (
    <div>
        <DashboardHeader/>
        <div className="main-content">
            <Sidebar />
            <ImagePreview />
            <RightBar/>
        </div>
    </div>
    
  );
};

export default TextToImage;