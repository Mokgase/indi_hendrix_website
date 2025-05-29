'use client';

import React from 'react';
import Head from 'next/head';
// import {homepageImages} from '../Utils/images';
import styles from '../Style/home.module.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Link from 'next/link';
import About from '../About/About';
import Paintings from '../Catalogue/Paintings';
import Prints from '../Catalogue/Prints';
import Merch from '../Catalogue/Merch';
import {cataloguePaintings} from '../Utils/images'
// import Catalogue from '../Catalogue/page';
import News from '../News/News';
import Marquee from '../Components/Marquee'; 
import Script from 'next/script';


const HomePage = () => {
    return (
    <div className={`w-full h-full flex flex-col justify-center items-center ${styles.noHorizontalScroll}`}> 
    <Head>
        <title>Homepage</title>
        <meta name="Homepage" content="This is the Homepage as know as Landing page" />
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
    {/* <div className={styles.marquee_container}> */}
    <div className={styles.marquee_video}>
        <iframe
              className={styles.video_radius}
              allow='fullscreen:autoplay'
              allowFullScreen
              // src='https://streamable.com/e/5lv8c4?autoplay=1&nocontrols=1'
              src='https://streamable.com/e/vdrb80?autoplay=1&nocontrols=1'
              width='900'
              height='500'
        ></iframe>
    </div>
    {/* </div> */}
    <Marquee/>
    <br/>
    <br/>
    <br/>
    <About/>
    <Paintings/>
    {/* <Prints/> */}
    {/* <Merch/> */}
    {/* <div className="container">
      <div className="home-gallery">
        <div className="home-gallery-item">
        </div> 
      </div>
    </div>     
    <Catalogue/> */}

    {/* <Paintings imageUrls={cataloguePaintings}/> */}
     


    {/* <News/> */}

    <Contact/>
    
    <Footer />

    </div>
  );
};

export default HomePage;
