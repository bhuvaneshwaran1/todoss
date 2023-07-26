import React, { useState } from "react";

/* export const TextInput = ({ value, placeholder, type, onChange }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange(value);
  }; */

  export const TextInput = ({type, value,onChange,placeholder,name})=> {
    //console.log(type, value,onChange,placeholder,name)
  return (
    < >
     
      <input 
        type={type}
        value={value}
         name={name}
        className='todo-input'
        placeholder={placeholder}
        //onChange={onChange}
        onChange={(e)=>onChange(e)}
        required
      />
    </>
  );
};

