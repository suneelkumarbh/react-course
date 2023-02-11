import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css"
const TodoItem: React.FC<{ todo: Todo, onRemove: (id: string) => void }> = (props) => {

  const removeItemHandler = () => {
    props.onRemove(props.todo.id)
  }
  return <li
    className={classes.item}
    key={props.todo.id}
    onClick={removeItemHandler}>
    {props.todo.text}
  </li>
}

export default TodoItem;