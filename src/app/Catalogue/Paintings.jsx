import React from 'react';
import styles from '../Style/paintings.module.css';
import Script from 'next/script';
import Head from 'next/head';


const cataloguePaintings = [
  
  { src: '/Assets/images/When_trees_fall.png', title: 'When trees fall', size: '600 x 900 mm', year:'2025', price: 'R2700.00' },
  { src: '/Assets/images/I_carry_them_with_me.png', title: 'I carry them with me', size: '600 x 900 mm', year:'2025', price: 'R2500.00' },
  { src: '/Assets/images/Let_them_eat_Brioche.png', title: 'Let them eat Brioche', size: '600 x 900 mm', year:'2025', price: 'SOLD' },
  { src: '/Assets/images/Untitled_25.png', title: 'Untitled 25', size: '594 x 841 mm', year:'2025', price: 'R1500.00' },
  { src: '/Assets/images/Golden_Years_official.png', title: 'Golden Years', size: '594 x 841 mm', year:'2025', price: 'R2000.00' },
  { src: '/Assets/images/FEAR_OF_GROWTH.png', title: 'Fear of Growth', size: '594 x 841 mm', year:'2024', price: 'R2000.00' },
  { src: '/Assets/images/45_Hours.png', title: '45 Hours', size: '594 x 841 mm', year:'2024', price: 'R2000.00' },
  { src: '/Assets/images/Testament_of_unkillable_gods.png', title: 'Testament of Unkillable Gods', size: '420 x 594 mm', year:'2024', price: 'R1200.00' },
  { src: '/Assets/images/Can_I_get_a_light.png', title: 'Can I Get a Light', size: '297 x 420 mm', year:'2023', price: 'R500.00' },
  { src: '/Assets/images/Doomile.png', title: 'Doomile', size: '594 x 841 mm', year:'2023', price: 'TBD' },
  { src: '/Assets/images/Scrying_Mirror.jpg', title: 'Scrying Mirror', size: '594 x 841 mm', year:'2023', price: 'TBD' },
  { src: '/Assets/images/Rakgolo.png', title: 'Rakgolo', size: '36x36 inches', year:'2023', price: 'R400.00' },
  { src: '/Assets/images/Father_Stretch_my_Hand.jpg', title: 'Father Stretch My Hand', size: '594 x 841 mm', year:'2023', price: 'TBD' },
  { src: '/Assets/images/faces-phases.png', title: 'Faces & Phases', size: '297 x 420 mm', year:'2022', price: 'R600.00' },
  { src: '/Assets/images/This_depressions_not_a_phase.png', title: 'This Depression is Not a Phase', size: '297 x 420 mm', year:'2022', price: 'SOLD' },
  { src: '/Assets/images/Fantastic_planet.png', title: 'Fantastic Planet', size: '30x30 inches', year:'2020', price: 'R400' },
];


const Paintings = () => {
  return (
    <div id='paintings' className='w-full h-full'>
    <Head>
      <title>Paintings</title>
      <meta name="Paintings" content="This the Paintings page"/>
    </Head>
    <Script id="google_analytics" async src="https://www.googletagmanager.com/gtag/js?id=G-ZLP3CMVLW0"></Script>
    <Script
      id="google_analytics"
      dangerouslySetInnerHTML={{
        __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZLP3CMVLW0');
        `,
      }}
    />
      <div className={styles.container}>
        <h1 className={styles.h1}>PAINTINGS</h1>
        <hr className={styles.line} />
        <div className={styles.images_grid}>
          {cataloguePaintings.map((painting, index) => (
            <div key={index} className={styles.painting_card}>
              <img
                src={painting.src}
                alt={painting.title}
                className={styles.grid_image}
              />
              <div className={styles.painting_info}>
                <h1 className={styles.painting_title}>{painting.title}</h1>
                <p className={styles.painting_size}>{painting.size}</p>
                <p className={styles.painting_price}>{painting.price}</p>
                <p className={styles.year_of_painting}>{painting.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paintings;

