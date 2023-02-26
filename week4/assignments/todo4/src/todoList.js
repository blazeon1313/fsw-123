//import Todo list
import Todo from './Todo';
import TodoForm from './TodoForm';

// function bringning the line items into the unordered list
function TodoList (props){
    console.log(props.todos) // log to see if the todos worked using props
    return (
        <div>
            <h1>To Do List</h1>
            <TodoForm addTodo={props.addTodo} />
            <ul>
                {props.todos.map((todo) =>{
                    return (
                        <Todo todo={todo} key={todo.id} deleteTodo={props.deleteTodo} complete={props.complete}/>
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoList;