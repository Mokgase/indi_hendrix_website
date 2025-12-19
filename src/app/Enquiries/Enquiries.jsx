'use client'
import { useEnquiry } from "../Components/Enquiry";
import styles from "../Style/enquiries.module.css";
import Button from "../Components/Button";


const Enquiries = () => {
  const { enquiries } = useEnquiry();
  const email = "thapelommakola2@gmail.com";
  const subject = "Enquiry about painting(s)";
  const body = "Hi I am interested with the paintings listed below, please get in touch with me with more information  about them.";
  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      <h1 className={styles.h1}>My Enquiries</h1>
      {enquiries.length === 0 ? (
        <p className={styles.p}>No paintings added yet.</p>
      ) : (
        <ul>
          {enquiries.map((painting, i) => (
            <li key={i}>
              <div className={styles.container}>
                <h1 className={styles.painting_title}>{painting.title}</h1>  <p className={styles.painting_price}>- {painting.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Button
        text="Send Enquiry"
        href={mailto}
      />
      </div>
  );
};

export default Enquiries;
