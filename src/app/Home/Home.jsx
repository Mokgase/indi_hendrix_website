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

          {imageUrls.map((imageUrl, index) =>(
            <Image src={imageUrl} key={index}
            alt={`Image ${index}`}
            width={100}
            height={0}
            className=' min-w-min m-1 p-1'/>
          ))}

          {/* <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
            alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
          />
        </div>
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
            alt="sunset behind San Francisco city skyline"
          />
        </div>
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
            alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
          />
        </div>
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
            alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
          />
        </div>
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
            alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
          />
        </div>
        <div className="gallery-item">
          <img
            className="gallery-image"
            src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
            alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
          />*/}
        </div> 
      </div>
    </div>
  {/* ); */}


     
    {/* <Catalogue/> */}

    <AboutMe/>

    {/* <News/> */}

    <Contact/>

    <Footer />

    </div>
  );
};

export default Home;
