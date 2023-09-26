import React, { useState, useEffect } from 'react';
import Axios from 'axios';
function Api(){
    const [user, setusexrs] = useState([])
   useEffect(()=>{
    Axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
        setusers(res.data)  
        console.log(res.data.todos,"res")
    }) .catch(()=>{})
   })
    return <>
     <table>
        <thead> 
            <tr>
                <th>id</th>
                <th>title</th>
                <th>completed</th>
            </tr>
        </thead>
        <tbody>     
           {
            user.map((item)=>{
             return   <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed ? true:false}</td>
                </tr>
            })
           }
        </tbody>
     </table>
    </>
}
    export default Api

  
  
