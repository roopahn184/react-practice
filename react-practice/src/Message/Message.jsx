import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gmAction,gnAction } from '../Redux/Message/Message.action';

const Message = () => {
  let Message = useSelector((state)=>{
    return state;
  })
    let Dispatch = useDispatch()
    let gmHandler =()=>{
      Dispatch(gmAction())
    }
    let gnHandler = ()=>{
      Dispatch(gnAction())
    }
  return ( 
  <div>
        <h1>Message Component</h1> 
        <pre>{JSON.stringify(Message)}</pre>
        <button onClick={gmHandler}>gm</button>
        <button onClick={gnHandler}>gn</button>

    </div>
  )
}

export default Message