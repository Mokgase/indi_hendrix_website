import React from 'react';
import styles from '../Style/paintings.module.css'


// const Prints =({imageUrls}) => {
const Prints =() => {

  const images = Array.from({ length: 9 }, (_, i) => `https://via.placeholder.com/150?text=Image+${i + 1}`);
  return(
    <div className={styles.container}>
        <h1 class={styles.h1}>Prints</h1>
        <hr className={styles.line}/>
      <div className={styles.images_grid}>
      {images.map((image, index)=>(
        <img key={index} src={image} alt={`Image ${index + 1}`} className={styles.grid_image} />
      ))}
        </div>
    </div>
  )
}

export default Prints;