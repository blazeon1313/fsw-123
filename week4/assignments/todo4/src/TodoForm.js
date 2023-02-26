// input form for Todo list

import React, { useState } from 'react';

function TodoForm ({ addTodo }) {
    
    const newInput = {text: ""}
    const [input, setInput] = useState(newInput)
    const [errMessage, setErrMessage] = useState("")

    const handleChange = (e) => {
        var {value, name} = e.target
        setInput({...input, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.text === ""){
            let error = "The text field is required!!";
                setErrMessage(error)
                return;
        } else{
            addTodo(input.text);
            setInput(newInput)
        }
    }

    return(
        <form>
            <input type={"text"} name="text" value={input.text} onChange={handleChange} required="required" />
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <div className="error">{errMessage}</div>
        </form>
    );
}

export default TodoForm;