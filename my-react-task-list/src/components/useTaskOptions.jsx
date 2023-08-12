import { useState, useEffect } from 'react';

export function useTaskOptions() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('toDoItems');
    if (data) {
      setTasks(JSON.parse(data));
    }
  }, []);

  const createTask = newItem => {
    const taskItem = {
      id: Date.now(),
      item: newItem,
      status: false,
    };
    setTasks(prevTasks => [...prevTasks, taskItem]);
    updateLocalStorage([...tasks, taskItem]);
  };

  const deleteTask = id => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    updateLocalStorage(tasks.filter(task => task.id !== id));
  };

  const updateTask = (id, updatedItem) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, item: updatedItem } : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const updateLocalStorage = updatedTasks => {
    localStorage.setItem('toDoItems', JSON.stringify(updatedTasks));
  };

  return { tasks, createTask, deleteTask, updateTask };
}