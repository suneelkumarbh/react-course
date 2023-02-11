import { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const todosContext = useContext(TodosContext);
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      return;
    }

    todosContext.addTodo(enteredText)
  }


  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">New todo</label>
    <input type="text" id="text" ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo;