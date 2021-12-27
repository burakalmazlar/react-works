import React from "react";
import Button from "./UI/Button/Button";

import styles from "./WarningPopup.module.css";

const WarningPopup = (props) => {
  return (
    <div style={{ display: props.visible ? "" : "none" }}>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Warning</h2>
        </div>
        <div className={styles.content}>{props.message}</div>
        <div className={styles.actions}>
          <Button type="button" onClick={props.onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WarningPopup;
