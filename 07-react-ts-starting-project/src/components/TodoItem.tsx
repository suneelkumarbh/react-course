import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoItem.module.css"
const TodoItem: React.FC<{ todo: Todo }> = (props) => {

  const todosContext = useContext(TodosContext);

  const removeItemHandler = () => {
    todosContext.removeTodo(props.todo.id)
  }
  return <li
    className={classes.item}
    key={props.todo.id}
    onClick={removeItemHandler}>
    {props.todo.text}
  </li>
}

export default TodoItem;