'use client';
import React from 'react';
import styles from '../Style/paintings.module.css';
import Script from 'next/script';
import Head from 'next/head';
import Modal from '../Components/Modal';
import Button from '../Components/Button';
import cataloguePaintings from '../Utils/paintings';
import Image from "next/image";
import { useEnquiry } from '../Context/EnquiryContext';
import { useRouter } from 'next/navigation';


const Paintings = ({ limit }) => {
  const { enquiries, addToEnquiry } = useEnquiry();
  const router = useRouter();
  const displayed = limit ? cataloguePaintings.slice(0, limit) : cataloguePaintings;

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
          {displayed.map((painting, index) => (
            <div key={index} className={styles.painting_card}>
              <Image
                src={painting.src}
                alt={painting.title}
                className={styles.grid_image}
                height={900}
                width={600}
                quality={100}
              />
              <div className={styles.painting_info}>
                <h1 className={styles.painting_title}>{painting.title}</h1>
                <p className={styles.painting_size}>{painting.size}</p>
                <p className={styles.medium}>{painting.medium}</p>
                {/* <p className={styles.painting_price}>{painting.price}</p> */}
                <p className={styles.year_of_painting}>{painting.year}</p>
              </div>
              <Modal>
                    <div className={styles.modalBody}>
                      <div className={styles.column1}>
                        <img
                          src={painting.src}
                          alt={painting.title}
                          className={styles.modalImage}
                        />
                      </div>
                      <div className={styles.column2}>
                          <h1 className={styles.painting_title}>{painting.title}</h1>
                          <p className={styles.painting_size}>{painting.size}</p>
                          <p className={styles.painting_price}>{painting.price}</p>
                          <p className={styles.year_of_painting}>{painting.year}</p>
                          <p className={styles.year_of_painting}>{painting.status}</p>
                          <p className={styles.medium}>{painting.medium}</p>
                          <div className={styles.btn}>
                            {painting.status === 'SOLD' ? (
                              <Button text="SOLD" disabled />
                            ) : (
                              <Button
                                text={enquiries.some((p) => p.title === painting.title) ? 'Added ✓' : 'Enquire'}
                                onClick={() => {
                                  addToEnquiry(painting);
                                }}
                              />
                            )}
                          </div>
                      </div>
                    </div>
              </Modal>
            </div>
          ))}
        </div>
        {limit && (
          <div className={styles.btn}>
            <Button text="More Paintings" onClick={() => router.push('/paintings')} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Paintings;

