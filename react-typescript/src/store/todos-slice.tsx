import { createSlice } from "@reduxjs/toolkit";
import Todo from "../models/todos";

export type TodosStateObj = {
  todos: Todo[];
};

export type TodosActionsObj = {
  add: (
    state: TodosStateObj,
    action: { payload: string; type: string }
  ) => void;
  remove: (
    state: TodosStateObj,
    action: { payload: string; type: string }
  ) => void;
};

const initialState: TodosStateObj = { todos: [] };

const todosSlice = createSlice<TodosStateObj, TodosActionsObj>({
  name: "todos",
  initialState,
  reducers: {
    add: ({ todos }, { payload: text }) => {
      const newTodo = new Todo(text);
      todos.push(newTodo);
    },
    remove: ({ todos }, { payload: id }) => {
      const removedIndex = todos.findIndex((todo) => todo.id === id);
      todos.splice(removedIndex, 1);
    },
  },
});

export const todoActions = todosSlice.actions;
export default todosSlice.reducer;
