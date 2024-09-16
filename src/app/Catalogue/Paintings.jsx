import React from 'react';
import Image from 'next/image';
import styles from '../Style/paintings.module.css'


const Paintings =({imageUrls}) => {
  return(
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.column}>
      {imageUrls.map((imageUrl, index)=>(
        <Image src={imageUrl} key={index}
        alt={`Image ${index}`}
        width={150}
        height={50}
        />
      ))}
        </div>
      </div>
    </div>

  )
}

export default Paintings;