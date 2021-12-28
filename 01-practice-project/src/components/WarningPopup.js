import React from "react";
import ReactDOM from "react-dom";
import Button from "./UI/Button/Button";

import styles from "./WarningPopup.module.css";

const WarningPopup = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles.backdrop}></div>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          <header className={styles.header}>
            <h2>Warning</h2>
          </header>
          <p className={styles.content}>{props.message}</p>
          <footer className={styles.actions}>
            <Button onClick={props.onClose}>Close</Button>
          </footer>
        </div>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default WarningPopup;
