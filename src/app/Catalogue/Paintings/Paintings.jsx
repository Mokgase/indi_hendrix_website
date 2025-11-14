"use client"
import React from 'react';
import styles from '../../Style/paintings.module.css';
import Script from 'next/script';
import Head from 'next/head';
import Modal from '../../Components/Modal';
import Button from '../../Components/Button';
import cataloguePaintings from '../../Utils/paintings';
import {useEnquiry} from '../../Components/Enquiry';



const Paintings = () => {
  const {addToEnquiries} = useEnquiry();
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
              <Modal>
                    <div >
                      <div className={styles.column1}>
                        <img 
                          src={painting.src}
                        />
                      </div>
                      <div className={styles.column2}>
                        <div className={styles.modal_container}>
                          <h1 className={styles.painting_title}>{painting.title}</h1>
                          <p className={styles.painting_size}>{painting.size}</p>
                          <p className={styles.painting_price}>{painting.price}</p>
                          <p className={styles.year_of_painting}>{painting.year}</p>
                          <p className={styles.medium}>{painting.story}</p>
                          <div className={styles.btn}>
                            <Button
                              type="submit"
                              value="Enqiure"
                              text="Add to Enquiry"
                              onClick={() =>{
                                console.log("Adding:",painting.title);
                                addToEnquiries(painting);
                              }}
                              
                            />
                            {/* <Button 
                              type={'submit'} 
                              value={'Enquire'} 
                              text={'Add to Enquiry'}
                              onClick={() =>addToEnquiries(painting)}
                            /> */}
                          </div>
                      </div>
                    </div>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paintings;

