// import React, { useState } from 'react';
import React, { useRef } from 'react';
import styles from '../Style/contactme.module.css';
import Button from '../Components/Button';
// import contactImage from '../../../public/Assets/images/contact.jpg';
import contactImage from '../../../public/Assets/images/contactImage.jpg';
import Image from 'next/image';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aiael5j', 
        'template_gtluvs6', 
        form.current,
        'JLyAuDRbEpuDJRgII',
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully")
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return ( 
        <div className={styles.container}>
          <h1 class={styles.h1}>CONTACT ME</h1>
          <hr className={styles.line}/>
          <div className={styles.text}>
            <p className={styles.p1}>
            Whether you're looking to collaborate, commission a unique piece, or simply share your thoughts, I’d love to hear from you! Art is all about connection, and I believe every conversation sparks creativity. Fill in the form below, and let's bring your ideas to life. No matter how big or small, your vision is always welcome. Reach out, and let's make something unforgettable!
            </p>
          </div>
          {/* <div>
            <Image className={styles.img}
              src={contactImage}
              alt='contact image'
            />
          </div> */}
          <div className={styles.card}>
          <form ref={form} onSubmit={sendEmail}> 
              {/* <div className='mb-5'> */}
              <label className={styles.labels}>Name</label>
                <input 
                  required
                  type="text" 
                  name="user_name"
                  id='name'
                  placeholder='Full name'
                  className={styles.inputs}
                   />
                <label className={styles.labels}>Email</label>
                <input 
                  required
                  type="email" 
                  name="user_email" 
                  id='user_email'
                  placeholder='Email'
                  className={styles.inputs}
                  />
                <label className={styles.labels}>Mobile Number</label>
                <input
                  required
                  type='mobile'
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile number"
                  className={styles.inputs}
                />
                <label className={styles.labels}>Message</label>
                <textarea 
                  required
                  name="message" 
                  placeholder='Message me'
                  className={styles.textarea}/>
                <Button type={'submit'} value={'Send'} text={'Send'}/>
                {/* </div> */}
            </form>
          </div>
          {/* <div className={styles.formcontainer}>
 
          <form ref={form} onSubmit={sendEmail}> 
              <div className='mb-5'>
              <label className={styles.labels}>Name</label>
                <input 
                  required
                  type="text" 
                  name="user_name"
                  id='name'
                  placeholder='Full name'
                  className={styles.inputs}
                   />
                <label className={styles.labels}>Email</label>
                <input 
                  required
                  type="email" 
                  name="user_email" 
                  id='user_email'
                  placeholder='Email'
                  className={styles.inputs}
                  />
                <label className={styles.labels}>Mobile Number</label>
                <input
                  required
                  type='mobile'
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile number"
                  className={styles.inputs}
                />
                <label className={styles.labels}>Message</label>
                <textarea 
                  required
                  name="message" 
                  placeholder='Message me'
                  className={styles.textarea}/>
                <Button type={'submit'} value={'Send'} text={'Send'}/>
                </div>
            </form>
          </div> */}
        </div>
  )
};

export default Contact;
              
