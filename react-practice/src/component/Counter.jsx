import React from "react";
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

  const  handleSubmit = () =>{
        setCount(count + 1)
    }
    return <>
    <div>
        <button onClick={handleSubmit}>Count:{count}</button>
    </div>
    </>
} export default Counter