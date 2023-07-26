import React,{useState} from 'react';
import { TextInput } from './TextInput';
export const TodoForm = ({addTodo}) => {

    //const [value,setValue] = useState('')
     const [inputboxe,setInputboxe] = useState({valued:''});
     const { valued } = inputboxe;

    const handleChange = (e) => {
       const {name, value} = e.target;
       //setInputboxe((prev) => ({...prev, [name]: value}))
       setInputboxe({...inputboxe,[name]: value});
       console.log(inputboxe);
       //setInputboxe({...inputboxe,[name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
        addTodo(inputboxe?.valued)
        setInputboxe("")
    } 

   /*   const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value)
    console.log(value)
    setValue("")
    }  */
    console.log(inputboxe);
    return (
        
        <form className='TodoForm' onSubmit={handleSubmit}>
         {/*  <input type='text'
             className='todo-input'
              required value={value}
               placeholder='What is the task today?'
                 onChange={(e) => {setValue(e.target.value)}} />  */}
                  <TextInput 
                 type="text"
                 //className='todo-input'
                 name="valued"
                 placeholder='What is the task today'
                 value={valued}
                 onChange={handleChange}
                 /> 
            <button type='submit' className='todobtn'>Add Task</button>
        </form> 
        
    )
                }