import React, { useRef } from "react";

import classes from "./AddMovie.module.css";

function AddMovie(props) {
  const nameRef = useRef("");
  const ageRef = useRef("");

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      name: nameRef.current.value,
      age: +ageRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Name</label>
        <input type="text" id="title" ref={nameRef} />
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
        ></input>
      </div>
      <button>Add Person</button>
    </form>
  );
}

export default AddMovie;
