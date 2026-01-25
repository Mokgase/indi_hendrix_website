import {useState} from "react";
import styles from "../Style/modal.module.css";

export default function Modal({children}){
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className={styles.openModalButton}
        onClick={openModal}
      >
      <p className={styles.text}>See More</p>
      </button>
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span onClick={closeModal} className={styles.closeButton}>
              <p className={styles.text}>close</p>
            </span>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}