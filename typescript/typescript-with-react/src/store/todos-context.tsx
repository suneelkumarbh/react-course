import { useState } from "react";
import React, { createContext } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[],
  addTodo: (enteredText: string) => void,
  removeTodo: (id: string) => void
}

export const TodosContext = createContext<TodoContextObj>({
  items: [],
  addTodo: (enteredText: string) => { },
  removeTodo: (id: string) => { }
})

const TodosProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);
    setTodos(prevState => {
      return prevState.concat(newTodo)
    })
  }

  const onRemoveHandler = (id: string) => {
    setTodos(currentState => {
      return currentState.filter(todo => todo.id !== id)
    })
  }

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemoveHandler
  }
  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosProvider