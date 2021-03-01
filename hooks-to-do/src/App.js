import React, {useState} from 'react';
import ToDo from './ToDo';
import './App.css';
import ToDoForm from './ToDoForm';

function App() {
const [todos, setToDos] = useState([
  {
    text: "Learn React",
    isCompleted: false,
  },
  {
    text: "Meet friends and have a beer",
    isCompleted: false,
  },
  {
    text: "Go to the gym",
    isCompleted: false,
  },
]);

const addToDo = text => {
  const newToDos = [...todos, {text}];
  setToDos(newToDos);
}

const completeToDo = index => {
  const newToDos = [...todos];
  newToDos[index].isCompleted = true;
  setToDos(newToDos);
}
const deleteToDo = index => {
  const newToDos = [...todos];
  newToDos.splice(index, 1);
  setToDos(newToDos);
}

return (
  <div className='app'>
    <div className='todo-list'>
      {todos.map((todo, index) => (
        <ToDo key={index} index={index} todo={todo} completeToDo={completeToDo} deleteToDo={deleteToDo} />
      ))}
      <ToDoForm addToDo={addToDo}/>
    </div>
  </div>
)
}

export default App;