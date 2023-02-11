import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"

const Todos: React.FC<{ items: Todo[], onRemove: (id: string) => void }> = (props) => {
  return <ul className={classes.todos}>
    {props.items.map(item => <TodoItem todo={item} onRemove={props.onRemove} />)}
  </ul>
}
export default Todos;