import React, { useState, Fragment, useRef, useReducer } from "react";

import WarningPopup from "./WarningPopup";
import styles from "./UserForm.module.css";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";

const UserForm = (props) => {
  const [id, setId] = useState(1);
  const [warning, setWarning] = useReducer((state, action) => {
    return action;
  }, null);
  const nameRef = useRef();
  const ageRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = +ageRef.current.value;
    if (name.length === 0) {
      setWarning({ text: `Name is mandatory.`, ref: nameRef });
    } else if (age < 1) {
      setWarning({
        text: `Age must be more than zero.`,
        ref: ageRef,
      });
    } else {
      props.onAddUser({ key: id, name: name, age: age });
      setId((prev) => ++prev);
      nameRef.current.value = "";
      ageRef.current.value = "";
      nameRef.current.focus();
    }
  };

  const closeWarning = () => {
    warning.ref.current.focus();
    setWarning(null);
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <div>
          <Input label={`Name`} type={"text"} ref={nameRef} />
          <Input label={`Age`} type={`number`} ref={ageRef} />
          <Button type="submit" className={styles.button}>
            Add User
          </Button>
        </div>
      </form>
      {warning && (
        <WarningPopup message={warning.text} onClose={closeWarning} />
      )}
    </Fragment>
  );
};

export default UserForm;
