import React, { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import InputField from './components/InputField';
//import { TodoForm } from './TodoForm';
//import { Todo } from './Todo';
//import { EditTodoForm } from './EditTodoform';
/* import {v4 as uuidv4} from 'uuid';
uuidv4(); */

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  /*  const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
          return JSON.parse(savedTodos);
        } else {
          return [];
        }
      })
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
      }, [todos]) */

      

/*     const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
        saveToLocalStorage(todos)
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
        saveToLocalStorage(todos)
    }

    const editTodo = (id) => {
       setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
       saveToLocalStorage(todos)
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id ))
        saveToLocalStorage(todos)
    }

    const editTask = (task,id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task,isEditing: !todo.isEditing} : todo
        ))
        saveToLocalStorage(todos)
    } */


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, { id: todos.length + 1, text: newTodo }];
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const handleEditTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
       {/*  <TodoForm addTodo={addTodo}/>
           {todos.map((todo,index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
           ))} */}
     
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
     
      <InputField onAddTodo={handleAddTodo} />
    </div>
  );
};

export default TodoList;
















/* 
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

export const InputField = forwardRef(({ initialValue, onSave }, ref) => {
  const inputRef = useRef(initialValue);

  useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current.value,
    clearValue: () => {
      inputRef.current.value = '';
    }
  }));

  const handleSave = () => {
    onSave(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
});

export default InputField;




import React, { useState } from 'react';
import {InputField} from './InputField';

export const TodoItem = ({ todo, onEdit, onDelete }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const inputFieldRef = React.createRef();

  const handleEdit = () => {
    setEditMode(true);
    setEditedText(todo.text);
  };

  const handleSave = () => {
     const updatedText = inputFieldRef.current.getValue();
    if (updatedText.trim() !== '') {
      onEdit(todo.id, updatedText);
      setEditMode(false);
    }
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      {editMode ? (
        <div>
          <InputField
             ref={inputFieldRef}
             initialValue={editedText}
             onSave={() => handleSave()}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
}; */
