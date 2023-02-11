import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"

const Todos: React.FC = () => {

  const todosContext = useContext(TodosContext)

  return <ul className={classes.todos}>
    {todosContext.items.map(item => <TodoItem todo={item} />)}
  </ul>
}
export default Todos;