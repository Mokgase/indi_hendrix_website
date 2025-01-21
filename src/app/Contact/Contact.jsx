// import React, { useState } from 'react';
import React, { useRef } from 'react';
import styles from '../Style/contactme.module.css';
import Button from '../Components/Button';
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
      <div id='contact' className='w-full h-full'>
      <div className={styles.container}>
        <h1 class={styles.h1}>CONTACT</h1>
        <hr className={styles.line}/>
        <div className={styles.text}>
            <p className={styles.p1}>
            Whether you&apos;re looking to collaborate, commission a unique piece, 
            or simply share your thoughts, I&apos;d love to hear from you! 
            Art is all about connection, and I believe every conversation sparks creativity. 
            Fill in the form below, and let&apos;s bring your ideas to life. 
            No matter how big or small, your vision is always welcome. Reach out, and let&apos;s make something unforgettable!
            </p>
          </div>
          <div className={styles.card}>
          <form className={styles.formcontainer} ref={form} onSubmit={sendEmail}> 
              
                <div className={styles.column1}>
                  <label className={styles.labels}>Name</label>
                  <input 
                  required
                  type="text" 
                  name="user_name"
                  id='name'
                  placeholder='Full name'
                  className={styles.inputs}
                   />
                </div>
                <div className={styles.column2}>
                  <label className={styles.labels}>Email</label>
                  <input 
                    required
                    type="email" 
                    name="user_email" 
                    id='user_email'
                    placeholder='Email'
                    className={styles.inputs}
                    />
                </div>
                <div className={styles.column3}>
                  <label className={styles.labels}>Message</label>
                  <textarea
                    className={styles.textarea}
                    required
                    name='message'
                    placeholder='Message me'
                  />
                  <div className={styles.button}>
                  <Button type={'submit'} value={'Send'} text={'Send'}/>
                  </div>
                </div>
            </form>
          </div>
    </div>
    </div>
  )
};

export default Contact;
              
