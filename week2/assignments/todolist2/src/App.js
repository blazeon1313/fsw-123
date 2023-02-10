import './App.css';
import {todos} from './STORE';
import TodoList from './TodoList'

function App() {
  return (
    <div>
      <TodoList todos = {todos} />
    </div>
  );
}

export default App;