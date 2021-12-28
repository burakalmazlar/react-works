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
      <div className="card">
        <UserForm onAddUser={addUserHandler} />
      </div>
      <div className="card">
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
