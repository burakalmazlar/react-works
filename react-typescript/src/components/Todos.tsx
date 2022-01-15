import React from "react";
import useTodos from "../hooks/use-todos";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const { todos } = useTodos();
  return (
    <ul className={classes.todos}>
      {todos.map((item, index) => (
        <TodoItem key={index} {...item} />
      ))}
    </ul>
  );
};

export default Todos;
