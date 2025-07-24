import React from 'react';
import '../assets/style/loader.css';

interface LoaderProps {
  height?: string; 
  width?: string; 
}

const Loader: React.FC<LoaderProps> = ({ height = '100vh', width = '100vw' }) => {
  return (
    <div
      className="flex justify-center items-center w-full mx-auto"
      style={{ height, width }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
