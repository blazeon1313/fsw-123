function TodoList (){
    return (
        <div>
            <h1>To Do List</h1>
            <ul>
                <li>
                    <input type="checkbox" />
                    <label>Make a plan</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Do some research</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Write some code</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Test the code</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Find the errors through debugging</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Fix the errors that were found</label>
                </li>
                <li>
                    <input type="checkbox" />
                    <label>Test the code again</label>
                </li>
            </ul>
        </div>
    );
}

export default TodoList;