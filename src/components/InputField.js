/* 

import React, { useState } from 'react';

const InputField = ({ value, onChange, onAddTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

   const handleAction = () => {
    if (value) {
      onChange(inputText);
    } else {
      onAddTodo(inputText);
    }
    setInputText('');
  }; 

  return (
    <div className='TodoForm'>
      <input type="text"  className='todo-input' value={inputText} onChange={handleInputChange} />
       <button className='todobtn' onClick={handleAction}>{value ? 'Save' : 'Add'}</button> 
    </div>
  );
};

export default InputField;
 */

/* import React from 'react';

const InputField = ({ value, onChange, onAddTodo }) => {
  const handleAdd = () => {
    onAddTodo(value);
  };

  return (
    <div className='TodoForm'>
      <input type="text" className='todo-input' value={value} onChange={onChange} />
      <button className='todobtn' onClick={handleAdd}>Add</button>
    </div>
  );
};

export default InputField; */

/* import React, { useState } from 'react';

export const InputField = ({ initialValue, onSave }) => {
  const [inputText, setInputText] = useState(initialValue);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    onSave(inputText);
  };

  return (
    <div className='TodoForm'>
      <input type="text" className='todo-input' value={inputText} onChange={handleInputChange} />
      <button  className='todobtn' onClick={handleSave}>Save</button>
    </div>
  );
}; */

//child   //forwardref
/* import React, { useState } from 'react';

export const InputField = ({ value, onChange, onAddTodo }) => {
  const [inputText, setInputText] = useState(value || '');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAction = () => {
    if (value) {
      onChange(inputText);
    } else {
      onAddTodo(inputText);
    }
    setInputText('');
  };

  return (
    <div className='TodoForm'>
      <input className='todo-input' type="text" required value={inputText} onChange={handleInputChange}  />
      <button className='todobtn' onClick={handleAction}>Add</button>
    </div>
  );
}; */

import React, { useRef, forwardRef, useImperativeHandle } from 'react';

export const InputField = forwardRef(({ onSave }, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current.value,
    clearValue: () => {
      inputRef.current.value = '';
    },
  }));

  const handleSave = () => {
    const value = inputRef.current.value;
    if(value){
      onSave(value)
      inputRef.current.value = '';
      console.log(value, "====================")
    }
  }
/*   const handleSave = () => {
    const value = inputRef.current.value.trim();
    if (value !== '') {
      onSave(value);
      inputRef.current.value = '';
      console.log(value,"jhhkjhjh")
    }
  }; */
  
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
});







