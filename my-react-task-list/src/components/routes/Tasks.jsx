import React, { useState } from 'react';
import Task from '../Task';
import { useTaskOptions } from '../useTaskOptions';
import Menu from './Menu';
import { Switch, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import '../../App.css';

function Tasks() {

  const { tasks, createTask, deleteTask, updateTask, checkedTask } = useTaskOptions();

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
      <Menu />
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
          <button type="submit"><AddIcon /></button>
        </form>
      </div>

      <div id="task">
        {Array.isArray(tasks) && tasks.map(task => (
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

export default Tasks;