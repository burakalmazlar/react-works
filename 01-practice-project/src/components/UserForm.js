import React, { useState, Fragment, useRef } from "react";

import WarningPopup from "./WarningPopup";
import styles from "./UserForm.module.css";
import Button from "./UI/Button/Button";

const UserForm = (props) => {
  const [id, setId] = useState(1);
  const [warning, setWarning] = useState();
  const nameRef = useRef();
  const ageRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = +ageRef.current.value;
    if (name.length === 0) {
      setWarning("Name is mandatory.");
    } else if (age < 1) {
      setWarning("Age must be more than zero.");
    } else {
      props.onAddUser({ key: id, name: name, age: age });
      setId((prev) => ++prev);
      nameRef.current.value = "";
      ageRef.current.value = "";
    }
  };

  const warningCloseHandler = (e) => {
    setWarning();
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <div>
          <div className={styles["form-control"]}>
            <label>Name</label>
            <input type="text" ref={nameRef} />
          </div>
          <div className={styles["form-control"]}>
            <label>Age</label>
            <input type="number" ref={ageRef} />
          </div>
          <Button type="submit" className={styles.button}>
            Add User
          </Button>
        </div>
      </form>
      {warning && (
        <WarningPopup message={warning} onClose={warningCloseHandler} />
      )}
    </Fragment>
  );
};

export default UserForm;
