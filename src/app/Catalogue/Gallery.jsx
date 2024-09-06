import React, { useEffect } from 'react';
import './styles.css';
import Image from 'next/image';

const Gallery = ({imageUrls, text}) => {
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



//   useEffect(() => {
//     const handleGalleryClick = (event) => {
//       event.preventDefault();
//       const itemID = event.currentTarget.getAttribute('href');
//       document.querySelector('.gallery ul').classList.add('item_open');
//       document.querySelector(itemID).classList.add('item_open');
      
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     };

//     const handleCloseClick = (event) => {
//       event.preventDefault();
//       document.querySelector('.port').classList.remove('item_open');
//       document.querySelector('.gallery ul').classList.remove('item_open');
//     };

//     const galleryLinks = document.querySelectorAll('.gallery ul li a');
//     galleryLinks.forEach(link => {
//       link.addEventListener('click', handleGalleryClick);
//     });

//     const closeButtons = document.querySelectorAll('.close');
//     closeButtons.forEach(button => {
//       button.addEventListener('click', handleCloseClick);
//     });

//     return () => {
//       galleryLinks.forEach(link => {
//         link.removeEventListener('click', handleGalleryClick);
//       });
//       closeButtons.forEach(button => {
//         button.removeEventListener('click', handleCloseClick);
//       });
//     };
//   }, []);