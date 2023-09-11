import React, { useState } from 'react';
import './task.css';

export default function Task(props) {
  const [isDone, setIsDone] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.task.item);
  const [editedDescription, setEditedDescription] = useState(props.task.description)

  function handleChange(e) {
    setEditedTitle(e.target.value);
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
    props.onUpdate(props.task.id, editedTitle, editedDescription);
  }

  return (
    <div id='anyTask' class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={!isDone}
        onChange={() => setIsDone(!isDone)}
      />
      <div className="nombreTarea">
        {isEditing ? (
          <div>
            <input
              className="taskText"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              required
            />

            <input
              className='inText'
              id='description'
              type="text"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              placeholder='Task description'
              required
            />
          </div>
        ) : (
          <div>
            <p className={isDone ? '' : 'checked'}><strong>{props.task.item}</strong></p>
            <p className={isDone ? '' : 'checked'}>{props.task.description}</p>
          </div>
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
