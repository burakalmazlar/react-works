import React, { useState } from "react";

import WarningPopup from "./WarningPopup";
import styles from "./UserForm.module.css";
import Button from "./UI/Button/Button";

const UserForm = (props) => {
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isWarned, setIsWarned] = useState(false);
  const [warning, setWarning] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setIsWarned(true);
      setWarning("Name is mandatory.");
    } else if (age < 1) {
      setIsWarned(true);
      setWarning("Age must be more than zero.");
    } else {
      props.onAddUser({ key: id, name: name, age: age });
      setId((prev) => ++prev);
      setName("");
      setAge("");
    }
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value.trim());
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const warningCloseHandler = (e) => {
    setIsWarned(false);
    setWarning("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <div className={styles["form-control"]}>
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className={styles["form-control"]}>
          <label>Age</label>
          <input type="number" value={age} onChange={ageChangeHandler} />
        </div>
        <Button type="submit" className={styles.button}>
          Add User
        </Button>
      </div>
      <WarningPopup
        visible={isWarned}
        message={warning}
        onClose={warningCloseHandler}
      />
    </form>
  );
};

export default UserForm;
