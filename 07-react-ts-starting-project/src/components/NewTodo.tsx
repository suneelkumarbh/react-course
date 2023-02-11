import { FormEvent, useRef } from "react";
import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{ addTodo: (enteredText: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      return;
    }

    props.addTodo(enteredText)
  }


  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">New todo</label>
    <input type="text" id="text" ref={todoTextInputRef} />
    <button>Add Todo</button>
  </form>
}

export default NewTodo;