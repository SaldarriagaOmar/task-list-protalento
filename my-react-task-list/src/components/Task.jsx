import React, { useEffect, useState } from 'react';
import './task.css';
import { Stack, Checkbox, Input, background } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CheckIcon, MinusIcon } from '@chakra-ui/icons'
import { useTaskOptions } from './useTaskOptions';

export default function Task(props) {
  const [isDone, setIsDone] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.task.item);
  const [editedDescription, setEditedDescription] = useState(props.task.description)
  const { checkedTask } = useTaskOptions();

  useEffect(() => {
    const savedIsDone = localStorage.getItem(`task_${props.task.id}_isDone`)
    if (savedIsDone !== null)
      setIsDone(savedIsDone === 'true')
  }, [props.task.id])

  useEffect(() => {
    localStorage.setItem(`task_${props.task.id}_isDone`, isDone.toString())
  }, [props.task.id, isDone])

  function handleEdit() {
    setIsEditing(!isEditing);
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

      <Stack>
        <Checkbox size='lg'
        className='form-check-input'
        marginLeft={10}
        checked={!isDone}
        border='solid'
        borderRadius={6}
        role='switch'
        onChange={()=>{
          checkedTask(props.task.id)
          setIsDone(!isDone)
        }
        }
        width={20}
        height={20}
        >
          
        </Checkbox>
      </Stack>
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
              className='taskText'
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
            <p className={isDone ? '' : 'checked'}>
              <strong>{props.task.item}</strong>
            </p>
            <p className={isDone ? '' : 'checked'}>
              {props.task.description}
            </p>
          </div>
        )}
      </div>
      <div className="actionbutton">
        {isEditing ? (
          <>
            <button id="save" onClick={handleSave}>
              <CheckIcon />
            </button>
            <button id="cancel" onClick={handleEdit}>
              <MinusIcon />
            </button>
          </>
        ) : (
          <>
            <button id="edit" onClick={handleEdit}>
              <EditIcon />
            </button>
            <button id="delete" onClick={confirmDelete}>
              <DeleteIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
