import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increAction, decreAction } from '../Redux/counter/counter.action';
const Counter = () => {
   let dispatch = useDispatch()
    let counter = useSelector((state) => {
        return state.counter

    })
    return (
        <div>
            <h1>Counter Value:{JSON.stringify(counter.counter)}</h1>
            <button onClick={() => { dispatch(decreAction()) }}>-</button>
            <button onClick={() => { dispatch(increAction()) }}>+</button >
        </div >
    )
}

export default Counter
