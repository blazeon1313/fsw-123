import { useState } from 'react';
import './App.css';
import {todos as data} from './STORE';
import TodoList from './TodoList'

function App() {
  const [todos, setToDo] = useState(data);

  const completeTodo = id => {
    const tempTodo = [...todos];
    const index = tempTodo.findIndex(todos => todos.id === id);
    console.log(index)
    tempTodo[index].isComplete = !tempTodo[index].isComplete;
    setToDo(tempTodo);
  }
  const deleteTodo = id => {
    const tempTodo = [...todos];
    const newTodos = tempTodo.filter((todos) => todos.id !== id);
    console.log(newTodos)
    setToDo(newTodos);
  }

  return (
    <div>
      <TodoList todos={todos} deleteTodo={deleteTodo} complete={completeTodo}/>
    </div>
  );
}

export default App;