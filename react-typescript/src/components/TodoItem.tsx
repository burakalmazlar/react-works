import Todo from "../models/todos";
import "./TodoItem.css";

const TodoItem: React.FC<Todo> = (props) => {
  return <li className={`item`}>{props.text}</li>;
};

export default TodoItem;
