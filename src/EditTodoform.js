import React,{useState} from 'react';
import { TextInput } from './TextInput';

export const EditTodoForm = ({editTodo,task}) => {

    //const [value,setValue] = useState('')

   /*  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value,task.id)
    console.log(value)
    setValue("")
    } */

    const [inputboxe,setInputboxe] = useState({valued:''});
     const { valued } = inputboxe;

    const handleChange = (e) => {
       const {name, value} = e.target;
       setInputboxe((prev) => ({...prev, [name]: value}))
       console.log(inputboxe)
       //setInputboxe({...inputboxe,[name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(inputboxe?.valued,task.id)
        setInputboxe("");
    } 


    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
           {/*  <input type='text'
             className='todo-input' value={value} placeholder='Update Task'  onChange={(e) => {setValue(e.target.value)}} /> */}
              <TextInput 
                 type="text"
                 //className='todo-input'
                 name="valued"
                 placeholder='Update task'
                 value={valued}
                 onChange={handleChange}
                 /> 
            
            <button type='submit' className='todobtn'>Update Task</button>
        </form> 
    )
}