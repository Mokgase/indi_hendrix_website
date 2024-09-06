'use client';

import React from 'react';
import Head from 'next/head';
// import {homepageImages} from '../Utils/images';
import styles from '../Style/home.module.css';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Link from 'next/link';
import AboutMe from '../About/AboutMe';
import Catalogue from '../Catalogue/page';
import News from '../News/News';

const Home = ({imageUrls , text}) => {
    return (
    <div className={`w-full h-full flex flex-col justify-center items-center ${styles.noHorizontalScroll}`}> 
    <Head>
        <title>Homepage</title>
        <meta name="Homepage" content="This is the Homepage as know as Landing page" />
    </Head>
    <div className="container">
      <div className="home-gallery">
        <div className="home-gallery-item">
        </div> 
      </div>
    </div>     
    {/* <Catalogue/> */}

    <AboutMe/>

    {/* <News/> */}

    <Contact/>

    <Footer />

    </div>
  );
};

export default Home;
