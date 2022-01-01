import React, { useRef, useState } from "react";

import classes from "./AddPerson.module.css";

function AddPerson(props) {
  const nameRef = useRef("");
  const ageRef = useRef("");
  const [valid, setValid] = useState(false);

  const validateHandler = (e) => {
    setValid(nameRef.current.value.length > 1 && +ageRef.current.value > 0);
  };

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const person = {
      name: nameRef.current.value,
      age: +ageRef.current.value,
    };

    props.onAddPerson(person);
    nameRef.current.value = "";
    ageRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input
          type="text"
          id="title"
          ref={nameRef}
          onChange={validateHandler}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Age</label>
        <input
          id="opening-text"
          type="number"
          min="0"
          max="99"
          step="1"
          ref={ageRef}
          onChange={validateHandler}
        ></input>
      </div>
      <button className={classes.button} disabled={!valid}>
        Add Person
      </button>
    </form>
  );
}

export default AddPerson;
