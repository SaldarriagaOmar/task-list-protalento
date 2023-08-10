import React, { useState, useEffect } from 'react';
import './task.css';

export default function Task(props) {
  const [isDone, setIsDone] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(props.description);

  useEffect(() => {
    const data = localStorage.getItem('toDoItems');
    if (data) {
      props.setTasks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(props.tasks));
  }, [props.tasks]);

  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(props.tasks));
  }, [props.tasks]);

  function handleChange(e) {
    setEditedDescription(e.target.value);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setIsEditing(false);
  }

  function confirmDelete() {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task? This action cannot be undone.'
    );
    if (confirmDelete) {
      props.onDelete(props.id);
    }
  }

  return (
    <div className="anyTask">
      <input
        type="checkbox"
        checked={!isDone}
        onChange={() => setIsDone(!isDone)}
      />
      <div className="nombreTarea">
        {isEditing ? (
          <input
            className="taskText"
            type="text"
            value={editedDescription}
            onChange={handleChange}
            required
          />
        ) : (
          <p className={isDone ? '' : 'checked'}>{props.description}</p>
        )}
      </div>
      <div className="actionbutton">
        {isEditing ? (
          <button id="save" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button id="edit" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button id="delete" onClick={confirmDelete}>
          Del
        </button>
      </div>
    </div>
  );
}
