import React, { memo, forwardRef } from "react";

import styles from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles["form-control"]}>
      <label>{props.label}</label>
      <input type={props.type} ref={ref} />
    </div>
  );
});

export default memo(Input);
