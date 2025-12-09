import aboutImg from '../../../public/Assets/images/aboutimg.jpg';
import styles from '../Style/aboutme.module.css';
import Image from 'next/image';
import Script from 'next/script';
import Head from 'next/head';

const About = () => {
  return (
        <div id='about' className='w-full h-full'>
        <Head></Head>
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
              <h1 class ={styles.h1}>ABOUT</h1>
            <hr className={styles.line}/>
          <div className={styles.column1}>
            <div className={styles.heading}>
              <h2 class ={styles.h2}>South African Contemporary Artist</h2>
            </div>
            <div className={styles.text}>
              <p class={styles.p1}>
                Growing up in the vibrant landscapes of Ga Phaahla, Limpopo, I discovered my passion for art early on. Surrounded by a rich cultural heritage and vivid natural colors, my creative journey began with an instinctive pull toward self-expression. The dynamic energy of my environment became fertile ground for visual storytelling, shaping the lens through which I view the world.
                <br/>
                <br/>
                My artistic style draws inspiration from masters like Francisco Goya, George Condo, and elements of German Expressionism. This fusion of influence manifests in boldlines, vibrant hues, and whimsical, often surreal characters. The resulting compositions are emotive and captivating-inviting viewers into layered, imaginative narratives.
                <br/>
                <br/>
                Through my paintings, I explore themes such as gratitude for life, existential tension, urban living, family relationships, and the broader human condition. Each piece delves into the complexities of identity and societal norms, offering viewers a chance to reflect on the emotional terrain of modern existence.
                <br/>
                <br/>
                My work has been exhibited in shows across Pretoria & Johannesburg, South Africa, marking my growing presence within the contemporary art scene. 
              </p>
            </div>
          </div>
          <div className={styles.column2}>
            <Image src={aboutImg} alt="logo" width={0} height={0} placeholder="blur" className="w-[80%] h-auto" />
          </div>
         </div>
         </div>
  );
};

export default About;
