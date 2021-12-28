import React from "react";
import Button from "./UI/Button/Button";

import styles from "./WarningPopup.module.css";

const WarningPopup = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2>Warning</h2>
        </header>
        <p className={styles.content}>{props.message}</p>
        <footer className={styles.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </div>
    </div>
  );
};

export default WarningPopup;
