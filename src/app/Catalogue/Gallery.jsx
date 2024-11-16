import React, { useEffect } from 'react';
import './styles.css';
import Image from 'next/image';

// const Gallery = ({imageUrls, text}) => {
  const Gallery = () => {
  return (
    <div className="gallery">
      {imageUrls.map((imageUrl, index) =>(
        <Image src={imageUrl} key={index}
        alt={`Image ${index}`}
        width={50}
        height={50}
        className=' min-w-min m-1 p-1'/>
      ))}
    </div>
  );
};

export default Gallery;



