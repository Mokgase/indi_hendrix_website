import React from "react";
import styles from "../Style/footer.module.css";
import Button from "../Components/Button";

const Footer =() => {
    return(
        <div className={styles.box}>


            <div className={styles.row}>
                <div className={styles.column1}>
                    <h1 className={styles.heading}>Contact Me</h1>
                        <ul class={styles.list}>
                            <li class={styles.listitems}>
                                <a href="tel:+27678787907" target="_blank">(+27) 67 878 7907</a>  
                            </li>
                            <li class={styles.listitems}>
                                <a id="mail" href="https://mail.google.com/mail/?view=cm&fs=1&to=indihendrix@gmail.com" target="_blank">indihendrix@gmail.com</a>
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
                                <a href="" target="_blank">Privacy policy</a>
                            </li>
                            <li class={styles.listitems}>
                                <a href="">Terms & Condition</a>
                            </li>
                        </ul>
                </div>
                <div className={styles.column3}>
                    <h1 className={styles.heading}>Newsletter sign up</h1>
                        <ul class={styles.listitems}>
                            <input type="email" />
                            <Button text={'Send'}/>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;