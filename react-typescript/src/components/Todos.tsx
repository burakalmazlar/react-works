import { Fragment } from "react";
import Todo from "../models/todos";
import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import "./Todos.css";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={`todos`}>
      {props.items.map((item, index) => (
        <TodoItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default Todos;
