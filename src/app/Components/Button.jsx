'use client';

import React, { useState } from 'react'
import styles from '../Style/roundedButton.module.css';

const Button = ({onClick, text}) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <button className={styles.roundedButton} 
            onClick={onClick}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}>
       
        <p className={styles.text}>{text}</p>
    </button>
  )
}

export default Button