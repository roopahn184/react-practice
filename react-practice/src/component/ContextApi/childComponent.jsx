import React from 'react';
import { useContext } from 'react';
import { MyContext } from './MyContext';


const childComponent = () => {
    const {text, setText} = useContext(parentComponent)
  return (
    <div>
        <h1>{text}</h1>
        <button onClick={()=> setText("hello, world")}>Click me</button>
       </div>
  )
}

export default childComponent