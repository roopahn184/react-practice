import React from "react";
import CompB from './CompB'

className CompA extends React.Component{
    eid = 101;
    ename = "rajeev gandhi";
    render(){
        return <div>
            <h2>component A</h2>
            <CompB one={"gm"} two={"gn"}/>
        </div>
    }
}
export default CompA