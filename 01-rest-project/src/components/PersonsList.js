import React from "react";

import Person from "./Person";
import classes from "./PersonsList.module.css";

const PersonList = (props) => {
  const { persons } = props;
  const isEmpty = persons.length === 0;
  return (
    <>
      {isEmpty ? (
        <p>No persons.</p>
      ) : (
        <ul className={classes["persons-list"]}>
          {persons.map((person) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              onClick={props.onDelete.bind(null, person.id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PersonList;
