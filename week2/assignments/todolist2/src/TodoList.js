import Todo from './Todo';

// function brinning the line items into the unordered list
function TodoList (props){
    console.log(props.todos) // log to see if the todos worked using props
    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                {props.todos.map((todo, index) =>{
                    return (
                        <Todo todo={todo} index={index} />
                    )
                })}
            </ul>
        </div>
    );
}

export default TodoList;