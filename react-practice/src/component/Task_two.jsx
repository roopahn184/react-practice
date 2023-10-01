import React from 'react'
import { useState } from 'react';
const options = ["cricket", "football", "hockey"];
const days = ["weekdays", "weekend"];
console.log("play");
const Task_two = () => {
    const[game, setGame]= useState();
    const[day, setDay]=useState();
  return (
    <div>
    <h1>WHICH GAME ?</h1>
    {
            options.map((currVal)=>{
                console.log(currVal)
             return <>
               <input type="radio" id={currVal} name='options' value={currVal} onChange={(e)=> setGame(e.target.value)}/>
              <label for={currVal}>{currVal}</label>
              <br />
             </>
            })
        }
      
     <h2>Select days</h2>
     {
            days.map((currVal1)=>{
                console.log(currVal1)
             return <>
               <input type="radio" id={currVal1} name='day' value={currVal1} onChange={(e)=> setDay(e.target.value)}/>
              <label for={currVal1}>{currVal1}</label>
              <br />
             </>
            })
        }
      
   <h3>you will win</h3>
   <p>{game} on {day}</p>
    </div>
  )
}

export default Task_two