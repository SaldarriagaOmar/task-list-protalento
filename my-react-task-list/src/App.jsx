import React, { useState, useEffect } from 'react';
import './App.css';
import Task from './components/task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('toDoItems');
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  function AddTask() {
    const taskItem = {
      id: tasks.length,
      item: newItem,
      status: false,
    };
    setTasks([...tasks, taskItem]);
    setNewItem('');


    localStorage.setItem('toDoItems', JSON.stringify([...tasks, taskItem]));
  }

  function handleDelete(id) {
    setTasks(tasks.filter(task => task.id !== id));

    localStorage.setItem('toDoItems', JSON.stringify(tasks.filter(task => task.id !== id)));
  }

  function handleSubmit(e) {
    e.preventDefault();
    AddTask();
  }

  return (
    <div>
      <div id="form">
        <h1>To-Do list</h1>
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
            description={task.item}
            onDelete={handleDelete}
            id={task.id}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;