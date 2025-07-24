import React from 'react';
import '../assets/style/loader.css';
import { LoaderProps } from '../types';



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
