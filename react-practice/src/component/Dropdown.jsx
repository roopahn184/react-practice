import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const countries = [
    {name: 'India', value: 'IN', cities:[
        'Delhi',
        'Mumbai'
    ]},
    {name: 'Pak', value:'PK', cities:[
        'Lahore',
        'Karachi'
    ]},
    {name:'Bangladesh', value:'BG', cities:[
        'Dhaka',
        'Chittagong'
    ]},
]

const Dropdown = () => {
   const[country, setCountry]=useState([]);

   useEffect(()=>{
   console.log(country[0]);
   console.log(country[1]);
   },[country])
  return (
    <div className='App'>
    <select onChange={(e)=>{
     console.log(e.target.value);
     setCountry(e.target.value);
    }}>
        {
            countries.map((item, index)=>{
           return <option value={index}>{item.name}</option>
            })
        }
    </select>
    {/* 2nd Dropdown */}
    <select>
        {
            countries[country] && countries[country].cities.map((item, index)=>{
            return <option value={index}>{item}</option>
            })
        }
    </select>
    </div>
  )
}

export default Dropdown