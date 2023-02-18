// function making the list into line items

function Todo ({todo, deleteTodo, complete}) {
    return (
        <li className="list">
            <div>
                <input type="checkbox" className="checkBox" checked= { todo.iscomplete } onChange={() => complete(todo.id)}/>
                <span style={{textDecoration:  todo.isComplete ? 'line-through' : ""}}>
                <label htmlFor={'todo-' + todo.id}>{todo.text}</label></span>
                <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>X</button>
            </div>
        </li>
    )
}

export default Todo;