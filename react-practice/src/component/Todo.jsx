import React from 'react';
import { useState } from 'react';
 let id = 0;
 const initial_task =[
    {id:id++, label:"cutie dog"},
    {id:id++, label:"so sweet cat"},
    {id:id++, label:"wash the dishes"},
 ]
function Todo(){
   const [tasks, setTasks] = useState(initial_task);
   const [newTasks, setNewTasks] = useState('');

  const handleChange = (event) => {
    setNewTasks(event.target.value);

   };
  const handleClick = () => {
    setTasks(
    tasks.concat({
        id:id++,
        label:newTasks.trim()
    }),
    setNewTasks('')
    )
     
   };
   const handleDelete = () =>{
     setTasks(
        tasks.filter((task) => task.id !== id),
    )
   };
    return <>
      <div>
        <div>
            <input type="text" placeholder='Add your task' onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </div>
        <div>
            <ul>
            {
            tasks.map(({id, label})=>(
              <li key={id}>
                <span>{label}</span>
                <button onClick={handleDelete}>Delete</button>
                </li>
            ))
        
            }
            </ul>
        </div>
      </div>
    </>
} export default Todo