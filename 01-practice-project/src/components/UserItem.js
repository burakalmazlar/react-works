import React from "react";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={styles["user-item"]}>
      {props.name} ({props.age} years)
    </li>
  );
};

export default UserItem;
