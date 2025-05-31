import React from "react";
import styles from "../Style/footer.module.css";
import Button from "../Components/Button";
import NewsLetter from "../Newsletter/NewsLetter";
import Link from "next/link";


const Footer =() => {
    return(
        <div className={styles.box}>


            <div className={styles.row}>
                <div className={styles.column1}>
                    <h1 className={styles.heading}>Contact Me</h1>
                        <ul class={styles.list}>
                            {/* <li class={styles.listitems}>
                                <a href="tel:+27678787907" target="_blank">(+27) 67 878 7907</a>  
                            </li> */}
                            <li class={styles.listitems}>
                                <a id="mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=indihendrix@gmail.com" target="_blank">indihendrix27@gmail.com</a>
                            </li>
                            <li class={styles.listitems}>
                                <a href="" target="_blank">FAQs</a>
                            </li>
                        </ul>
                </div>
                <div className={styles.column2}>
                    <h1 className={styles.heading}>Follow Me</h1>
                        <ul class={styles.list}>
                            <li class={styles.listitems}>
                                <a href="https://www.instagram.com/indi_hendrix/">Intagram</a>
                            </li>
                            <li class={styles.listitems}>
                                <a href="">Twitter</a>
                            </li>
                        </ul>
                </div>
                <div className={styles.column3}>
                    <h1 className={styles.heading}>Legal</h1>
                        <ul class={styles.list}>
                            <li class={styles.listitems}>
                                <Link href="/Footer/PrivacyPolicy" target="_blank">Privacy Policy</Link>
                            </li>
                            <li class={styles.listitems}>
                                <Link href="/Footer/TermsAndConditions" target="_blank">Terms & Conditions</Link>
                            </li>
                        </ul>
                </div>
                <div className={styles.column4}>
                    <NewsLetter/>
                </div>
            </div>
            <p className={styles.text}>2024 Indi Hendrix All Rights Reserved</p>
        </div>
    )
}

export default Footer;