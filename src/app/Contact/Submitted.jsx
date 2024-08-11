import React from 'react';
import logo from '../../../public/Assets/images/logo.png';
import styles from '../Style/submitted.module.css';
import Image from 'next/image';


const Submitted = () => {
  return (
        <div id='submitted' className='w-full h-full'>
          <div className={styles.column}>
            <h1 className={styles.h1}>
                Thank you! I'll be in contact soon. 
            </h1>
            <div className={styles.wistia_embed}> 
            <iframe
                src="https://fast.wistia.net/embed/iframe/np6uct6bvq?seo=true&videoFoam=true"
                title="submittedvideo"
                allow="autoplay; fullscreen"
                allowTransparency="true"
                frameBorder="0"
                scrolling="no"
                className="wistia_embed"
                name="wistia_embed"
                width="100%"
                height="100%"
            ></iframe>
            
            </div>
          </div>
        </div>
  );
};

export default Submitted;
