// import React from 'react';
// import styles from '../Style/paintings.module.css'
// import Button from '../Components/Button';

// const Paintings =() => {

//   const images = Array.from({ length: 9 }, (_, i) => `https://via.placeholder.com/150?text=Image+${i + 1}`);

//   return(
//     <div className={styles.container}>
//         <h1 class={styles.h1}>PAINTINGS</h1>
//         <hr className={styles.line}/>
//         <div className={styles.images_grid}>
//             {images.map((image, index) => (
//                 <img key={index} src={"https://metro.co.uk/wp-content/uploads/2022/03/SEC_94565759.jpg?quality=90&strip=all&w=646"} alt={`Image ${index + 1}`} className={styles.grid_image} />
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Paintings;


import React from 'react';
import styles from '../Style/paintings.module.css';

const Paintings = () => {
  const cataloguePaintings = [
    '/Assets/images/45_Hours.png',
    '/Assets/images/Can _I_get_a_light.jpg',
    '/Assets/images/Doomile.png',
    '/Assets/images/faces-phases.jpg',
    '/Assets/images/Fantastic_planet.jpg',
    '/Assets/images/Father_Stretch_my_Hand.jpg',
    '/Assets/images/Rakgolo.jpg',
    '/Assets/images/Scrying_Mirror.jpg',
    '/Assets/images/Testament_of_unkillable_gods.png',
    '/Assets/images/This_depressions_not_a_phase.jpg',
  ];

  return (
    <div id='paintings' className='w-full h-full'>
    <div className={styles.container}>
      <h1 className={styles.h1}>PAINTINGS</h1>
      <hr className={styles.line} />
      <div className={styles.images_grid}>
        {cataloguePaintings.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Painting ${index + 1}`}
            className={styles.grid_image}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Paintings;
