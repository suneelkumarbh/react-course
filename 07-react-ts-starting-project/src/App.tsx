import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
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

  return (
    <div className="App">
      <NewTodo addTodo={addTodoHandler} />
      <Todos items={todos} onRemove={onRemoveHandler} />
    </div>
  );
}

export default App;
