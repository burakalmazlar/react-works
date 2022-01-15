import React, { FormEvent, FormEventHandler, RefObject, useRef } from "react";
import useTodos from "../hooks/use-todos";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const { addTodo } = useTodos();

  const text: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    addTodo(text.current!.value);
  };

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <label>Todo Text</label>
      <input ref={text} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
