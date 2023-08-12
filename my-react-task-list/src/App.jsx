import React, { useState } from 'react';
import './App.css';
import Task from './components/task';
import { useTaskOptions } from './components/useTaskOptions';

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskOptions();

  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    createTask(newItem);
    setNewItem('');
  }

  return (
    <div>
      <div id="form">
        <h1>To-Do list <img src="./src/assets/logo.png" alt="Logo" id='logo' /></h1>
        <h3>Name your new task below</h3>

        <form action="" onSubmit={handleSubmit}>
          <input
            className="inText"
            type="text"
            placeholder="New task"
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            required
          />

          <button type="submit">Add</button>
        </form>
        <p>*Press Enter to add easily</p>
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