/* import React, { useState, useEffect } from 'react';
import {TodoItem} from './TodoItem';
import { InputField } from './InputField';

export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);
   

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

      console.log(todos, "== todos")

    return (
        <div className='Todowrapper'>
            <h1>Get Things Done!</h1>
            <InputField onAddTodo={handleAddTodo}  />
            {todos.map((todo) => (
                <><TodoItem
                    key={todo.id}
                    todo={todo}
                    onEditTodo={handleEditTodo}
                    onDeleteTodo={handleDeleteTodo}
            /></>
            ))}

        </div>
    )
}  */

import React, { useState, useEffect } from 'react';
import {TodoItem} from './TodoItem';
import {InputField} from './InputField';
export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

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
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      <InputField onSave={handleAddTodo} />
    </div>
  );
};

 ;









/* import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import InputField from './InputField';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

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

  const handleEditDeleteTodo = (id, newText = null) => {
    if (newText === null) {
      // Delete operation
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
    } else {
      // Edit operation
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
    }
  };

  return (
    <div className='Todowrapper'>
      <h1>Get Things Done!</h1>
      <InputField onAddTodo={handleAddTodo} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditDeleteTodo={handleEditDeleteTodo}
          />
        ))}
     
      
    </div>
  );
};

 */

/* import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem'
import InputField from './InputField';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

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
    console.log(todos,id,newText, "======== on edit")
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

  console.log(todos)

  return (
    <div className='Todowrapper'>
      <h1>Get Things Done!</h1>
      <InputField onSave={handleAddTodo} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
     
      
    </div>
  );
};
 */

/* import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import InputField from './InputField';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

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
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
      <InputField onAddTodo={handleAddTodo} />
    </div>
  );
};
 */

/* import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import InputField from './InputField';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

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
      <InputField onAddTodo={handleAddTodo} />
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEditTodo={handleEditTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
    
     
    </div>
  );
};




 */