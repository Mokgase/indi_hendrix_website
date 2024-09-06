import React from 'react';
import aboutImg from '../../../public/Assets/images/2.png';
import styles from '../Style/aboutme.module.css';
import Image from 'next/image';


const AboutMe = () => {
  return (
        <div id='about' className='w-full h-full'>
          <div className={styles.column1}>
            <div className={styles.heading}>
              <h1 class ={styles.h1}>About</h1>
              <h2 class ={styles.h2}>South African Contemporary OP Artist</h2>
            </div>
            <div className={styles.text}>
              <p class ={styles.p1}>
              Growing up in the vibrant landscapes of Ga-Phaahla, Limpopo, I discovered my passion for art. The rich cultural heritage and vivid colors of my surroundings ignited my creative journey, driven by an innate artistic instinct. This dynamic environment became the fertile ground for my artistic exploration and expression.
              <br/>
              <br/>
              My distinctive visual language is inspired by Takashi Murakami&apos;s Superflat movement, Pop Art, and geometric styles. This blend results in artworks characterized by vibrant hues, bold lines, and whimsical characters, creating compositions that captivate and engage viewers.
              <br/>
              <br/>
              I explore various themes in my paintings, including life&apos;s appreciation, existential crises, urban living, family dynamics, and the Black experience. Each piece delves into the complexities of existence, examining the interplay between personal identity and societal norms. Through this thematic exploration, I invite viewers to contemplate the multifaceted nature of human experience.
              <br/>
              <br/>
              My work has been featured in group exhibitions in Pretoria, South Africa, showcasing my burgeoning presence in the art scene. Additionally, various media outlets, including The Creative Rejects, have highlighted my unique artistic voice, affirming my contribution to contemporary art.
              <br/>
              <br/>
              <br/>
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <Image src={aboutImg} alt="logo" width={0} height={0} placeholder="blur" className="w-[80%] h-auto" />
            {/* <Image src={buddah} alt="buddah" width={0} height={0} placeholder="blur"/> */}
          </div>
        </div>
  );
};

export default AboutMe;
