import { useState } from 'react'
import './App.css'
import Task from './components/task'


export default function App() {
  const [tasks, setTasks] = useState([])
  const [newItem, setNewItem] = useState("")
  function AddTask() {
    const taskItem = {
      id: 1,
      item: newItem,
      status: false
    }
    setTasks([...tasks, taskItem])
  }
  function handleSubmit(e) {
    e.preventDefault();
    AddTask()
  }
  return (
    <div>
      <div id='form'>
        <h1>To-Do list</h1>
        <h3>Name your new task below</h3>
        <form action="" onSubmit={handleSubmit}>
          <input className='inText' type="text" placeholder='New task' onChange={(e) => setNewItem(e.target.value)} />
          <button type="submit">Add</button>
        </form>

      </div>

      <div id='task'>
        {tasks.map(task => (
          <Task key={task.id} description={task.item} />))}
      </div>

    </div>
  )
}
