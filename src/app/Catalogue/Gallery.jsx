import React, { useEffect } from 'react';
import './styles.css';

const Gallery = () => {
  useEffect(() => {
    const handleGalleryClick = (event) => {
      event.preventDefault();
      const itemID = event.currentTarget.getAttribute('href');
      document.querySelector('.gallery ul').classList.add('item_open');
      document.querySelector(itemID).classList.add('item_open');
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    const handleCloseClick = (event) => {
      event.preventDefault();
      document.querySelector('.port').classList.remove('item_open');
      document.querySelector('.gallery ul').classList.remove('item_open');
    };

    const galleryLinks = document.querySelectorAll('.gallery ul li a');
    galleryLinks.forEach(link => {
      link.addEventListener('click', handleGalleryClick);
    });

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
      button.addEventListener('click', handleCloseClick);
    });

    return () => {
      galleryLinks.forEach(link => {
        link.removeEventListener('click', handleGalleryClick);
      });
      closeButtons.forEach(button => {
        button.removeEventListener('click', handleCloseClick);
      });
    };
  }, []);

  return (
    <div className="gallery">
      {/* Your gallery structure */}
    </div>
  );
};

export default Gallery;
