import React from "react";
import App from "../App";
 let CompoB = (props) =>{
    return <div>
        <h3>component B</h3>
        <pre>{JSON.stringify(props)}</pre>
        <h3>ID:{props.id}</h3>
        <h3>ID:{props.name}</h3>
    </div>
 }
 export default CompoB