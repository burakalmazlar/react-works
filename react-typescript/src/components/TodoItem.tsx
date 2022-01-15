import React, { MouseEventHandler } from "react";
import useTodos from "../hooks/use-todos";
import Todo from "../models/todos";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<Todo> = (props) => {
  const { removeTodo } = useTodos();
  const itemOnClick: MouseEventHandler = (event) => {
    removeTodo(props.id);
  };

  return (
    <li className={classes.item} onClick={itemOnClick}>
      {props.text}
    </li>
  );
};

export default TodoItem;
