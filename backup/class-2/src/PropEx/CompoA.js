import React from "react";
import CompoB from './CompoB'

let CompoA = () =>{
    let eid=101;
    let ename = "rajeev gandhi"
    return <div>
        <h2>component A</h2>
        <hr/>
        <CompoB  hero_Name={"RajniKanthi"} hero_In={"Nayana"}   />
    </div>

}
export default CompoA