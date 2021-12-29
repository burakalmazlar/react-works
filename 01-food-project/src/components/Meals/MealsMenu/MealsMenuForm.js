import React, { useRef } from "react";

import classes from "./MealsMenuForm.module.css";

const MealsMenuForm = (props) => {
  const inputRef = useRef();

  const attributes = {
    id: props.id,
    type: "number",
    step: "1",
    min: "1",
    max: "5",
    defaultValue: 1,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(+inputRef.current.value);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.input}>
        <label htmlFor={attributes.id}>Amount</label>
        <input ref={inputRef} {...attributes} />
      </div>
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealsMenuForm;
