import React, { useCallback, useEffect, useState } from "react";

import PersonsList from "./components/PersonsList";
import AddPerson from "./components/AddPerson";
import useHttp from "./hooks/use-http";

function App() {
  const [persons, setPersons] = useState([]);

  const [loading, error, sendRequest] = useHttp();

  const fetchPersonHandler = useCallback(() => {
    sendRequest("https://root.takaska.com/persons", null, (response) =>
      setPersons(response)
    );
  }, [sendRequest]);

  const addPersonHandler = useCallback(
    (person) => {
      sendRequest("https://root.takaska.com/person/save", person, (response) =>
        setPersons((prev) => {
          return [response, ...prev];
        })
      );
    },
    [sendRequest]
  );

  const deletePersonHandler = useCallback(
    (id) => {
      sendRequest(
        "https://root.takaska.com/person/delete/" + id,
        null,
        (response) =>
          setPersons((prev) => {
            return [...prev.filter((i) => i.id !== response)];
          })
      );
    },
    [sendRequest]
  );

  useEffect(() => {
    fetchPersonHandler();
  }, [fetchPersonHandler]);

  let content = (
    <PersonsList
      error={error}
      persons={persons}
      onDelete={deletePersonHandler}
    />
  );
  if (loading) {
    content = <p>Loading.</p>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddPerson onAddPerson={addPersonHandler} />
      </section>
      <section>
        <button onClick={fetchPersonHandler}>Fetch Persons</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
