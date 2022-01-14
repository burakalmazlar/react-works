import {
  FC,
  FormEvent,
  FormEventHandler,
  LegacyRef,
  MutableRefObject,
  RefObject,
  useRef,
} from "react";

import "./NewTodo.css";

const NewTodo: FC<{ addTodo: (text: string) => void }> = (props) => {
  const text: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    props.addTodo(text.current!.value);
  };

  return (
    <form onSubmit={onSubmit} className={`form`}>
      <label>Todo Text</label>
      <input ref={text} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
