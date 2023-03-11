// function making the list into line items
import React, { useState } from 'react';

function Todo ({todo, deleteTodo, complete}) {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState(todo.text);
    
    //function for the edit
    function handleEdit(e) {
      e.preventDefault();
      todo.text = text;
      setEditing(false);
    }

    //function for the cancel button
    function handleCancel() {
        setEditing(false);
        setText(todo.text);
      }

    const isSaveDisabled = !text; // save button is disabled when text is empty

    return (
        <div className="listBox">
            <li className="list">
                <div>
                    <input type="checkbox" className="checkBox" checked= { todo.iscomplete } onChange={() => complete(todo.id)}/>
                    <span style={{textDecoration:  todo.isComplete ? 'line-through' : ""}}>
                    <label htmlFor={'todo-' + todo.id}>{todo.text}</label></span>

                    {editing ? (
                        <form onSubmit={handleEdit}>
                            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                            <button type="submit" className="updateBtn" disabled={isSaveDisabled}>Update</button>
                            <button type="button" className="cancelBtn" onClick={handleCancel}>Cancel</button>
                        </form>
                        ) : (
                        <div>
                            <button className="deleteBtn" onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button className="editBtn" onClick={() => setEditing(true)}>Edit</button>
                        </div>
                        )
                    }
                </div>
            </li>
        </div>
    )
}

export default Todo;