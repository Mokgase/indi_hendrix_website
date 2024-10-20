import React from 'react';
import Typography from '../../../public/Assets/svg/Typography';
import styles from '../Style/marquee.module.css'

const Marquee =()=>{
    return(
        <div className={styles.marquee}>
            <div className={styles.marquee_content}>
                <Typography/>
            </div>
        </div>
    );
};
export default Marquee;