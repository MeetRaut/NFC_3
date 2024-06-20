import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Modal.module.css";

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;