import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todos";

const App: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos((state) => [new Todo(text), ...state]);
  };

  return (
    <div>
      <NewTodo addTodo={addTodo} />
      <Todos items={todos} />
    </div>
  );
};

export default App;
