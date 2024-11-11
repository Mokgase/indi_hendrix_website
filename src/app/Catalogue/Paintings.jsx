import React from 'react';
import Image from 'next/image';
import styles from '../Style/paintings.module.css'


const Paintings =({imageUrls}) => {
  return(
    <div className={styles.container}>
      {/* <div className={styles.heading}> */}
        <h1 class={styles.h1}>PAINTINGS</h1>
        <hr className={styles.line}/>
      {/* </div> */}
      {/* <div class="grid grid-cols-3 gap-24">
      {imageUrls.map((imageUrl, index)=>(
        <Image className={styles.image} src={imageUrl} key={index}
        alt={`Image ${index}`} 
        width={250}
        height={150}
        />
      ))}
        </div>  */}
    </div>
  )
}

export default Paintings;