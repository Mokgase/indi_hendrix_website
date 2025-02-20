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

// const Paintings = () => {
//   const cataloguePaintings = [
//     '/Assets/images/Golden_Years_official.png',
//     'Assets/images/FEAR_OF_GROWTH.png',
//     '/Assets/images/45_Hours.png',
//     '/Assets/images/Testament_of_unkillable_gods.png',
//     '/Assets/images/Can _I_get_a_light.jpg',
//     '/Assets/images/faces-phases.png',
//     '/Assets/images/Fantastic_planet.jpg',
//     '/Assets/images/Father_Stretch_my_Hand.jpg',
//     '/Assets/images/Rakgolo.jpg',
//     '/Assets/images/Scrying_Mirror.jpg',
//     '/Assets/images/This_depressions_not_a_phase.png',
//     '/Assets/images/Doomile.png',
//   ];


import React from 'react';
import styles from '../Style/paintings.module.css';


const cataloguePaintings = [
  { src: '/Assets/images/Golden_Years_official.png', title: 'Golden Years', size: '594 x 841 mm', year:'2025', price: 'R2000.00' },
  { src: '/Assets/images/FEAR_OF_GROWTH.png', title: 'Fear of Growth', size: '594 x 841 mm', year:'2024', price: 'R2000.00' },
  { src: '/Assets/images/45_Hours.png', title: '45 Hours', size: '594 x 841 mm', year:'2024', price: 'R1800.00' },
  { src: '/Assets/images/Testament_of_unkillable_gods.png', title: 'Testament of Unkillable Gods', size: '420 x 594 mm', year:'2024', price: 'R1200.00' },
  { src: '/Assets/images/Can_I_get_a_light.jpg', title: 'Can I Get a Light', size: '297 x 420 mm', year:'2023', price: 'R500.00' },
  { src: '/Assets/images/Doomile.png', title: 'Doomile', size: '594 x 841 mm', year:'2023', price: '$350' },
  { src: '/Assets/images/Scrying_Mirror.jpg', title: 'Scrying Mirror', size: '594 x 841 mm', year:'2023', price: '$550' },
  { src: '/Assets/images/Rakgolo.jpg', title: 'Rakgolo', size: '36x36 inches', year:'2023', price: '$750' },
  { src: '/Assets/images/Father_Stretch_my_Hand.jpg', title: 'Father Stretch My Hand', size: '594 x 841 mm', year:'2023', price: '$700' },
  { src: '/Assets/images/faces-phases.png', title: 'Faces & Phases', size: '297 x 420 mm', year:'2022', price: 'R600.00' },
  { src: '/Assets/images/This_depressions_not_a_phase.png', title: 'This Depression is Not a Phase', size: '297 x 420 mm', year:'2022', price: 'SOLD' },
  { src: '/Assets/images/Fantastic_planet.jpg', title: 'Fantastic Planet', size: '30x30 inches', year:'2020', price: '$600' },
];


const Paintings = () => {
  return (
    <div id='paintings' className='w-full h-full'>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Paintings;


//   return (
//     <div id='paintings' className='w-full h-full'>
//     <div className={styles.container}>
//       <h1 className={styles.h1}>PAINTINGS</h1>
//       <hr className={styles.line} />
//       <div className={styles.images_grid}>
//         {cataloguePaintings.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Painting ${index + 1}`}
//             className={styles.grid_image}
//           />
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Paintings;
