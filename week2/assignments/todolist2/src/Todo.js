// function making the list into line items

function Todo ({todo, index}) {
    return (
        <li className="list" key={index}>
            <div>
                <input type="checkbox" defaultChecked={false} />
                <label htmlFor={'todo-' + index}>{todo.text}</label>
            </div>
        </li>
    )
}

export default Todo;