import React, { useEffect } from 'react';
import Image from 'next/image';
import testingIcon from '../../../public/Assets/images/testing.jpg';
import styles from '../Style/loadingScreen.module.css';


const LoadingScreen = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 1500); 

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className={styles.loadingScreen}>
      <Image
        src={testingIcon}
        alt="Test Loading Logo"
        width={550}
        height={550}
        className={styles.logo}
      />
    </div>
  );
};

export default LoadingScreen;
