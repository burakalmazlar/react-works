import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

const App: React.FC = () => {
  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
};

export default App;
