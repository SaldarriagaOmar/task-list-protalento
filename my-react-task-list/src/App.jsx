import React, { useState } from 'react';
import './App.css';
import Task from './components/task';
import { useTaskOptions } from './components/useTaskOptions';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskOptions();

  const [newItem, setNewItem] = useState('');
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem.trim() === "") {
      return;
    }
    createTask(newItem, description);
    setNewItem('');
    setDescription('')
  }


  return (
    <div>
      <div id="form">
        <h1>To-Do list <img src="./src/assets/logo.png" alt="Logo" id='logo' /></h1>
        <h3>Name your new task below</h3>

        <form action="" onSubmit={handleSubmit}>
          <div className='headElement'>
            <input
              className="inText"
              id='title'
              type="text"
              placeholder="New task"
              value={newItem}
              onChange={e => setNewItem(e.target.value)}
              minLength="3"
              required
            />
          </div>
          <div className='headElement'>
            <input
              className='inText'
              id='description'
              type="text"
              placeholder='Task description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>

      <div id="task">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onUpdate={updateTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;