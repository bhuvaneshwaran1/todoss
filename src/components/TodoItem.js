 
 //parent//useref
/*  import React, { useState,forwardRef,useImperativeHandle } from 'react';
import { InputField } from './InputField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const TodoItem = ({ todo, onEditTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
 

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEditTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setEditText(event.target.value);
  };

  return (
    <div className='Todo'> 
      {isEditing ? (
        
         <input type="text" value={editText} onChange={handleInputChange} required />
      ) : (
        <span>{todo?.text}</span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <FontAwesomeIcon icon={faPenToSquare} onClick={handleEdit}/>
      )}
     <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteTodo(todo.id)}/>
    </div>
  );
};  */

import React, { useRef } from 'react';
import {InputField} from './InputField';

export const TodoItem = ({ todo, onEdit, onDelete }) => {
  const inputRef = useRef();

  const handleEdit = () => {
    inputRef.current?.clearValue();
    inputRef.current?.setValue(todo.text);
  };

  const handleSave = () => {
    const newText = inputRef.current.getValue();
    if (newText !== '') {
      onEdit(todo.id, newText);
    }
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      <InputField ref={inputRef} onSave={handleSave} />
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};


/* import React, { useState } from 'react';
import InputField from './InputField';

const TodoItem = ({ todo, onEditTodo, onDeleteTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSaveEditDelete = () => {
    if (editMode) {
      onEditTodo(todo.id, editText);
      setEditMode(false);
    } else {
      onDeleteTodo(todo.id);
    }
  };

  return (
    <li>
      {editMode ? (
        <InputField
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <button onClick={handleToggleEdit}>
        {editMode ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleSaveEditDelete}>
        {editMode ? 'Delete' : ''}
      </button>
    </li>
  );
};

export default TodoItem;
 */