import React from 'react';
import './App.css';

function ToDo({todo, index, completeToDo, deleteToDo}) {
return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className='todo'>
        {todo.text}
        <div>
            <button onClick={() => completeToDo(index)}>Complete</button>
            <button onClick={() => deleteToDo(index)}>Delete</button>
        </div>
    </div>
)
}
export default ToDo;