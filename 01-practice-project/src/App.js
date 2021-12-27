import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

import "./App.css";

function App() {
  const [users, setUsers] = useState([{ key: 0, name: "Burak", age: 38 }]);

  const addUserHandler = (user) => {
    setUsers((prev) => [user, ...prev]);
  };

  return (
    <div>
      <section>
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section>
        <UserList users={users} />
      </section>
    </div>
  );
}

export default App;
