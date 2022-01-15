import { useDispatch, useSelector } from "react-redux";
import Todo from "../models/todos";
import store from "../store";
import { todoActions } from "../store/todos-slice";

const useTodos = () => {
  const dispatch = useDispatch();

  const state = store.getState();
  const todos = useSelector<typeof state, Todo[]>((state) => state.todos.todos);

  const addTodo = (text: string) => {
    dispatch(todoActions.add(text));
  };
  const removeTodo = (id: string) => {
    dispatch(todoActions.remove(id));
  };

  return { todos, addTodo, removeTodo };
};

export default useTodos;
