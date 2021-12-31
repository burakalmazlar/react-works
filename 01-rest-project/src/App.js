import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovie from "./components/AddMovie";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setLoading(true);

    try {
      setError(null);

      const response = await fetch("https://root.takaska.com/persons");
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
      const data = await response.json();

      setMovies(
        data.map((person, index) => {
          return {
            id: person.id,
            name: person.name,
            age: person.age,
          };
        })
      );
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const addMovieHandler = useCallback(async (person) => {
    const response = await fetch("https://root.takaska.com/person/save", {
      method: "POST",
      body: JSON.stringify(person),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error("Something went wrong.");
    }
    const data = await response.json();
    fetchMovieHandler();
  }, []);

  let content = <MoviesList error={error} movies={movies} />;
  if (loading) {
    content = <p>Loading.</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Persons</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
