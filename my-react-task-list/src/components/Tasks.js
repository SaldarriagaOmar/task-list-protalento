import React from 'react';

function Tasks(props) {
  const { tasks } = props;

  return (
    <div>
      <h1>Tareas</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;