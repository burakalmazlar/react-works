import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  const isEmpty = props.movies.length === 0;
  return (
    <>
      {isEmpty ? (
        <p>No persons.</p>
      ) : (
        <ul className={classes["movies-list"]}>
          {props.movies.map((person) => (
            <Movie key={person.id} name={person.name} age={person.age} />
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieList;
