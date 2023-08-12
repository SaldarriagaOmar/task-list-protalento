import React, { useState } from 'react';
import './task.css';

export default function Task(props) {
  const [isDone, setIsDone] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(props.task.item);

  function handleChange(e) {
    setEditedDescription(e.target.value);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function confirmDelete() {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this task? This action cannot be undone.'
    );
    if (confirmDelete) {
      props.onDelete(props.task.id);
    }
  }

  function handleSave() {
    setIsEditing(false);
    props.onUpdate(props.task.id, editedDescription);
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
          <p className={isDone ? '' : 'checked'}>{props.task.item}</p>
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
