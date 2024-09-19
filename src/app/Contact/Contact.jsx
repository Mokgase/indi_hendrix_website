// import React, { useState } from 'react';
import React, { useRef } from 'react';
import styles from '../Style/contactme.module.css';
import Button from '../Components/Button';
import contactImage from '../../../public/Assets/images/contact.jpg';
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
    <div id='contact' className='mt-10'>
        <div className={styles.column1}>
            <div className= "w-[50%] h-auto">
              <Image className={styles.img}
                src={contactImage}
                alt='contact image'
                width={500}
                height={0}

              />
            </div>
            {/* </div> */}
        </div>

        <div className={styles.column2}>
          <div className={styles.formcontainer}>
          {/* onSubmit={handleSubmit} */}
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
          </div>
        </div>
      </div>
   
  )
}

export default Contact;
              
