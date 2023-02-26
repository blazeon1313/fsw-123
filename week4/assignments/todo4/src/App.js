import { useState } from 'react';
import './App.css';
import {todos as data} from './store';
import TodoList from './todoList';
const  { v4: uuidv4 } = require('uuid')

function App() {
  const [todos, setToDo] = useState(data);

  const addTodo = (text) => {
    var newTodo = {text: text, id: uuidv4(), isComplete: false}
    const updatesTodo = [...todos, newTodo];
    // to show the added item to the Todo list
    console.log(newTodo);
    setToDo(updatesTodo);
  }
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
      <TodoList todos={todos} deleteTodo={deleteTodo} addTodo={addTodo} complete={completeTodo}/>
    </div>
  );
}

export default App;
