import React from 'react';
import { useState, useEffect } from 'react';


function LifecycleExample(){
   const[count, setCount]= useState(0);
   useEffect(() => {
     console.log("component did mount")
   
     return () => {
       console.log("component will unmount");
     }
   }, []);

   useEffect(() => {
    console.log("component did update");
   
     
   }, [count])

    const IncrementCount = () =>{
      setCount(prevCount => prevCount + 1)
    }
   
    return <>
    <div>
        <h1>function life component</h1>
        <p>count:{count}</p>
        <button onClick={IncrementCount}>Increment</button>
    </div>
    </>
} export default LifecycleExample