import React from "react";

import classes from "./Person.module.css";

const Person = (props) => {
  return (
    <li className={classes.person} onClick={props.onClick}>
      <h2>{props.name}</h2>
      <h3>{props.age}</h3>
    </li>
  );
};

export default Person;
