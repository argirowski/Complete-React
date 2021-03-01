import React, {useState} from 'react';
import './App.css';

function ToDoForm({addToDo}) {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addToDo(value);
        setValue('');
    }

    return (<form onSubmit={handleSubmit}>
        <input type='text' className='input' placeholder='Add a new to do' value={value} onChange={e => setValue(e.target.value)} />
    </form>);

}

export default ToDoForm;