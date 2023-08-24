import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FetchApi(){
    const[posts, setPosts] = useState([]);
   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data);
        setPosts(data)
      })
      .catch((err)=>{
        console.log(err.message);
      })
   }, [])


    return <React.Fragment>
        <thead>
                <td>
                    <th>id</th>
                    <th>title</th>
                </td>
            </thead>
      {
        posts.map((posts)=>{
            return <tr>
                <td>{posts.id}</td>
                <td>{posts.title}</td>
            </tr>
            
        })
      }
    </React.Fragment>
} export default FetchApi