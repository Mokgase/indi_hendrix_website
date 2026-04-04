'use client';

import React, { useState } from 'react'
import styles from '../Style/roundedButton.module.css';

const Button = ({onClick, text, type, disabled}) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <button className={`${styles.roundedButton} ${disabled ? styles.disabled : ''}`}
            type={type || 'button'}
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={()=> setIsHovered(true)}
            onMouseLeave={()=> setIsHovered(false)}>
       
        <p className={styles.text}>{text}</p>
    </button>
  )
}

export default Button