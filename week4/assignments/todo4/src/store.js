// list of To Do's
const  { v4: uuidv4 } = require('uuid')

export const todos = [
    {
        text: "Make a plan", 
        id: uuidv4(), 
        isComplete: false
    },
    {
        text: "Do some research", 
        id: uuidv4(), 
        isComplete: false
    },
    {
        text: "Write some code", 
        id: uuidv4(), 
        isComplete: false
    },
    {
        text: "Test the code", 
        id: uuidv4(), 
        isComplete: false
    },
    {
        text: "Find errors through debugging", 
        id: uuidv4(), 
        isComplete: false
    },
    {
        text: "Fix the errors found", 
        id: uuidv4(), 
        isComplete: false
    },
    {
        text: "Test the code again", 
        id: uuidv4(), 
        isComplete: false
    }
]