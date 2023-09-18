import { useState, useEffect } from 'react';

export function useTaskOptions() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('toDoItems');
    if (data) {
      setTasks(JSON.parse(data));
    }

    const completedData = localStorage.getItem('completedTasks');
    if (completedData !== undefined) {
      setCompletedTasks(JSON.parse(completedData));
    } else {
      setCompletedTasks([])
    }
  }, []);


  const createTask = (newItem, description) => {
    const taskItem = {
      id: Date.now(),
      item: newItem,
      description: description,
      status: false,
    };
    setTasks((prevTasks) => [...prevTasks, taskItem]);

    setCompletedTasks((prevCompletedTasks) => [
      ...prevCompletedTasks,
      { ...taskItem, status: false }
    ])

    updateLocalStorage([...tasks, taskItem], [...completedTasks, taskItem]);
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    setCompletedTasks(prevCompletedTasks => prevCompletedTasks.filter(task => task.id !== id));
    updateLocalStorage(tasks.filter(task => task.id !== id), completedTasks.filter(task => task.id !== id));
  };

  const updateTask = (id, updatedItem, updatedDescription) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, item: updatedItem, description: updatedDescription } : task
    );
    setTasks(updatedTasks);
    setCompletedTasks(prevCompletedTasks => prevCompletedTasks.map(task =>
      task.id === id ? { ...task, item: updatedItem, description: updatedDescription } : task
    ));
    updateLocalStorage(updatedTasks, completedTasks);
  };

  const checkedTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    /* setTasks(updatedTasks)
    updateLocalStorage(updatedTasks) */
  console.log(updateTask)
  }


  const updateLocalStorage = (updatedTasks, updatedCompletedTasks) => {
    localStorage.setItem('toDoItems', JSON.stringify(updatedTasks));
    localStorage.setItem('completedTasks', JSON.stringify(updatedCompletedTasks));
  };

  return { tasks, createTask, deleteTask, updateTask, completedTasks, checkedTask };
}